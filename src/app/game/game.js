import ResetButton from '../components/resetButton/resetButton.js'
import {
  appendChild, applyStyles, clickElement, getElementById,
} from '../dom/dom.js'
import {
  gameOver, getState, initState, isComputerTurn, isFirstMove,
  togglePiece, togglePlayer, updateBoard,
} from '../state/state.js'
import { getRandomItem } from '../utils/utils.js'
import minimax from './minimax.js'
import {
  getCell, getEmptyCells, getWinningIndexes, isTie, isWinPossible
} from './utils.js'

export function makeMove (indexes, piece) {
  togglePiece(piece)
  togglePlayer(getState('currentPlayer'))
  evaluateGameState(updateBoard(indexes, piece))
  play()
}

export function play () {
  isComputerTurn() && makeComputerMove()
}

export function resetGame () {
  initState()
  play()
}

const evaluateGameState = (board) => {
  const emptyCells = getEmptyCells(board)
  if (!isWinPossible(emptyCells)) return
  
  const win = getWinningIndexes(board)
  if (win || isTie(emptyCells)) endGame(win)
}

const endGame = (win) => {
  gameOver(win)
  styleWinners(win)
  showResetButton()
}

const makeComputerMove = () => {
  const { indexes } = getBestMove(cloneBoard())
  if (indexes) clickCell(indexes)
}

const styleWinners = (win = []) =>
  win.forEach(indexes => applyStyles(getCell(indexes), winStyles))

const winStyles = { 'background-color': 'yellow' }

const showResetButton = () => appendChild(getGame(), ResetButton())

const getBestMove = (board) => {
  return isFirstMove()
    ? getFirstMove()
    : minimax(getState('piece'), board)
}

const cloneBoard = () => getState('board').map(row => [...row])

const clickCell = (indexes) => clickElement(getCell(indexes))

const getFirstMove = () => ({ indexes: getRandomItem(firstMoves) })

const getGame = () => getElementById('game')

// best first move is any corner
// https://puzzling.stackexchange.com/questions/30/what-is-the-optimal-first-move-in-tic-tac-toe
const firstMoves = [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
]
