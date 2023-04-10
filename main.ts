import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Square} from "./square";

let circle = new Circle('tron',10);
let rectangle = new Rectangle('hinh chu nhat',10,5);
let square = new Square('vuong',10)
let arr=[circle,rectangle,square]
let randomPercent = Math.round(Math.random()*100)
arr.forEach(item=>{
    console.log('Dien tich truoc khi thay doi la : ' + item.getArea())
    item.resize(randomPercent)
    console.log('Dien tich sau khi thay doi la : ' + item.getArea())
    console.log('--------------------------------')

})

