import createComponent from '../components/createComponent.js'
import Board from '../components/board.js'
import Logo from '../components/logo.js'
import StartButton from '../components/startButton.js'
import { initState } from '../state/state.js'

export default function Game () {
  const { board } = initState()
  return createComponent({
    attributes: { id: 'game' },
    children: [
      Logo(),
      Board({ rows: board }),
      StartButton(),
    ],
    styles,
  })
}

const styles = {
  height:      '900px',
  margin:      'auto',
  'max-width': '600px',
  width:       '600px',
}
