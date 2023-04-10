import {Shape} from "./shape";
import {Resizeable} from "./Resizeable";

export class Circle  extends Shape implements Resizeable{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    getArea():number{
        return Math.PI* Math.pow(this.radius, 2)
    }
    getPerimeter():number{
        return Math.PI* this.radius * 2
    }

    resize(percent:number) {
        this.radius += this.radius *(percent/100)
    }
}