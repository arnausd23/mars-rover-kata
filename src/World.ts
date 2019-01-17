import { Point } from './Point'
import { Rover } from './Rover'

export class World {
    public positiveXEdge: number
    public negativeXEdge: number
    public positiveYEdge: number
    public negativeYEdge: number

    public rover: Rover
    public point: Point

    constructor(edges: string, point: string) {
        this.positiveXEdge = Number(edges.split(':')[0])
        this.negativeXEdge = Number(edges.split(':')[1])
        this.positiveYEdge = Number(edges.split(':')[2])
        this.negativeYEdge = Number(edges.split(':')[3])

        this.rover = new Rover(point, edges)
        this.point = new Point(point)
    }

    public move(direction: string) {
        // check if can move
        switch (direction) {
            case 'f': return this.point.incrementY()
            case 'b': return this.point.decrementY()
            case 'r': return this.point.incrementX()
            case 'l': return this.point.decrementX()
        }
    }

    public position() {
        return `${this.point.getX()}:${this.point.getY()}-N`
    }
}
