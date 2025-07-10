import { rectangle } from "./rectangle.js";

export class square extends rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
    
    toString() {
        return `Square with side ${this.side}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
    }
}