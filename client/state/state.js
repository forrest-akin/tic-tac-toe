import { COMPUTER, getOppositePlayer, O, X } from '../game/utils.js'
import { nestedUpdate } from '../utils/utils.js'

export function createPlayer (isComputer, piece) {
  return ({ isComputer, piece })
}

export function endGame (win) {
  return setState({ isGameOver: true, win })
}

export function initState () {
  state = {
    board: initBoard(),
    player: initPlayer(),
    isGameOver: true,
  }

  return state
}

export function isGameOver () {
  return getState('isGameOver')
}

export function getCurrentPlayer () {
  const { current } = getState('player')
  return current
}

export function getState (key) {
  return key ? state[key] : state
}

export function startGame () {
  return setState({ isGameOver: false })
}

export function togglePlayer () {
  const player = { ...getState('player') }
  player.current = getOppositePlayer(player)
  setState({ player })
  return player
}

export function updateBoard (indexes, piece) {
  const board = nestedUpdate(getState('board'), indexes, piece)
  setState({ board })
  return board
}

const setState = (change) => Object.assign(state, change)

const initPlayer = () => {
  const isComputer = Math.round(Math.random()) === COMPUTER
  const p1 = createPlayer(isComputer, X)
  const p2 = createPlayer(!isComputer, O)
  
  return { current: p1, p1, p2 }
}

const initBoard = () => initRow().map(initRow)

const initRow = () => Array(3).fill(null)

let state
