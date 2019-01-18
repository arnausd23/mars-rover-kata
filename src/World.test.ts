import {World} from './World'

describe('World', () => {
    let world
    beforeEach(() => {
        world = new World('10:10:5:5')
    })

    it('Should  be instantiated', () => {
        expect(world).toBeDefined()
    })
})
