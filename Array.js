//1
let array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array);
//2
console.log(`Array lenght: ${array.length}`);
for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}
//3
const filtered = array.filter((el) => el % 7 == 0);
console.log("Filtered array:", filtered);
//4
array.sort((a, b) => a < b);
console.log("Sorted with custom func:", array);
//5
//В головному масиві заповнити 2-гу половину елементів нулями.
//6
array.pop([0][1][2]); 
console.log("Array:", array);
//7
console.log("Found:", array.find((elem) => elem = elem));
//8
//Створити новий масив, в який записати всі елементи масиву крім крайніх.