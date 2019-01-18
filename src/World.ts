export class World {
    public positiveXEdge: number
    public negativeXEdge: number
    public positiveYEdge: number
    public negativeYEdge: number

    constructor(edges) {
        this.positiveXEdge = Number(edges.split(':')[0])
        this.negativeXEdge = Number(edges.split(':')[1])
        this.positiveYEdge = Number(edges.split(':')[2])
        this.negativeYEdge = Number(edges.split(':')[3])
    }
}
