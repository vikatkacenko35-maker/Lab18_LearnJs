// console.log("Hello, JS!");
// let age = 20;
// let name = "Vika";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is Student: ", isStudent);

// let value = 10;
// console.log(value);
// value = "string";
// console.log(value);
// value = true;
// console.log(value);

// let person = {
//     namee: "Viktoria",
//     age: 30,
//     isSt: false,
//     SayHello: function (){
//         console.log("Hi");
//     },
// };

// console.log(person.namee);
// let mix = ["hgh", 433, true];

// function sum(a,g){
//     return a + g;
// }
// let muptiply = function(x,y){return x * y;}

// let now = new Data();
// let bd = new Data("2007-07-07");
// console.log(10+"5"); //105
// console.log("10"-5); //5
// //const запрещает переназначение, но НЕ запрещает изменение содержимого!
// const PI = 3.14;
// const numbers = [1,2,3];
// numbers[0] = 10; // yes
// numbers = [5,6,7];//errror

// //object
// const pers = {imya: "bika", age: 18};
// pers.age = 50;
// pers.city = "Volgograd"; // yes
// pers = {age:67};//error
// console.log(typeof 45);
// //Это историческая ошибка JavaScript, которую нельзя исправить (сломается
// //много кода). null — это примитивный тип, но typeof ошибочно возвращает "object".
// //Как правильно проверить на null:
// let numx = null;
// console.log(numx === null);
// let newPrice = 18;
// console.log(newPrice);
// console.log(typeof newPrice);
// newPrice = "gfg";
// console.log(newPrice);
// console.log(typeof newPrice);
// let int2 = parseInt("42.5");//42
// let float = parseFloat("3.14");//3.14
// let bool4 = Boolean(""); //false)
// console.log("5" *"2");//10!!
// console.log(true + 1);//2
// console.log(undefined + 1);//NaN
// //Правило 1: Оператор + с строкой → конкатенация
// //Правило 2: Операторы -,*, / → преобразование к числ
// //console.log("5" + 3 + 2); // "532" (строка + число + число)

// //== — нестрогое сравнение (JS может привести типы)
// // === — строгое сравнение (без преобразования типов)
// console.log(5 =="5")//true
// console.log(5 ==="5")//false
// //Объекты сравниваются по ссылке, а не по содержимому:
// let obj1 = {age:3};
// let obj2 = {age:3};
// console.log(obj1 == obj2);//false
// console.log(obj1 === obj2);//false
// //Почему? Это разные объекты в памяти!
// let obj3= obj1;
// console.log(obj1 === obj3);//true
// //Вывод: === для объектов проверяет, один ли это объект в памяти.
let x = 2;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

let yourAge = 18;
if (yourAge>= 18){
    console.log("Доступ разрешен");
}else{
    console.log("Доступ запрешен");
}
let temperature;
if(temperature < 0){
    console.log("Холодно")
}
else if(0<= temperature<= 20) {
    console.log("Прохладно")
}
else{
    console.log("Тепло");
}
// В JavaScript используются те же логические операторы, что и в C#:
// ◦ && — И
// ◦ ! — НЕ
let isLoggedIn;
let isAdmin;
if (isAdmin && isLoggedIn == true){
    console.log("Полный доступ")
}
else if(isAdmin && isLoggedIn == false){
    console.log("Доступ запрещён")
}
else{
    console.log("Ограниченный доступ");
}
let a = 10;
b = "10";
console.log(a == b);
console.log(a === b);
let monthNumber;
switch(monthNumber ){
    case 1: console.log("Январь");break;
    case 2: console.log("Февраль");break;
    case 3: console.log("Март");break;
    case 4: console.log("Апрель");break;
    case 5: console.log("Май");break;
    case 6: console.log("Июнь");break;
    case 7: console.log("Июль");break;
    case 8: console.log("август");break;
    case 9: console.log("Сентябрь");break;
    case 10:; console.log("октябрь");break;
    case 11: console.log("ноябрь");break;
    case 12: console.log("Декабрь");break;
    default: console.log("unrnown");
}