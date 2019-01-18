import {Point} from './Point'

export class Rover {
    public point: Point

    constructor(point: string) {
        this.point = new Point(point)
    }

    public position() {
        return `${this.point.getX()}:${this.point.getY()}-N`
    }

    public command(command: string) {
        const commands = command.split('')

        commands.forEach((singleCommand) => {
            switch (singleCommand) {
                case 'f': return this.point.incrementY()
                case 'b': return this.point.decrementY()
                case 'r': return this.point.incrementX()
                case 'l': return this.point.decrementX()
            }
        })
    }
}
