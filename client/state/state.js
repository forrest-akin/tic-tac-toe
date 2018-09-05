import { COMPUTER, getOppositePiece, getOppositePlayer } from '../game/utils.js'
import { nestedUpdate } from '../utils/utils.js'

export function endGame (win) {
  setState({ isGameOver: true, win })
}

export function initState () {
  state = {
    currentPlayer: initPlayer(),
    board: initBoard(),
    isGameOver: true,
    isFirstMove: true,
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
  setState({ isGameOver: false })
}

export function togglePiece (prevPiece) {
  const piece = getOppositePiece(prevPiece)
  setState({ piece })
  return piece
}

export function togglePlayer (player) {
  const currentPlayer = getOppositePlayer(player)
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
