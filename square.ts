import {Rectangle} from "./rectangle";
import {Resizeable} from "./Resizeable";

export class Square extends Rectangle implements Resizeable{

    constructor(name: string, width: number) {
        super(name, width, width)
    }
    resize(percent:number) {
        this.width += this.width * (percent/100)
    }
}