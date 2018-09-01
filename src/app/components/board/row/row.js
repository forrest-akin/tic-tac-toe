import createComponent from '../../createComponent.js'
import Cell from './cell/cell.js'

export default function Row ({ cells, rowIdx }) {
  return createComponent({
    attributes: { id: `row${rowIdx}` },
    children: cells.map(($, cellIdx) => Cell({ cellIdx, rowIdx })),
    styles,
  })
}

const styles = {
  display: 'flex',
  height:  '300px',
  width:   '900px',
}
