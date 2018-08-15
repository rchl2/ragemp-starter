const db = {};
const glob = require('glob');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../utils/logger');

// Create connection
const connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
  operatorsAliases: false,

  logging: false, // You can comment this line if you want to see all operations about DB in console.

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test database connection, log result to file and console.
connection
  .authenticate()
  .then(() => {
    logger('database', `Connection to database has been established successfully (${process.env.DATABASE_HOST}).`, 'info');
  })
  .catch(err => {
    logger('database', `Unable to connect to the database! (Error: ${err})`, 'error');
  });

/**
 * Load all models from directory "models".
 * @kubeeek
 */
glob.sync('./packages/rage/models/*.js').forEach((file) => {
  file = path.parse(file);
  db[file.name.toLowerCase()] = connection['import'](path.join(__dirname, '../../models', file.name));
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Assign connection to 'db'.
db.connection = connection;
db.Sequelize = Sequelize;

// Export module
module.exports = db;
