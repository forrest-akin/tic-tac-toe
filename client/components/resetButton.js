import { removeElement } from '../dom/dom.js'
import { resetGame } from '../game/game.js'
import Button from './button.js'

export default function ResetButton () {
  return Button(buttonProps)
}

const buttonProps = {
  message: 'PLAY AGAIN',
  onClick: ({ target }) => {
    resetGame()
    removeElement(target.parentNode)
  }
}
