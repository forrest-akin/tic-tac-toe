import createComponent from '../components/createComponent.js'
import Logo from '../components/logo.js'
import Board from '../components/board.js'

export default function Game ({ rows }) {
  return createComponent({
    attributes: { id: 'game' },
    children: [
      Logo(),
      Board({ rows })
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
