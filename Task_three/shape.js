export class shape{
    constructor(){
        if (this.constructor === shape) {
            throw new Error("Cannot instantiate abstract class shape");
        }
    }
    calcArea(){}
    calcPerimeter(){}
}