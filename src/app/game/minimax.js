import {
  createBinaryComporator, get, isGreaterThan, isLessThan, set
} from '../utils/utils.js'
import {
  getEmptyCells, getOppositePiece, getWinningIndexes, isTie, isWinPossible
} from './utils.js'

// recursively evaluate each empty cell (depth first) and return the best move
export default function minimax (piece, board) {
  const emptyCells = getEmptyCells(board)

  return getTerminalMove(board, emptyCells)
    || emptyCells.reduce(
        (best, indexes) => pickBest(best, getMove(piece, board, indexes)),
        initScore(piece)
      )
}

const getTerminalMove = (board, emptyCells) =>
  (isWinPossible(emptyCells) && getWinningMove(board))
    || getTieMove(emptyCells)

const getWinningMove = (board) => {
  const [ indexes ] = getWinningIndexes(board) || [] 
  return indexes && getScore(get(board, indexes))
}

const getTieMove = (emptyCells) => isTie(emptyCells) && getScore(TIE)

const getScore = (key) => ({ score: SCORES[key] })

const getMove = (piece, board, indexes) => {
  set(board, indexes, piece)
  const move = minimax(getOppositePiece(piece), board)
  set(board, indexes, null)
  return Object.assign(move, { indexes, piece })
}

const pickBest = (a, b) => getPicker(b.piece)(a, b)

const getPicker = (piece) => isMaximizing(piece) ? getMaxMove : getMinMove

const isMaximizing = (piece) => piece === X

const createMovePicker = (predicate) =>
  createBinaryComporator(predicate, ['score'])

const getMaxMove = createMovePicker(isGreaterThan)

const getMinMove = createMovePicker(isLessThan)

const initScore = (piece) => ({
  score: isMaximizing(piece) ? -Infinity : Infinity
})

const O = 'O'
const TIE = 'TIE'
const X = 'X'

const SCORES = {
  [O]:   -10,
  [TIE]: 0,
  [X]:   10,
}
