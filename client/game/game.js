import { clickCell } from '../components/cell.js'
import { styleWinners } from '../components/board.js'
import { showResetButton } from '../scenes/game.js'
import {
  endGame, getState, initState, isComputerTurn, isGameOver,
  startGame, togglePiece, togglePlayer, updateBoard,
} from '../state/state.js'
import minimax from './minimax.js'
import {
  getEmptyCells, getWinningIndexes, isTie, isWinPossible
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
  const { indexes } = minimax(cloneBoard(), getState('piece'))
  if (indexes) clickCell(indexes)
}

const cloneBoard = () => getState('board').map(row => [...row])
