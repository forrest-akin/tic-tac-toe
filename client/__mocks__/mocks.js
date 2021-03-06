import { O, X } from "../game/utils.js"

export const gameOverBoard = () => `<div style="height: 600px; margin: auto; max-width: 600px; width: 600px;" id="board"><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row0"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-0">X</div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-1">X</div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-2"></div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row1"><div style="background-color: yellow; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-0">O</div><div style="background-color: yellow; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-1">O</div><div style="background-color: yellow; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-2">O</div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row2"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-0">X</div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-1">X</div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-2">O</div></div></div>`

export const endGameState = () => [
  [X, X, null],
  [O, O, O],
  [X, X, O],
]

export const gameOverText = () => `XXOOOXXO`

export const newBoard = () => `<div style="height: 600px; margin: auto; max-width: 600px; width: 600px;" id="board"><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row0"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-2"></div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row1"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-2"></div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row2"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-2"></div></div></div>`

export const newGame = () => `<div style="height: 900px; margin: auto; max-width: 600px; width: 600px;" id="game"><div style="margin: auto; width: 180px;"><img style="max-height: 100%; max-width: 100%;" src="assets/logo.png"></div><div style="height: 600px; margin: auto; max-width: 600px; width: 600px;" id="board"><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row0"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="0-2"></div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row1"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="1-2"></div></div><div style="display: flex; height: 180px; justify-content: space-evenly; margin: 10px; width: 580px;" id="row2"><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-0"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-1"></div><div style="background-color: ghostwhite; font-size: 100px; height: 180px; line-height: 180px; text-align: center; vertical-align: middle; width: 180px;" id="2-2"></div></div></div></div>`

export const newGameState = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export const oLosesNext = () => [
  [null, null, null],
  [O, X, X],
  [X, O, null],
]

export const oWinsNext = () => [
  [X, null, null],
  [O, O, null],
  [X, X, null],
]

export const xLosesNext = () => [
  [X, null, null],
  [null, O, X],
  [O, X, O],
]

export const xWinsNext = () => [
  [null, null, null],
  [O, X, null],
  [X, O, null],
]
