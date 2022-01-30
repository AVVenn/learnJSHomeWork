// 1. Создайте функцию stringFrom(…), возвращающую
// строку, состоящую из значений всех переданных
// аргументов. Например, вызов stringFrom('I have',
// 5, 'apples') вернет строку «I have 5 apples»; вызов
// stringFrom('Х value is', true) вернет строку «Х value
// is true».


// function stringFrom (){
//     let arr = [];
//     for (let i = 0; i < arguments.length; i++){
//         arr.push(arguments[i]);
//     }
//     return alert(arr.join(" "));
// }

// stringFrom ('I have', 5, 'apples');
// stringFrom('Пишу', 'код', 'на', 'JS', 'как', 'бог');

// _______________________________________________________________________________________________________
// 2. Создайте функцию, возвращающую значение мини-
// мального из всех переданных аргументов.


// function getMinNumber(){
//     let minNumber = arguments[0];
//     for (let i = 0 ; i < arguments.length; i++ ) {
//         if ( minNumber < arguments[i]) {
//             minNumber = arguments[i];
//         }
//     }
//     return alert(minNumber);
// }

// getMinNumber(+prompt(`Введите число`),+prompt(`Введите число`),+prompt(`Введите число`));
// _______________________________________________________________________________________________________

// 3. Создайте функцию numbers(), которая будет подсчи-
// тывать количество переданных числовых аргументов.
// Например, numbers(1, 2, “a”) вернет значение 2, numbers(
// true, 2, false) — 1, numbers() — 0.

// function getAmountNumbers (){
//     let counter = 0;
//     for(let i = 0 ; i<arguments.length; i++){
//         if (typeof arguments[i] === 'number') {
//             counter++;
//         }
//     }
//     return console.log(counter);
// }

// getAmountNumbers(1, 3, 7, `sdfdfsd`, false, null, undefined,);
// _______________________________________________________________________________________________________

//4. Создайте функцию mean(), которая рассчитает сред-
// нее значение от всех числовых аргументов, игнорируя
// аргументы нечислового типа. Например, mean (1, 2,
// “a”) вернет значение 1.5 (среднее 1 и 2), mean(true, 2,
// false) — 2, mean() — 0.

// function mean () {
//     let counter = 0;
//     let sum = 0;
//     for ( let i = 0; i < arguments.length; i++){
//         if (typeof arguments[i] === 'number'){
//             counter++;
//             sum += arguments[i];
//         }
//     }
//     return console.log(sum/counter);
// }
// mean ('fgffgh', 3, 5, null, undefined, 7);

// вопрос , что если в функции не указать, что она принимает аргументы и при вызове не передать аргументы, как сделать чтобы вернулся 0?
// _______________________________________________________________________________________________________
//5 Напишите рекурсивную функцию, которая прове-
// ряет, является ли переданный аргумент степенью
// двойки (например, числа 8=23, 32=25 — это степени
// двойки, а числа 7 или 12 — нет). Подсказка: если чис-
// ло «х» делится на два, то нужно проверить, является
// ли число «х/2» степенью двойки.


// function controlRecursion (n){
//     let counter = 0;
//     if ( n/2 === 1 ){
//         console.log (counter);
//         return `Введенное число является степенью 2`;
//     }
//     if (n%2 === 0) {
//         counter++;
//         return controlRecursion(n/2);
//     } else {
//         return `Введенное число не является степенью 2`;
//     }
// }

// console.log(controlRecursion(16));

// почему консоль выводит counter всегда как 0?
// _______________________________________________________________________________________________________
// Практика рекурсии

//1. Написать функцию, которая вычисляет факториал задан-
// ного числа.
// let s = 1;
// function getResultFactorial (n) {
//     if (n === 1) {
//         return console.log(s);
//     }
//     s *=n;
//     getResultFactorial (n-1);
// }

// getResultFactorial(5);

// _______________________________________________________________________________________________________
// 2. Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.

// function getNumbers(start, final)  {
//     if (start === final) {
//         return final;
//     }
//     console.log(start);
//     start++; 
//     getNumbers(start++, final);
// }
// getNumbers(5, 50);  // 5  не отображается разбрабраться


// function getNumbers(start, final)  {
//     if (start === final) {
//         return start;
//     }
//     final--; 
//     console.log(final);
//     getNumbers(start, final--);
// }

// getNumbers(5, 50);

// _______________________________________________________________________________________________________
// 3. Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321. 
//     let result = 0;
// function reverseNumber (n) {
//     if (n < 10) {
//         return result*10+n;
//     }
//     result = result * 10 + n % 10;
//     return reverseNumber (Math.floor( n / 10)) ;
// }

// console.log(reverseNumber (1234567));

// _______________________________________________________________________________________________________
// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.
// let result = 0;
// function sum (n) {
//     if ( n < 10 ) {
//         return console.log(result+n);
//     }
//     result += n%10;
//     return (sum(Math.floor(n/10)));
// }

// sum(1234);

// _______________________________________________________________________________________________________

// 5.Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).
//     let result = '()';
// function amountBrackets (n){
//     if (n === 1){
//         return console.log(result);
//     }
//     result = "("+result+")";
//     n--;
//     return amountBrackets(n--);
// }

// amountBrackets (7);

// _______________________________________________________________________________________________________
// function run (where, speed) {
//     console.log(this);
//     return `${this.name} run to ${where} with ${speed} kmp/h`;
// };


// const person = {
//     name: 'John',
//     age: 23,
//     size: {
//         width: 200,
//         height: 100
//     },
//     run
// };

// console.log (setTimeout (person.run 2000));


