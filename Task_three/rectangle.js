import { shape } from "./shape.js";


export class rectangle extends shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    calcArea() {
        return this.length * this.width;
    }

    calcPerimeter() {
        return 2 * (this.length + this.width);
    }

    toString(){
        return `Rectangle with Length: ${this.length}, Width: ${this.width}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
    }

}