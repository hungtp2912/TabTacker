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