
// class Car{
//     // model;
//     // year;
//     // color;
//     // _speed;
//     constructor(model,year,color)
//     {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this._speed = 0;
//     }
//     set speed(value)
//     {
//         if (value >= 0) 
//             this._speed = value;
//         else 
//             this._speed = 0;
//     }
//     get miles()
//     {
//         return this._speed * 0.67;
//     }
//     setSpeed(value)
//     {
//         if (value >= 0) 
//             this._speed = value;
//         else 
//             this._speed = 0;
//     }
//     paint(newcolor)
//     {

//     }
//     print()
//     {
//         console.log(`Car:
//             ${this.model}
//             ${this.year}
//             ${this.color}
//             ${this._speed} km/h`)
//     }
// }

// const car = new Car("Dodge",2022,"pink");
// //car.setSpeed(150);
// car.speed = 230;
// console.log(`Miles = ${car.miles.toFixed(1)}`);
// car.paint("red");
// // car.model = "Dodge";
// // car.year = 2022;
// // car.color = "pink";
// // car.speed = 320;
// car.print();

// class policecar extends Car
// {
//     constructor(model,year, color, volume){
//         super(model,year,color);
//         this.volume = volume;
//     }
//     beep()
//     {
//         console.log("Stop!!!! Beep...beep...beeeep... Volume :"+
//             this.volume);
//     }
//     print(){
//        super.print();
//        console.log(`Volume : ${this.volume}`);
//     }
// }
// const policeCar = new PoliceCar("Nissan", 2018, "White", 1000);
// policeCar.speed = 300;
// policeCar.print();
// policeCar.beep();
//1
class Auto
{
    constructor(producer,model, year,speed){
        this.producer = producer;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    print()
    {
        console.log(`Auto:
            ${this.producer}
            ${this.model}
            ${this.year}
            ${this.color}
            ${this._speed} km/h`)
    }
    TimeCounting(distance, speed){
        let totalHours = distance / speed;
        let breaks = Math.floor(totalHours / 4);
        let totalTime = totalHours + breaks;
        return totalTime;
    }
}
const car = new Car("McLaren",2023,"pink");
console.log(`Time that you amy need is : ` + TimeCounting(distance,speed));
const distance = 500;
const speed = 230;
car.print();
//2
class Share
{
    constructor(up,down){
        this.up = 1;
        this.down = 2;
    }
    Shr(){
        console.log(`${up}/${down}`)
    }
}
class Share1
{
    constructor(up1,down1){
        this.up1 = 2;
        this.down1 = 2;
    }
    Shr1(){
        console.log(`${up1}/${down1}`)
    }  
}
function Add(up, down, up1, down1){
    return (up+up1)/(down+down1);
}
function Remove(Share, Share1){
    return (up-up1)/(down = down1);
}
function multipl(Share, Share1){
    return (up*up1)/(down = down1);
}
function SHARE(Share, Share1){
    return (up*down1)/(up1*down);
}
function Curtailment(up, down, up1, down1){
    return (up/2)/(down/2) + "-" + (up1/2)/(down1/2);
}
alert(`Result of Add:`+ Add(up,down,up1,down1))
alert(`Result of remove:`+ Remove(up,down,up1,down1))
alert(`Result of Multiplication:`+ multipl(up,down,up1,down1))
alert(`Result of Share:`+ SHARE(up,down,up1,down1))
alert(`Result of Curtailment:`+ Curtailment(up,down,up1,down1))
//3
// class TimeCounting
// {
//     constructor(hour,min,sec){
//         this
//     }
// }