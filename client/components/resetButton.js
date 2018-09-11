import { removeElement } from '../dom/dom.js'
import { resetGame } from '../game/game.js'
import { getState } from '../state/state.js'
import { clearBoard } from './board.js'
import Button from './button.js'

export default function ResetButton () {
  return Button(buttonProps)
}

const buttonProps = {
  message: 'PLAY AGAIN',
  onClick: ({ target }) => {
    clearBoard(getState('board'))
    resetGame()
    removeElement(target.parentNode)
  }
}
