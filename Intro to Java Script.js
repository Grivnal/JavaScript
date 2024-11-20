//alert("Hello Java Script!")
console.log("Hello JS from console")

let number = 10.35;
let email = "lena@gmail.com"
let flag = true;
console.log(number)
console.log(typeof(number))
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`)
console.log(`Flag = ${flag}, type : ${typeof(flag)}`)

number = "hello"
email = false
console.log(`Number = ${number}, type : ${typeof(number)}`)
console.log(`Email = ${email}, type : ${typeof(email)}`)

let empty//undefined
let nullObject = null;//null
console.log(`Empty = ${empty}, type : ${typeof(empty)}`)
console.log(`Null Object = ${nullObject}, type : ${typeof(nullObject)}`)

let array = [1,2,3]
console.log(`array = ${array}, type : ${typeof(array)}`)

let sum = function(a,b){console.log(`${a}+${b} = ${a+b}`)}
array = [10,57,'red','green', true, false[11,21,111]]
console.log(`array = ${array}, type : ${typeof(array)}`)
console.log(`Sum = ${sum}, type : ${typeof(sum)}`)
console.log(array[3])
console.log(array[6][1])
sum(5,7)
array[7](3,5)

const numbers = [11,5,74,8,6,3];
for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)
}
numbers[0] = 100
numbers = [1,2,3]
for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)
}

console.log("value : " + 333 + "!!!")
console.log(`Value : ${333 + 100} !!!`)
//forof + get all elements in array
for (const element of numbers) {
    console.log(element)
}
//forin - get all indexes
for (const index in numbers) {
   console.log(index)
}

console.log("Array lenght : " + numbers.lenght)
numbers[20] = 55
for (const element of numbers) {
    console.log(element)
}
console.log("Array lenght : " + numbers.lenght)
for (const index in numbers) {
    console.log(index)
}

console.log("Hello Js")
console.warn("Warning!!!")
console.error("Error!!!")
if (2>4) 
    console.log("True...")
else 
    console.log("False...")
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let message = (3>2)? "bigger":"less";

function divide(a,b)
{
    if(b==0){
        console.error("You cannot divide by zero...")
        return;    
    }
    return a/b
}

function summa(a,b)
{
    return a+b;
}

// alert("Result :" + divide(10,3))

let numA = +prompt("Enter Your number A :")
let numB = +prompt("Enter Your number B :")
// alert("Result: " + divide (numA,numB))
alert("Result: " + sum (numA,numB))
//hw
//1
function stepin(aa)
{
    return aa*aa;
}
let num1 = +prompt("Enter Your Number :")
alert("Result :" + stepin(num1))
//2
//С„СѓРЅРєС†С–СЋ РІР·СЏР»Р° С‚Сѓ С€Рѕ СЂРѕР±РёР»Рё РІ РєР»Р°СЃРЅС–Р№
let num21 = +prompt("Enter first number :")
let num22 = +prompt("Enter second number :")
alert("Result : " + sum (num21,num22))
//3
function S(a){
    return a*a;
}
let num3 = +prompt("Enter one of sides of square :")
alert("Result :" + S (num3))
//4
function Convertor(a){
    return a*0,621371;
}
let num4 = +prompt("Emter km :")
alert("Result :" + Convertor(num4)) 
//5
function removed(a,b){
    return a-b;
}
function add(a,b){
    return a-b;
}
function share(a,b){
    return a/b;
}
let num51 = +prompt("Enter first number :")
let num52 = +prompt("Enter second number :")
alert("Result Add: " + add (num51,num52))
alert("Result Remove: " + removed (num51,num52))
alert("Result  Sum: " + sum (num51,num52))
alert("Result Share: " + share (num51,num52))
//6
//СЏ РІС–РґСЂР°Р·Сѓ СЂРѕР·РІСЏР·Р°Р»Р° С– РІР¶Рµ Р·Р° РґРѕРїРѕРјРѕРіРѕСЋ РІС–РґРїРѕРІС–РґС– Р·РЅР°С…РѕРґРёР»Р° С…
function formule(a,b)
{
    return -(a/b)
}
let num61 = +prompt("Enter first number :")
let num62 = +prompt("Enter second number :")
alert("Result of formule : x = " + formule (num61,num62))
//7

//8

//9

//10
function Salling(sell)
{
    return sell/10
}
let sell = +prompt("Enter sum of salling:")
alert("10% from all salles: " + Salling(sell))
normal = `${250}\$`;
alert("salary is:" (normal) + Salling(sell))
//СЏ РїРѕРїСЂРѕР±СѓРІР°Р»Р°
