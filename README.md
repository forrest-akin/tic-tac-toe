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
All files            |    90.48 |    76.12 |    88.98 |    93.33 |                   |
 components          |     76.6 |       25 |    72.73 |    82.05 |                   |
  button.js          |      100 |      100 |      100 |      100 |                   |
  cell.js            |       40 |        0 |        0 |    54.55 |     8,26,27,28,29 |
  createComponent.js |      100 |       50 |      100 |      100 |              5,27 |
  resetButton.js     |       50 |      100 |       50 |       50 |             12,13 |
 dom                 |      100 |      100 |      100 |      100 |                   |
  dom.js             |      100 |      100 |      100 |      100 |                   |
 game                |    90.65 |    77.27 |     87.5 |    93.81 |                   |
  game.js            |    70.45 |    46.67 |    53.33 |    78.13 |... 29,30,48,49,58 |
  minimax.js         |      100 |      100 |      100 |      100 |                   |
  utils.js           |      100 |      100 |      100 |      100 |                   |
  wins.js            |      100 |    33.33 |      100 |      100 |             48,62 |
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
