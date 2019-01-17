import {Rover} from './Rover'

describe('Rover', () => {
  const rover = new Rover('0:0-N')

  it('Rovert to be initialized', () => {
    expect(rover).toBeDefined()
  })

  it('Rovert to move forward', () => {
    rover.command('f');
    expect(rover.position()).toEqual('0:1-N');
    rover.command('fff')
    expect(rover.position()).toEqual('0:4-N');
  })
  /*
  it('Rovert to move backward', () => {
    rover.command('b');
    expect(rover.position()).toEqual('0:-1-N');
    rover.command('bbb')
    expect(rover.position()).toEqual('0:-4-N');
  })*/
})
