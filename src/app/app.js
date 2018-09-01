import Board from './components/board/board.js'
import { mount } from './dom/dom.js'
import { play } from './game/game.js'
import { initState } from './state/state.js'

function startApp () {
  const { board } = initState()
  mount(Board({ rows: board }))
  play()
}

startApp()
