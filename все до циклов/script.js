// alert ("Я JavaScript");


  /*           //   Задание переменной

let message = 'Hello!'; // определяем переменную и присваиваем ей значение
message = 'World'; // присвоили переменной message новое значение
alert(message); // Hello!


              //  Присвоение нового значения

let message = 'Hello!'; // определяем переменную и присваиваем ей значение
message = 'World'; // присвоили переменной message новое значение
alert(message); // Hello! 


let admin;
let adminName; // можно объявить две переменные через запятую
adminName = "Джон";
admin = adminName;
alert( admin ); // "Джон" 


// Копирование значения из одной переменной в другую

let hello = 'Hello world!';
let message;
// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;
// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world! 

            //Константы

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00  



        //Типы данных

alert (1/0);  // Infinity
alert( "не число" / 2 ); // NAN 


alert( `результат: ${1 + 2}` ); //  выведет - результат: 3 работает
alert( "результат: ${1 + 2}" );  // выведет - результат: ${1 + 2} 

let admin = 4 > 7;
alert (admin);  

let age;
alert(age); // выведет "undefined" 

let admin = "Ilya";
 alert( `hello ${1}` );   // вывод hello 1
alert( `hello ${"name"}` );  // вывод hello name
alert( `hello ${admin}` );  // вывод hello ilya 

result = prompt(title, [default]);

 пара


let age = prompt ("How old are you?")
if (age>==18) { console.log ("Привет");
} else if (age >=0 && age < 18) {console.log("ПОКА")};

let age = prompt ("How old are you?");
let age2 = prompt ("How old are you?");
if (age > age2) {console.log ("Привет")}

 prompt and confirm and alert

let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет! 

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK   


let currentUserName = prompt ("Введите ваше имя","");
alert (`Привет ${currentUserName}`);


let adminName = prompt ("Введите ваше имя?");
alert (`Привет ${adminName}!`);  


let str = "123";
alert(typeof str); // string
let num = Number(str); // становится числом 123
alert(typeof num); // number   


let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); 


let currentName = prompt ('Какое "официальное" название JavaScript?', "");
if (currentName === "ECMAScript") {
  alert ('Правильно!');
} else { 
  alert ("Не знаете? “ECMAScript”!");
} 

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';  

  alert( alert(1) || 2 || alert(3) );
  alert( alert(1) && alert(2) );  

let age = prompt ('Введите сколько вам лет',"");
if (age >= 14 && age <=90 ) {alert ("hello");}
else {alert ("you idiot");  
}  */

// let currentUserName = prompt ("Введите ваше имя", "");

// if ( currentUserName === "Админ" ) {

//   let pass = prompt ("Введите пароль", "");

//   if ( pass === "Я главный" ) { 
//     alert ("Здраствуйте");
//   } else if ( /* pass === ""  */ || pass === null) {
//     alert ("Отменено");
// } else { 
//   alert ("Неверный пароль");
// }

// } else if (currentUserName === null || /* pass === ""  */ ){
//   alert ("Отменено");
// } else { alert ( "Я вас не знаю");
// }  


// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// _______________________________________________________________________________________________________________________________________________




// Задание 1.
// let randomNumber = prompt("Введите любое число и получите результат возведения его во 2 степень!",'');
// alert (randomNumber**2);

// Задание 2.
// let randomNumberOne = +prompt("Введите любое число", "");
// let randomNumberTwo = +prompt("Введите любое число", "");
// alert ((randomNumberOne + randomNumberTwo)/2);

// Задание 3
// let randomNumber= +prompt("Введите длинну стороны квардрата и получите площадь!", "");
// alert (randomNumber**2);

// Задание 4
// const kmINmi = 0.621371;
// let randomNumber = prompt('Введите расстояние в километрах и получите в милях!', "");
// alert (randomNumber*kmINmi);

// Задание 5
// let randomNumberOne = prompt("Введите любое число", "");
// let randomNumberTwo = prompt("Введите любое число", "");
// let operator = prompt ('Введите действие +, -, / , *');
// if (operator === "+") { 
//   alert(+randomNumberOne + +randomNumberTwo);
// } else if (operator === '-') {
//   alert ( randomNumberOne - randomNumberTwo);
// } else if (operator === '/') {
//   alert ( randomNumberOne/randomNumberTwo);
// } else if (operator === '*') {
//   alert (randomNumberOne*randomNumberTwo);
// } else if (randomNumberOne === null || randomNumberTwo === null || operator === null || randomNumberOne === '' || randomNumberTwo === '' || operator === "") {
//   alert ('Вы ничего не ввели или отменили!');
// } else if (isNaN (randomNumberOne) || isNaN (randomNumberTwo)) {
//   alert(`Выведенные данные ${randomNumberOne} или ${randomNumberTwo} некорректны`);
// } else {
//   alert ('Введите правильно знак действия!');
// }

//Задание 6 Без проверки на null и NaN
// let a = +prompt ("Введите значение переменной 'a'");
// let b = +prompt ("Введите значение переменной 'b'");
// let x = -b/a;
// alert (`При а*x+b=0; x=${x}`);

//Задание 7
// let currentHour = prompt ('Введите сколько часов сейчас');
// let currentMinutes = prompt (' Введите сколько минут сейчас');
// const hourInDay = 23;
// const minutInDay = 60;
// if (currentHour === null || currentHour === '' || currentMinutes === null || currentMinutes === '') {
//   alert ('Вы отменили или ничего не ввели!');
// } else if ( isNaN (currentHour) || isNaN (currentMinutes) ) {
//   alert (`Значение ${currentHour} или ${currentMinutes} некорректны`);
// } else {
//   alert (`До начала следующего дня ${hourInDay-currentHour} hour(s) ${minutInDay-currentMinutes} minutes`);
// }

// Задание 8 
// let currentNumber = prompt ('Введите любое трехзначное число');
// if (isNaN (currentNumber)){
//   alert (`Введенное число ${currentNumber} некорректно`);
// } else if (currentNumber === null || currentNumber === ''){
//   alert (`Вы ничего не ввели или отменили!`);
// } else if (currentNumber > 99 & currentNumber < 1000) {
//   alert (`Втрое число вашего трехзначного числа равно ${Math.floor((currentNumber/10)%10)}?`);
// } else {
//   alert (`Ввыведенное вами число ${currentNumber} не удовлетворяет условию`);
// }

// Задание 9
// let currentNumber = prompt ('Введите любое пятизначное число');
// let lastNumber = currentNumber%10;
// let result = Math.floor(lastNumber*10000+(currentNumber/10));
//   if (isNaN (currentNumber)){
//   alert (`Введенное число ${currentNumber} некорректно`);
// } else if (currentNumber === null || currentNumber === ''){
//   alert (`Вы ничего не ввели или отменили!`);
// } else if (currentNumber > 9999 & currentNumber < 10**5 ) {
//   alert (result);
// } else {
//   alert (`Ввыведенное вами число ${currentNumber} не удовлетворяет условию`);
//   }

//Задание 10
// let currentNumber = prompt ('Введите общую сумму продаж за месяц');
// if (isNaN (currentNumber)){
//   alert (`Введенное число ${currentNumber} некорректно`);
// } else if (currentNumber === null || currentNumber === ''){
//   alert (`Вы ничего не ввели или отменили!`);
// } else if (currentNumber) {
//   alert (`Зарплата работника составляет ${250+(currentNumber*0.1)}$`);
// } else {
//   alert (`Ввыведенное вами число ${currentNumber} не удовлетворяет условию`);
// }

// _________________________________________________________________________________________________________________________________________________
// задачи со 2 урока 

//Задача 2
// let currentPassword = prompt ('Введите пароль');
// if ( currentPassword === "Step" || currentPassword === 'Web' || currentPassword === 'JavaScript') {
//   alert (`Подтверждено`);
// } else { 
// alert (`Отменено`)
// }


// Задача 3
// let x = prompt ('Введите число х')
// if ( x>=0 & x<=100) {
//   alert (`Число входит в диапазон 0-100 включительно`)
// } else if (isNaN (x)){
//   alert (`Введенное число ${x} некорректно`);
// } else if (x === null || x === ''){
//   alert (`Вы ничего не ввели или отменили!`);
// }  else {
//   alert (`Число ${x} не входит в дипазон 0-100`)
// }

// Задача 4
// let randomNumberOne = prompt (`Введите число х`);
// let randomNumberTwo = prompt (`Введите число y`);
// if  (randomNumberOne === null || randomNumberTwo === null || randomNumberOne === '' || randomNumberTwo === '' ) {
//   alert ('Вы ничего не ввели или отменили!');
// } else if (isNaN (randomNumberOne) || isNaN (randomNumberTwo)) {
//   alert(`Введенные данные ${randomNumberOne} или ${randomNumberTwo} некорректны`);
// } else if (+randomNumberOne > +randomNumberTwo) {
//   alert (`x>y на ${Math.abs(randomNumberOne-randomNumberTwo)}`);
// }
//   else if (+randomNumberOne < +randomNumberTwo) {
//   alert (`x<y на ${Math.abs(randomNumberOne-randomNumberTwo)}`);
// } else {
//   alert (`x=y`);
// }

// Задача 5
// let randomNumberOne = prompt (`Введите число х`);
// if  (randomNumberOne === null || randomNumberOne === '') {
//   console.log ('Вы ничего не ввели или отменили!');
// } else if (isNaN (randomNumberOne)) {
//   console.log (`Введенные данные ${randomNumberOne} некорректны`);
// } else if (randomNumberOne >= 0 && randomNumberOne <= 100) {
//   console.log ('Ваше число входит в диапазон от 0 до 100');
// } else if (randomNumberOne >100 && randomNumberOne<=300) {
//   console.log ('Ваше число входит в диапазон от 101 до 300');
// } else if (randomNumberOne >300 && randomNumberOne<=400) {
//   console.log ('Ваше число входит в диапазон от 301 до 400');
// } else {
//   console.log ('Ваше число не входит ни в один диапазон');
// }

// Задача 6
// let randomNumberOne = prompt (`Введите число х`);
// if  (randomNumberOne === null || randomNumberOne === '') {
//   console.log ('Вы ничего не ввели или отменили!');
// } else if (isNaN (randomNumberOne)) {
//   console.log (`Введенные данные ${randomNumberOne} некорректны и не являются числом`);
// } else if (randomNumberOne === "0") {
//   console.log ('Ноль');
// } else if (randomNumberOne === "1") {
//   console.log ('Единица');
// } else if (randomNumberOne === "2") {
//   console.log ('Двойка');
// } else {
//   console.log ('Смысл понятен');
// }

// Задача 6 Пробуем switch Без проверок
// let randomNumberOne = prompt (`Введите число х`);
// switch (randomNumberOne) {
//   case "0":
//     console.log ( "Ноль");
//     break;
//   case "1":
//     console.log  ("Единица");
//     break;
//   case "2":
//     console.log ( "Два");
//     break;
//   case "3":
//     console.log  ("Три");
//     break;
//   case "4":
//     console.log  ("Четыре");
//     break;
//   default:
//     console.log ("Смысл понятен");
// }


// _________________________________________________________________________________________________________________________________________________

// Задачи с практики №2

//Задача 1
// let randomNumberOne = prompt (`Введите число х`);
// if  (randomNumberOne === null || randomNumberOne === '') {
//   console.log ('Вы ничего не ввели или отменили!');
// } else if (isNaN (randomNumberOne)) {
//   console.log (`Введенные данные ${randomNumberOne} некорректны и не являются числом`);
// } else if (+randomNumberOne > 0) {
//   console.log (`число ${randomNumberOne} Положительное`);
// } else if (+randomNumberOne < 0) {
//   console.log (`число ${randomNumberOne} Отрицательное`);
// } else if (+randomNumberOne === 0) {
//   console.log (`число ${randomNumberOne} равно 0`);
// }

//Задача 2
// let randomNumberOne = prompt ("Введите ваш возраст");
// if (randomNumberOne === null || randomNumberOne === "") {
//   console.log (`Вы ничего не ввели или отменили!`);
// } else if ( isNaN (randomNumberOne)) {
//   console.log (`Введенное значение ${randomNumberOne} является некорректным значением`)
// } else if (+randomNumberOne > 0 && +randomNumberOne <=120) {
//   console.log (`Okay!`);
// } else { 
//   console.log  (`С вероятностью в 99.9% вы врете!`)}

//Задача 3
// let randomNumberOne = prompt ('Введите любое число');
// if (randomNumberOne === null || randomNumberOne === "") {
//   console.log (`Вы ничего не ввели или отменили!`);
// } else if ( isNaN (randomNumberOne)) {
//   console.log (`Введенное число некорректно!`);
// } else if (randomNumberOne) {
//   console.log (`Вы ввели ${Math.abs(randomNumberOne)} по модулю`);
// } else { 
//   console.log (`По идее этого текста не должно быть!`);
// }


// Задача 4 
// let currentHour = prompt (`Введите сколько сейчас часов`);
// let currentMinutes = prompt (`Введите сколько сейчас минут`);
// let currentSecond = prompt (`Введите сколько сейчас секунд`);
// if (currentHour === null || currentMinutes === null || currentSecond === null || currentHour === '' || currentMinutes === "" || currentSecond === "") {
//   alert (`Вы отменили или ничего не ввели!`);
// } else if ( isNaN (currentHour) || isNaN (currentMinutes) || isNaN (currentSecond)) {
//   alert (`Введенные данные ${currentHour} или ${currentMinutes} или ${currentSecond} введены не корректно`);
// } else if (currentHour >23 || currentHour <0 || currentMinutes >59 || currentMinutes <0 || currentSecond > 60 || currentSecond <0) {
//   alert (`Введенные данные не корректны!`);
// } else {
//   alert (`Ваше время ${currentHour}:${currentMinutes}:${currentSecond}?`);
// }

// Задача 5
// let x = prompt('Введите координаты точки по оси x');
// let y = prompt('Введите координаты точки по оси У');
// if (x === null || y === ""|| x === "" || y === null) {
//   console.log (`Вы ничего не ввели или отменили!`);
// } else if ( isNaN (x) || isNaN (y)) {
//   console.log (`Вы ввели некорректное значение!`);
// } else if ( x === 0 || y === 0 ) {
//   console.log (`Ваша точка не попадает ни на одну из четвертей`);
// } else if ( x>0 && y > 0) {
//   console.log (`Ваша точка находится в первой четверти`);
// } else if (x<0 && y >0) {
//   console.log (`Ваша точка находится во второй четверти`);
// } else if (x<0 && y<0) {
//   console.log (`Ваша точка находится в третьей четверти`);
// } else if (x>0 && y<0) {
//   console.log (`Ваша точка находится в четвертой четверти`);
// }

// Пару задач с ?

// Задача 1 без проверок
// let randomNumberOne = prompt ('Введите число х'), randomNumberTwo = prompt ('Введте число у');
// (+randomNumberOne>+randomNumberTwo)? console.log (`x>y`) : console.log (`x<y`);


// Задача 2 без проверок
// let randomNumber = +prompt ('Введите одно число');
// (randomNumber%5===0)? console.log (`Число ${randomNumber} кратно 5`) : console.log (`Число ${randomNumber} не кратно 5`);


// Задача 3 без проверок
// let currentPlanet = prompt (`Введите название вашей планеты`);
// (currentPlanet === "Земля" || currentPlanet === "земля" || currentPlanet === "Земля" || currentPlanet === "Earth") ? console.log (`Привет, землянин!`) : console.log (`Привет, инопланетянин!`);



// Задание 1
// let currentMounth= prompt (`Введите номер текущего месяца`);
// switch (currentMounth) {
//   case '1':
//     alert (`Январь`);
//   break;
//   case '2':
//     alert (`Февраль`);
//   break;
//   case '3':
//     alert (`Март`);
//   break;
//   case '4': 
//     alert (`Апрель`);
//   break;
//   case '5':
//     alert ('Май');
//   break;
//   case '6':
//     alert ('Июнь');
//   break;
//   case '7': 
//     alert ('Июль');
//   break;
//   case '8':
//     alert ('Август');
//   break;
//   case '9':
//     alert ('Сентябрь');
//   break;
//   case '10':
//     alert ('Октябрь');
//   break;
//   case '11':
//     alert ('Ноябрь');
//   break;
//   case '12':
//     alert ('Декабрь');
//   break;
//   default:
//     alert ('Введите кооректнвые данные!');
// } 

// Задание 2
// let randomNumberOne = +prompt(`Введите число`);
// let operator = prompt (`Введите действия (+, - , /, *)`);
// let randomNumberTwo = +prompt(`Введите второе число`);
// switch (operator) {
//   case ('+'):
//     alert(`${randomNumberOne+randomNumberTwo}`);
//   break;
//   case ('-'):
//     alert (`${randomNumberOne-randomNumberTwo}`);
//   break;
//   case (`/`):
//     alert (`${randomNumberOne/randomNumberTwo}`);
//   break;
//   case (`*`):
//     alert (`${randomNumberOne*randomNumberTwo}`);
//   break;
//   default: alert (`Введите корректное значение`);
// }

// _____________________________________________________________________________________________________________________________________________
// РЕШЕНИЕ ПРЕПОДОМ ЗАДАЧ НА ПАРЕ

// 1. ПОЛЬЗОВАТЕЛЬ ВВОДИТ ВОЗРАСТ ФЕДОТА и МИТРОФАНА
// выяснить кто старше фдеот или митрофан и НА СКОЛЬКО старше
// (возрасты могут быть равны)
// вывести результат в консоль

// 2. Пользователь вводит три числа, выяснить наибольшее из них

// 3. пользователь вводит 4 числа
// выяснить СКОКЛЬКО из этих чисел были четными


// 1.
// let mitrofanAge = prompt('mitrofan');
// let fedotAge = prompt('fedot');

// if ( isNaN(mitrofanAge) || isNaN(fedotAge) ) {
//     console.log('incrorrect data');
// } else if ( mitrofanAge === null || fedotAge === null ) {
//     console.log('you cancelled');
// } else {
//     mitrofanAge = +mitrofanAge;
//     fedotAge = +fedotAge;

//     const ageDifference = Math.abs(mitrofanAge - fedotAge);

//     if ( mitrofanAge > fedotAge ) {
//         console.log(`Mitrofan is older than Fedot by ${ageDifference} years`);
//     } else if (fedotAge > mitrofanAge) {
//         console.log(`Fedot is older than Mitrofan by ${ageDifference} years`);
//     } else {
//         console.log('Their ages are equal');
//     }
// }

// 2.

// let a = +prompt('one');
// let b = +prompt('two');
// let c = +prompt('three');

// if (a >= c && a >= b) {
//     console.log(a);
// } else if (b > a && b > c) {

// } else {

// }

// 3. 
// let a = +prompt('one'); // 1
// let b = +prompt('two'); // 2
// let c = +prompt('three'); // 1
// let d = +prompt('four'); // 2

// let evenCounter = 0;

// if (a % 2 === 0) {
//     evenCounter++;
// }

// if (b % 2 === 0) {
//     evenCounter++;
// }

// if (c % 2 === 0) {
//     evenCounter++;
// }

// if (d % 2 === 0) {
//     evenCounter++;
// }

// console.log(evenCounter);



