import {Rover} from './Rover'

describe('Rover', () => {
    let rover
    beforeEach(() => {
        rover = new Rover('0:0-N')
    })

    it('Rover to be initialized', () => {
        expect(rover).toBeDefined()
    })

    it('Rover to move forward', () => {
        rover.command('f')
        expect(rover.position()).toEqual('0:1-N')
        rover.command('fff')
        expect(rover.position()).toEqual('0:4-N')
    })

    it('Rover to move backward', () => {
        rover.command('b')
        expect(rover.position()).toEqual('0:-1-N')
        rover.command('bbb')
        expect(rover.position()).toEqual('0:-4-N')
    })

    it('Rover to move right', () => {
        rover.command('r')
        expect(rover.position()).toEqual('1:0-N')
        rover.command('rr')
        expect(rover.position()).toEqual('3:0-N')
    })

    it('Rover to move left', () => {
        rover.command('l')
        expect(rover.position()).toEqual('-1:0-N')
        rover.command('ll')
        expect(rover.position()).toEqual('-3:0-N')
    })
})
