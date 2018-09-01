import { getElementById, insertText } from '../dom/dom.js'
import {
  getState, isComputerTurn, isFirstMove, isGameOver, togglePiece, togglePlayer, updateBoard
} from '../state/state.js'
import minimax from './minimax.js'

export function makeMove(cell) {
  if (isGameOver()) return

  const { currentPlayer, piece } = getState()

  insertText(cell, piece)
  updateBoard(getBoardIndexes(cell), piece)
  togglePiece(piece)
  togglePlayer(currentPlayer)
  play()
}

export function play() {
  isComputerTurn() && makeComputerMove()
}

const makeComputerMove = () => {
  const { indexes } = getBestMove(cloneBoard())
  clickCell(indexes)
}

const getBestMove = board =>
  isFirstMove(board)
  ? getFirstMove()
  : minimax(getState('piece'), board)

const cloneBoard = () => getState('board').map(row => [...row])

const clickCell = indexes => getCell(indexes).click()

const getFirstMove = () => ({ indexes: getRandomItem(firstMoves) })

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]

const getCell = ([ i, j ]) => getElementById(`${i}-${j}`)

const getBoardIndexes = cell => parseId(cell.getAttribute('id'))

const parseId = id => id.split('-')

// best first move is any corner
// https://puzzling.stackexchange.com/questions/30/what-is-the-optimal-first-move-in-tic-tac-toe
const firstMoves = [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
]
