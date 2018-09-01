import createWins from './wins.js'
import { getOppositePiece } from '../state/state.js'

export default function minimax (piece, board, isMax = true) {
  const emptyCells = getEmptyCells(board)

  // tie
  if (isTie(emptyCells)) {
  	return { score: 0 }
  }

  // lose
  if (isWinningPosition(getOppositePiece(piece), board, emptyCells)) {
     return { score: -10 }
  }

  // win
	if (isWinningPosition(piece, board, emptyCells)) {
    return { score: 10 }
	}

  const getMove = getComparator(isMax)

  // recursively evaluate each empty cell and return the best move
  return emptyCells.reduce((best, indexes) => {
      const move = {
        ...getBestMove(piece, board, isMax, indexes),
        indexes,
      }

      return getMove(best, move)
    }, { score: getInitialScore(isMax) })
}

const getBestMove = (piece, board, isMax, [ i, j ]) => {
  board[i][j] = piece
  const move = minimax(getOppositePiece(piece), board, !isMax)
  board[i][j] = null
  return move
}

const getComparator = isMax => isMax ? getMaxMove : getMinMove

const getInitialScore = isMax => isMax ? (-Infinity) : Infinity

const createMoveGetter = predicate => createBinaryComporator(predicate, 'score')

const createBinaryComporator = (predicate, key) =>
  (a, b) => predicate(get(a, key), get(b, key)) ? a : b

const get = (item, key) => key ? item[key] : item

const isGreaterThan = (a, b) => a > b

const isLessThan = (a, b) => a < b

const getMaxMove = createMoveGetter(isGreaterThan)

const getMinMove = createMoveGetter(isLessThan)

// returns the available spots on the board
const getEmptyCells = board =>
  board.reduce((emptyCells, row, i) => {
    row.forEach((cell, j) => isEmpty(cell) && emptyCells.push([i, j]))
    return emptyCells
  }, [])

const isEmpty = cell => !cell

const isTie = emptyCells => emptyCells.length === 0

const isWinningPosition = (piece, board, emptyCells) =>
  isWinPossible(emptyCells)
  && wins.some(win => win.every(([i, j]) => board[i][j] === piece))

const isWinPossible = emptyCells => emptyCells.length < 5

const wins = createWins()
