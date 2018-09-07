import ResetButton from '../components/resetButton.js'
import {
  appendChild, applyStyles, clickElement, getElementById,
} from '../dom/dom.js'
import {
  endGame, getState, initState, isComputerTurn, isFirstMove, isGameOver,
  startGame, togglePiece, togglePlayer, updateBoard,
} from '../state/state.js'
import { getRandomItem } from '../utils/utils.js'
import minimax from './minimax.js'
import {
  clearBoard, getCell, getEmptyCells, getWinningIndexes, isTie, isWinPossible
} from './utils.js'

export function makeMove (indexes, piece) {
  togglePiece(piece)
  togglePlayer(getState('player'))
  evaluateGameState(updateBoard(indexes, piece))
  if (!isGameOver()) play()
}

export function play () {
  if (isComputerTurn()) makeComputerMove()
}

export function resetGame () {
  clearBoard(getState('board'))
  initState()
  startGame()
  play()
}

const evaluateGameState = (board) => {
  const emptyCells = getEmptyCells(board)
  if (!isWinPossible(emptyCells)) return
  
  const win = getWinningIndexes(board)
  if (win || isTie(emptyCells)) gameOver(win)
}

const gameOver = (win) => {
  endGame(win)
  styleWinners(win)
  showResetButton()
}

const makeComputerMove = () => {
  const { indexes } = getBestMove(cloneBoard())
  if (indexes) clickCell(indexes)
}

const styleWinners = (win = []) =>
  win.forEach(indexes => applyStyles(getCell(indexes), winStyles))

const showResetButton = () => appendChild(getGame(), ResetButton())

const getBestMove = (board) =>
  isFirstMove()
  ? getFirstMove()
  : minimax(board, getState('piece'))

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

const winStyles = { 'background-color': 'yellow' }
