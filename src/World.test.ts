import {World} from './World'

describe('World', () => {
    let world: World;
    beforeEach(() => {
        world = new World('10:10:5:5', '0:0-N')
    })

    it('Should  be instantiated', () => {
        expect(world).toBeDefined()
    })
})
