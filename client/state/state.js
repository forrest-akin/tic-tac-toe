import { COMPUTER, getOppositePiece, getOppositePlayer } from '../game/utils.js'
import { nestedUpdate } from '../utils/utils.js'

export function endGame (win) {
  return setState({ isGameOver: true, win })
}

export function initState () {
  state = {
    board: initBoard(),
    currentPlayer: initPlayer(),
    isFirstMove: true,
    isGameOver: true,
    piece: 'X',
  }

  return state
}

export function isComputerTurn () {
  return getState('currentPlayer') === COMPUTER
}

export function isFirstMove () {
  return getState('isFirstMove')
}

export function isGameOver () {
  return getState('isGameOver')
}

export function getState (key) {
  return key ? state[key] : state
}

export function startGame () {
  return setState({ isGameOver: false })
}

export function togglePiece () {
  const piece = getOppositePiece(getState('piece'))
  setState({ piece })
  return piece
}

export function togglePlayer () {
  const currentPlayer = getOppositePlayer(getState('currentPlayer'))
  setState({ currentPlayer })
  return currentPlayer
}

export function updateBoard (indexes, piece) {
  const board = nestedUpdate(getState('board'), indexes, piece)
  setState({ board, isFirstMove: false })
  return board
}

const setState = (change) => Object.assign(state, change)

const initPlayer = () => Math.round(Math.random())

const initBoard = () => initRow().map(initRow)

const initRow = () => Array(3).fill(null)

let state
