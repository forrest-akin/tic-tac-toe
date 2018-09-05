import { removeElement } from '../dom/dom.js'
import { play } from '../game/game.js'
import { startGame } from '../state/state.js'
import Button from './button.js'

export default function StartButton () {
  return Button(buttonProps)
}

const buttonProps = {
  message: 'START GAME',
  onClick: ({ target }) => {
    startGame()
    play()
    removeElement(target.parentNode)
  }
}
