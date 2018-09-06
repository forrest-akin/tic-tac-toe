import minimax from '../minimax.js'
import { X, O } from '../utils.js'
import { oLosesNext, oWinsNext, xLosesNext, xWinsNext } from './mocks.js'

describe('minimax', () => {
  it('should return an object with winning indexes for X if it can be played', () => {
    const { indexes } = minimax(X, xWinsNext())
    expect(indexes).toEqual([0, 2])
  })

  it('should return an object with winning indexes for O if it can be played', () => {
    const { indexes } = minimax(O, oWinsNext())
    expect(indexes).toEqual([1, 2])
  })

  it('should prevent X from losing to O', () => {
    const { indexes } = minimax(X, xLosesNext())
    expect(indexes).toEqual([0, 0])
  })

  it('should prevent O from losing to X', () => {
    const { indexes } = minimax(O, oLosesNext())
    expect(indexes).toEqual([0, 2])
  })
})
