import {Shape} from "./shape";
import {Resizeable} from "./Resizeable";

export class Rectangle extends Shape implements Resizeable{
    width : number;
    height:number

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getArea():number{
        return this.height*this.width
    }
    getPerimeter(){
        return (this.height+this.width)*2
    }

    resize(percent:number) {
        this.width += this.width * (percent/100)
        this.height+=this.height * (percent/100)
    }
}