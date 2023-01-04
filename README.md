# TabTacker
Source project from freeCodeCamp.org: Full stack web app using Vue.js and Express.js

======================= Setup Client side ==================================
1- Run: npm i -g vue-cli
2- Run: vue init webpack client
    Choose options as below:
    ? Project name client
    ? Project description A Vue.js project
    ? Author Henry Tu <hungtp2912@gmail.com>
    ? Vue build standalone
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Set up unit tests Yes
    ? Pick a test runner karma
    ? Setup e2e tests with Nightwatch? Yes
    ? Should we run `npm install` for you after the project has been created? (recommended) npm

======================= Setup Server side ==================================
1- Run npm init -f
2- Run npm i -s nodemon eslint //Eslint is an open source project that helps you find and fix problems with your JavaScript code
3- Configure eslint: npm init @eslint/config
    Choose options as below:
    ✔ How would you like to use ESLint? · problems
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · vue
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · browser
    ✔ What format do you want your config file to be in? · JavaScript
    Local ESLint installation not found.
    The config that you've selected requires the following dependencies:

    eslint-plugin-vue@latest eslint@latest
    ✔ Would you like to install them now? · No / Yes
    ✔ Which package manager do you want to use? · npm
    Installing eslint-plugin-vue@latest, eslint@latest
4- Run npm i -s express body-parser cors morgan
    Dealing with error: // "You are linting "node_modules/ipaddr.js", but all of the files matching the glob pattern                "node_modules/ipaddr.js" are ignored.

                            If you don't want to lint these files, remove the pattern "node_modules/ipaddr.js" from the list of arguments passed to ESLint.

                            If you do want to lint these files, try the following solutions:

                            * Check your .eslintignore file, or the eslintIgnore property in package.json, to ensure that the files are not configured to be ignored.
                            * Explicitly list the files from this glob that you'd like to lint on the command-line, rather than providing a glob as an argument." //
    In package.json change to: // "scripts": {
                            "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
                            "lint": "eslint src/*.js"
                        }, //

    Dealing with error: // /Users/henrytu/HenryFile/AppsDev/WebDev/YoutubeLearning/TabTacker/server/src/app.js
                            1:7   error  'express' is assigned a value but never used     no-unused-vars
                            1:17  error  'require' is not defined                         no-undef
                            2:7   error  'bodyParser' is assigned a value but never used  no-unused-vars
                            2:20  error  'require' is not defined                         no-undef
                            3:7   error  'cors' is assigned a value but never used        no-unused-vars
                            3:14  error  'require' is not defined                         no-undef //
    In .eslintrc.js add: "env": {
                                    "browser": true,
                                    "node": true,
                                    "es2021": true
                                }