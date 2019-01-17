export class Point {
    private x: number;
    private y: number;

    constructor(point: string) {
        this.x = Number(point.split(':')[0]);
        this.y = Number(point.split(':')[1].split('-')[0])
    }

    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    public incrementX(steps ?: number) {
        return this.x = steps ? this.x + steps : this.x +1;
    }

    public decrementX(steps ?: number) {
        return this.x = steps ? this.x - steps : this.x - 1;
    }
    
    public incrementY(steps ?: number) {
        return this.y = steps ? this.y + steps : this.y +1;
    }
    
    public decrementY(steps ?: number) {
        return this.y = steps ? this.y - steps : this.y - 1;
    }
}
