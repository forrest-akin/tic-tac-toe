import createComponent from '../createComponent.js'
import Row from './row/row.js'

export default function Board ({ rows }) {
  return createComponent({
    attributes,
    children: rows.map(mapRows),
    styles
  })
}

const mapRows = (cells, rowIdx) => Row({ cells, rowIdx })

const attributes = { id: 'board' }

const styles = {
  display:          'flex',
  'flex-direction': 'column',
  height:           '900px',
  margin:           'auto',
  'max-width':      '900px',
  width:            '900px',
}
