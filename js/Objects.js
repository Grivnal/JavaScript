// console.log(obj);
// var obj = new Object();

// var obj = {}

// obj.name = "Olena";
// obj.name = "Valeria";
// obj.number = 1010;
// obj.adress = "Soborna 16";
// console.log(`Name : ${obj.name}. Adress : ${obj.adress}`);
// delete obj.adress;
// console.log(`Name : ${obj.name}. Adress : ${obj.adress}`);

let product = {
    name : "Motorola G8",
    price:3500,
    memory:256,
    isLocked:true,
    aolicatios:["Facebook","PlayMarket","Viber"],
    owner : {
        name:"Vitia",
        surname:"Ivanchuk"
    }
}
console.log(`Model ${product.name}. Owner:${product.owner.name} ${product.owner.surname}`)
//1

//2
let Car = {
    model : "Tesla",
    price : 38990,
    year:2021,
    speed : 262
}
let distance = 500
function TimeCounting(distance, speed){
    let totalHours = distance / speed;
    let breaks = Math.floor(totalHours / 4);
    let totalTime = totalHours + breaks;
    return totalTime;
}
console.log(`Model : ${Car.model}. Price : ${Car.price}. Year : ${Car.year}. Speed : ${Car.speed}`);
alert(`Time that you amy need is : ` + TimeCounting(distance,speed));