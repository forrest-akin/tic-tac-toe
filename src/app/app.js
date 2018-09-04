import Game from './scenes/game/game.js'
import { mount } from './dom/dom.js'
import { play } from './game/game.js'
import { initState } from './state/state.js'

function startApp () {
  const { board } = initState()
  mount(Game({ rows: board }))
  play()
}

startApp()
