import {Point} from './Point'

export class Rover {
    public point: Point
    
    constructor(point: string) {
        this.point = new Point(point)
    }

    position() {
        return `${this.point.getX()}:${this.point.getY()}-N`;
    }

    command(command: string) {
        const commands = command.split('');

        commands.forEach(command => {
            switch (command) {
                case 'f': return this.point.incrementY();
                case 'b': return this.point.incrementY();
            }
        });
    }
}
