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
console.log(typeof 45);
//Это историческая ошибка JavaScript, которую нельзя исправить (сломается
//много кода). null — это примитивный тип, но typeof ошибочно возвращает "object".
//Как правильно проверить на null:
let numx = null;
console.log(numx === null);
let newPrice = 18;
console.log(newPrice);
console.log(typeof newPrice);
newPrice = "gfg";
console.log(newPrice);
console.log(typeof newPrice);
let int2 = parseInt("42.5");//42
let float = parseFloat("3.14");//3.14
let bool4 = Boolean(""); //false)
console.log("5" *"2");//10!!
console.log(true + 1);//2
console.log(undefined + 1);//NaN
//Правило 1: Оператор + с строкой → конкатенация
//Правило 2: Операторы -,*, / → преобразование к числ
//console.log("5" + 3 + 2); // "532" (строка + число + число)
