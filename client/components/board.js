import createComponent from './createComponent.js'
import Row from './row.js'

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
  height:      '600px',
  margin:      'auto',
  'max-width': '600px',
  width:       '600px',
}
