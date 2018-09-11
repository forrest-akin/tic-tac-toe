// creates an array of arrays of winning index combinations
/*
  [
    [
      [ 0, 0 ],
      [ 0, 1 ],
      [ 0, 2 ],
    ],
    ...
  ]
*/
export default function createWins (size = DEFAULT_SIZE) {
  return createRCWins(size).concat(createDiagWins(size))
}

const createRCWins = (size) => {
  const wins = createRowWins(size)

  return wins.concat(createColumnWins(wins))
}

const createDiagWins = (size) => {
  const wins = []
  const win = createLeftDiagWin(size)

  wins.push(win, createRightDiagWin(win))

  return wins
}

const createRowWins = (size) => {
  const wins = []

  for (let i = 0; i < size; ++i) {
    let win = []

    wins.push(win)

    for (let j = 0; j < size; ++j) {
      win.push([i, j])
    }
  }

  return wins
}

const createColumnWins = (rowWins) =>
  rowWins.map(win => win.map(columnTransform))

const createLeftDiagWin = (size) => {
  const win = []

  for (let i = 0, j = 0; i < size; ++i, ++j) {
    win.push([i, j])
  }

  return win
}

const createRightDiagWin = (leftDiagWin) =>
  leftDiagWin.map((indexes) => diagTransform(indexes, leftDiagWin.length))

const columnTransform = ([i, j]) => ([j, i])

const diagTransform = ([i, j], size) => ([size - j - 1, j])

const DEFAULT_SIZE = 3
