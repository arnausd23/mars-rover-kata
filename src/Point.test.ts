import {Point} from './Point'

describe('Point', () => {
  const point = new Point('0:0')

  it('Point to be initialized', () => {
    expect(point.getX()).toEqual(0)
    expect(point.getY()).toEqual(0)
  })

  it('Point x should be incremented and decremented', () => {
    expect(point.incrementX()).toEqual(1);
    expect(point.incrementX(2)).toEqual(3);
    expect(point.decrementX()).toEqual(2);
  })
  
  it('Point y should be incremented and decremented', () => {
    expect(point.incrementY()).toEqual(1);
    expect(point.incrementY(2)).toEqual(3);
    expect(point.decrementY()).toEqual(2);
  })
})
