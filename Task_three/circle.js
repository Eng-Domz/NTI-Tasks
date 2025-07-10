import { shape } from "./shape.js";
export class circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * this.radius * this.radius;
    }

    calcPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle with radius ${this.radius}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
    }
}