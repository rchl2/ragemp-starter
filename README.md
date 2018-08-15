
## [RAGE Multiplayer ] backend development boilerplate
Start your next project within seconds! This boilerplate accelerates the work you need to put to start developing server. Just clone repo, install packages, setup database with two commands and thats it! You have working environment ready! :clap:

:car: Included example vehicle model with manager, loader, migration and seeder!

[![dependencies](https://david-dm.org/rchl2/ragemp-starter/status.svg)](https://david-dm.org/rchl2/ragemp-starter) [![dev-dependencies](https://david-dm.org/rchl2/ragemp-starter/dev-status.svg)](https://david-dm.org/rchl2/ragemp-starter?type=dev) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Quick start
1. Clone or download repository.
2. Extract files to your RAGE Multiplayer server-files directory.
3. Open bash/command prompt, switch into server directory:
	- Type `yarn` if you are using Yarn or `npm install` if you are using NPM.
	- Look at .env.example file and create your environment file, fill it with database credentials.
	- Setup database using Sequelize CLI - `./node_modules/.bin/sequelize db:create`.
	- Run migration for example table 'Vehicles' - `./node_modules/.bin/sequelize db:migrate`.
	- Type `yarn watch` - that's it! You are ready to develop. Any changes in files in `client_packages` or `packages` directory gonna automatically restart server! :sparkles:

## What's inside?
- **[ESLint]** with JavaScript standard style config, prepared for ES6.
- **[dotenv]** zero-dependency module that loads environment variables from a .env file into process.env.
- **[nodemon]** monitor any changes in server/client files and automtically restart the server!
- **[sequelize]** promise-based ORM for Node.js including CLI to easily operate on database (see commands below).
- **[mysql2]** fast mysql driver.
- **[lodash]** utility library thats deliver modularity, performance, & extras.
- **[log4js]** logging library for Node.js based on original Log4js framework.

## Features
**Client-side features**
 - Disabled vehicle rewards,
 - Disabled wanted stars and cash hud,
 - Three new functions for managing chat. States of two last functions are "saved" to globals:
	 - **clearGameChat()** - clear game chat.
	 - **toggleChat(boolean)** - toggles chat visibility.
	 - **disableChat(boolean)** - enables or disables chat.
 
**Client-side helpers**
 - **hideHudElements(array)** - hide hud elements from array.
 - **disableControlActions(array)** - disable controls from array.
 - **sendHelpMessage(string)** - sends help message in the top left corner.

**Server-side features**
 - Loads server gamemode async with help of loaders,
 - Logger based on log4js package, with following configuration:
	 - Logs inside /logs/ directory and printed in console,
	 - Easy wrapper function around logger - **logger(moduleName,  message,  type)**, for example:
		 - `logger('vehicle', 'Created vehicle Sabre on world.', 'info');`
	 - Available log types; `trace, debug, info, warn, error, fatal`.
 - Sequelize as promise-based ORM with following things:
	 - Ability to loading models dynamically from `models` directory,
	 - One example model **Vehicle**,
	 - Migration for model **Vehicle**,
	 - Seeder for model **Vehicle**.
 - Three loaders, following:
	 - **"Bootstrap"** loader - responsible for booting all the database models data for the script (ex: characters, vehicles, doors, etc).
	 - **Commands loader** - responsible for sync all commands files from directory and put them on server.
	 - **Database loader** - responsible for load database and models from main *database* file.
- Example vehicles manager, with following functions:
	- **create(player, model)** - creates entry as vehicle in database with given model and random colors.
	- **spawn(vehicle)** - creates vehicle (entity) from database ingame.
	- **configureCreated(createdVehicle, vehicleData)** - configures created vehicle with given data, setting  and assigns example informations from database to entity.
	- **loadAll()** - loads all vehicles from database and spawns them ingame.
- Example command (/vehicle) to create vehicle to show how its working with *"manager"*.
 
**Server-side helpers**
 - **randomInt(min, max)** - returns random int from min to max.

## Scripts inside
- `watch`  starts server and monitor all changes in files under  `client_packages` and `packages` directory.
- `watch-server` starts server and watch all changes in files under `packages` directory.
- `watch-client` starts server and watch all changes in files under `client_packages` directory.

## What if...
*I don't want MySQL. What about PostgreSQL/SQLite?*
No problem. Just remove package **mysql2**, and switch to one of the following:
 - For PostgreSQL: `yarn add pg pg-hstore` or `npm install --save pg pg-hstore`
 - For SQLite `yarn add sqlite3` or `npm install --save sqlite3`

*I don't like semicolons! (eslint)*
- Edit line **semi** under rules with following code: `"semi": ["error", "never"]`

*I want identation with tabs, not spaces! (eslint)*
- No worries. Add rule **indent** with following code: `["error", "tab"]`

*I want double quotes! (eslint)*
- Add rule **quotes** with following code: `["error", "double"]`

## Need more help?
- **[RAGE Multiplayer Wiki]** all you need to develop server.
- **[Sequelize Docs]** documentation for Sequelize.
- **[Node.js Docs]** - Node.js documentation.

## Sequelize CLI useful commands
If you want use 'sequelize' globally, just install CLI globally with: 

 - Yarn: `yarn global add sequelize-cli` 
 - NPM: `npm install -g sequelize-cli`

```
  db:migrate                        Run pending migrations.
  db:migrate:status                 List the status of all migrations.
  db:migrate:undo --name migration-file.js Reverts a  specific migration.
  db:migrate:undo:all               Revert all migrations ran.
  db:seed                           Run specified seeder.
  db:seed:undo                      Deletes data from the database.
  db:seed:all                       Run every seeder.
  db:seed:undo:all                  Deletes data from the database.
  db:create                         Create database specified by configuration.
  db:drop                           Drop database specified by configuration.
  migration:generate                Generates a new migration file.
  model:generate                    Generates a model and its migration.
  seed:generate                     Generates a new seed file.
```

## Contributing
If you want to help community grow or just expand this example, before pushing pull request please make sure your code is formatted along with JavaScript Standard Style (or just don't change anything in this eslint config).

[//]: # (https://stackoverflow.com/questions/4823468/comments-in-markdown)

[ESLint]: <https://eslint.org/>
[dotenv]: <https://github.com/motdotla/dotenv>
[nodemon]: <https://github.com/remy/nodemon>
[sequelize]: <http://docs.sequelizejs.com/>
[mysql2]: <https://github.com/sidorares/node-mysql2>
[lodash]: <https://lodash.com/>
[log4js]: <https://github.com/log4js-node/log4js-node>
[node.js]: <http://nodejs.org>
[RAGE Multiplayer ]: <https://rage.mp/>
[RAGE Multiplayer Wiki]: <https://wiki.rage.mp/index.php?title=Main_Page>
[Sequelize Docs]: <http://docs.sequelizejs.com/>
[Node.js Docs]: <https://nodejs.org/dist/latest-v8.x/docs/api/>
