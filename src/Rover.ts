import { Point } from './Point';
import { World } from './World';

export class Rover {
    public point: Point;
    public world: World;

    constructor(point: string, world: string) {
        this.point = new Point(point)
        this.world = new World(world, point)
    }

    public position() {
        return this.world.position();
    }

    public command(command: string) {
        const commands = command.split('')

        commands.forEach((singleCommand) => {
            this.world.move(singleCommand);
        })
    }
}
