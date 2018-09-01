export function updateBoard (indexes, piece) {
  const board = nestedUpdate(getState('board'), indexes, piece)
  setState({ board, isFirstMove: false })
  return board
}

export function isFirstMove () {
  return getState('isFirstMove')
}

export function isGameOver () {
  return getState('isGameOver')
}

export function isComputerTurn () {
  return getState('currentPlayer') === COMPUTER
}

export function getState (key) {
  return key ? state[key] : state
}

export function togglePiece (prevPiece) {
  const piece = getOppositePiece(prevPiece)
  setState({ piece })
  return piece
}

export function getOppositePiece (piece) {
  return piece === 'X' ? 'O' : 'X'
}

export function togglePlayer (player) {
  const currentPlayer = getOppositePlayer(player)
  setState({ currentPlayer })
  return currentPlayer
}

export function getOppositePlayer (player) {
  return player === COMPUTER ? HUMAN : COMPUTER
}

export function initState () {
  state = {
    currentPlayer: initPlayer(),
    board: initBoard(),
    isGameOver: false,
    isFirstMove: true,
    piece: 'X',
  }

  return state
}

const nestedUpdate = (arr, [idx, ...indexes], item) =>
  idx === undefined
  ? item
  : updateItem(arr, idx, nestedUpdate(arr[idx], indexes, item))

const updateItem = (arr, idx, item) => {
  const copy = [...arr]
  copy.splice(idx, 1, item)
  return copy
}

const setState = (change) => Object.assign(state, change)
const initPlayer = () => Math.round(Math.random())
const initBoard = () => initRow().map(() => initRow())
const initRow = () => Array(3).fill(null)

const HUMAN = 0
const COMPUTER = 1

let state
