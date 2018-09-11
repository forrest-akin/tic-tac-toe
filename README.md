<div align="center">
  <img src="client/assets/logo.png" alt="TTT" height="200" />
</div>

Tic-tac-toe without all the dependencies!

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Requires [Node](https://nodejs.org/) to run the server. I recommend installing the LTS release with [nvm](https://github.com/creationix/nvm).

The client is built with modern JavaScript features, so needs to be run in a modern browser. Works in the latest versions of Chrome, Firefox, and Safari.

### Installing

clone the project

```
git clone git@github.com:forrest-akin/tic-tac-toe.git
```

install dependencies (only required to run tests)

```
npm install
```

start the server
```
npm start
```
and you're done! Now you can navigate to `localhost:1337` in your favorite browser and start playing!

## Running the tests

```
npm test
```
or to run tests with a coverage report
```
npm run test:coverage
```
### Latest Test Coverage Report
```
---------------------|----------|----------|----------|----------|-------------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------------|----------|----------|----------|----------|-------------------|
All files            |    86.45 |    77.61 |    82.68 |    89.47 |                   |
 components          |    69.62 |    18.18 |       60 |    73.85 |                   |
  board.js           |    81.82 |        0 |    71.43 |     87.5 |                 7 |
  button.js          |      100 |      100 |      100 |      100 |                   |
  cell.js            |       50 |        0 |    33.33 |       60 |  9,21,29,30,31,32 |
  createComponent.js |      100 |       50 |      100 |      100 |              5,27 |
  logo.js            |    57.14 |        0 |        0 |       80 |                 4 |
  resetButton.js     |       40 |      100 |       50 |       40 |          14,15,16 |
  row.js             |    33.33 |      100 |        0 |    33.33 |               5,7 |
  startButton.js     |       20 |      100 |        0 |       20 |        7,13,14,15 |
 dom                 |      100 |      100 |      100 |      100 |                   |
  dom.js             |      100 |      100 |      100 |      100 |                   |
 game                |    90.98 |    85.37 |    88.89 |       95 |                   |
  game.js            |    67.86 |    58.33 |       50 |    76.19 |    25,26,27,45,46 |
  minimax.js         |    94.87 |       95 |    92.86 |      100 |                12 |
  utils.js           |      100 |      100 |      100 |      100 |                   |
  wins.js            |      100 |      100 |      100 |      100 |                   |
 scenes              |    71.43 |      100 |    66.67 |    66.67 |                   |
  game.js            |    71.43 |      100 |    66.67 |    66.67 |             10,11 |
 state               |      100 |      100 |      100 |      100 |                   |
  state.js           |      100 |      100 |      100 |      100 |                   |
 utils               |      100 |      100 |      100 |      100 |                   |
  utils.js           |      100 |      100 |      100 |      100 |                   |
---------------------|----------|----------|----------|----------|-------------------|
```

## Built With

* [Node](https://nodejs.org/) - a JavaScript runtime built on Chrome's V8 JavaScript engine
* [Vanilla JS](http://vanilla-js.com/) - the language of the web
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing

## Contributing

Please follow the guidelines of this [Git Workflow](https://www.asmeurer.com/git-workflow/) to start contributing. TL;DR

1. fork the repo
2. branch off of master
3. commit changes to your branch
4. open a PR from your fork/branch to origin/master

## Authors

* **Forrest Akin** - *Initial work*
