import { oLosesNext, oWinsNext, xLosesNext, xWinsNext } from '../__mocks__/mocks.js'
import minimax from '../minimax.js'
import { X, O } from '../utils.js'

describe('minimax', () => {
  it('should return an object with winning indexes for X if it can be played', () => {
    const { indexes } = minimax(xWinsNext(), X)
    expect(indexes).toEqual([0, 2])
  })

  it('should return an object with winning indexes for O if it can be played', () => {
    const { indexes } = minimax(oWinsNext(), O)
    expect(indexes).toEqual([1, 2])
  })

  it('should prevent X from losing to O', () => {
    const { indexes } = minimax(xLosesNext(), X)
    expect(indexes).toEqual([0, 2])
  })

  it('should prevent O from losing to X', () => {
    const { indexes } = minimax(oLosesNext(), O)
    expect(indexes).toEqual([0, 2])
  })
})
