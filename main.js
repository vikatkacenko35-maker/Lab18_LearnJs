console.log("Hello, JS!");
let age = 20;
let name = "Vika";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is Student: ", isStudent);

let value = 10;
console.log(value);
value = "string";
console.log(value);
value = true;
console.log(value);

let person = {
    namee: "Viktoria",
    age: 30,
    isSt: false,
    SayHello: function (){
        console.log("Hi");
    },
};

console.log(person.namee);
let mix = ["hgh", 433, true];

function sum(a,g){
    return a + g;
}
let muptiply = function(x,y){return x * y;}

let now = new Data();
let bd = new Data("2007-07-07");
console.log(10+"5"); //105
console.log("10"-5); //5
//const запрещает переназначение, но НЕ запрещает изменение содержимого!
const PI = 3.14;
const numbers = [1,2,3];
numbers[0] = 10; // yes
numbers = [5,6,7];//errror

//object
const pers = {imya: "bika", age: 18};
pers.age = 50;
pers.city = "Volgograd"; // yes
pers = {age:67};//error