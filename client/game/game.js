import { clickCell } from '../components/cell.js'
import { styleWinners } from '../components/board.js'
import { showResetButton } from '../scenes/game.js'
import {
  endGame, getCurrentPlayer, getState, initState, isGameOver,
  startGame, togglePlayer, updateBoard,
} from '../state/state.js'
import minimax from './minimax.js'
import {
  getEmptyCells, getWinningIndexes, isTie, isWinPossible
} from './utils.js'

export function makeMove (indexes, piece) {
  const { current } = togglePlayer()
  evaluateGameState(updateBoard(indexes, piece))
  if (!isGameOver()) play(current)
}

export function play (player = getCurrentPlayer()) {
  if (player.isComputer) makeComputerMove(player.piece)
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

const makeComputerMove = (piece) => {
  const { indexes } = minimax(cloneBoard(), piece)
  if (indexes) clickCell(indexes)
}

const cloneBoard = () => getState('board').map(row => [...row])
