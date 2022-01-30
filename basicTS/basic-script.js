"use strict";
//* boolean  
// let bool : boolean = true;
// let bool1 = true;
// __________________________________________________________________________________
//* number
// let num : number = 15;
// let num1 = 23;
// __________________________________________________________________________________
//* string 
// let str : string = `Andrey`;
// let str1 = `Andrey`;
// __________________________________________________________________________________
//* bigint
// const num2: bigint = 100n;
// __________________________________________________________________________________
//* any
// let smth : any = `Hello`;
// smth = 12;  // поменяется без ошибок
// let str; // тип any стал по умолчанию 
// str = `12s`; 
// str = 12;  // можем на изи поменять 
// let num = str.length;  // Property 'length' does not exist on type 'number'.
// __________________________________________________________________________________
//? 			FUNCTION basic
// function Hello (str:string, num: number) {   // Нужно указывать тип данных аргументов
// 	console.log(`${str} and ${num}`);
// }
// Hello(23, 17); // ошибка ( первый аргумент должен был быть строкой) Argument of type 'number' is not assignable to parameter of type 'string'.
// Hello (`An`, 23);
//* Результат функции 
// function Hello (str: string, num: number): string { // 1. если указан на возврат любой тип кроме void или any, то долже быть return 
// 	return +str;
// }
// Hello(`ven`, 23);
// __________________________________________________________________________________
//* void
// function Hello (str: string, num: number) : void {   // 2. если тип void , то функция ничего не возвращает;
// 	console.log(str+num);
// }
//* В принципе мы можем и не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения
// __________________________________________________________________________________
// function Hello (str: string, num: number) : void {   // 3. Сколько аргументов определили - столько и передаем - не больше и не меньше( здесь 2)
// 	console.log(str+num); 
// }
// Hello (`asdasdas`); // ошибка (в описании функции 2 аргумента , а передается 1 в TS так низя   An argument for 'num' was not provided.)
// Hello (`dsdfdsfsd`, 23, `sdfsdfs`); // Expected 2 arguments, but got 3.
// __________________________________________________________________________________
//* Необязательные параметры
// function Hello (str: string, num?: number) : void {   // 4. Если перед : стоит ?  тогда этот параметр необязательный и все сработает;
// 	console.log(str+num);
// }
// Hello (`asdasdas`) // Все сработает
// __________________________________________________________________________________
//* Значения параметров по умолчанию
// function getName(firstName: string, lastName: string="Иванов") {
//     return firstName + " " + lastName;
// }
// let name1 = getName("Иван", "Кузнецов");
// console.log(name1); // Иван Кузнецов
// let name2 = getName("Вася");
// console.log(name2); // Вася Иванов
// function defaultLastName(): string{
//     return "Smith";
// }
// function getName(firstName: string, lastName: string=defaultLastName()) { // может быть вычисляемое значение
//     return firstName + " " + lastName;
// }
// __________________________________________________________________________________
//? 					ТИП ФУНКЦИИ
// Одно и то же имя у функции может быть при условии , что там в описании разные типы данных написаны
// (параметр1: тип, параметр2: тип,...параметрN: тип) => тип_результата;
// let hello: (str: string, num: number) => string = 57; // даст ошибку 57 число, а типом hello будет string
// function multiple (num2: number, num3: number) : number {
// 	return num2*num3;
// }
// function del (num2: number, num3: number) : number {
// 	return num2/num3;
// }
// function math (n: number, n1: number, result:  (num2: number, num3: number) => number): number { // если передаем функцию callback
// 	return result(n, n1);
// }
// console.log(math(3, 2 , multiple)); // 6
// console.log(math(3, 2 , del)); // 1.5
//* Если определенный тип функции предстоит очень часто использовать, то для него оптимальнее определить псевдоним и обращаться к типу по этому псевдониму
// type operation = (x: number, y: number) => number;  //* Если определенный тип функции часто используется, то оптимальнее определить псевдоним и обращаться 																к типу по этому псевдониму
// function math1 (n: number, n1: number, op: operation ): number { // сравни с math 
// 	return op(n,n1);
// }
// console.log(math1(3,2, multiple));
// __________________________________________________________________________________
//* Перегрузка функций
// function add(x: string, y: string): string;
// function add(x: number, y: number): number;
// function add(x: any, y: any): any { 
// 	return x + y;
// }
// let result1 = add( 5 , 4 );// 9
// let result2 = add(" 5", " 4");// 54
// __________________________________________________________________________________
//* Стрелочные функции
// let sum = (x, y) => x + y;   - через компилятор пропустит ,но будет ругаться , что у x и y нет указания типа данных
// console.log(sum(1, 4));
//* Все как в js
// __________________________________________________________________________________
//? 					Объединения union
//с помощью объединений можно определить переменную, которая может хранить значение двух или более типов:
// let smth: string | number = 34;
// smth = `andry`; // нормально
// smth = true // ошибка
// let fn = (num: string | boolean | number) => num;
// console.log(fn(`dfsfsd`));
// console.log(fn(true));
// console.log(fn(75));
// console.log(fn(undefined));   Argument of type 'undefined' is not assignable to parameter of type 'string | number | boolean'.
//* Тип union подходит для тех ситуаций, когда логика работы со всеми объединенными типами однообразна например функция возвращает `${num}`
//* Однако иногда логика может различаться в зависимости от переданного типа. В этом случае можно использовать проверку на тип, чтобы разграничить логику для различных типов:
// function printSentence(words: string[]|string){
//       if (typeof words === "string") {
//         console.log(words);
//       } else {
//         console.log(words.join(" "));
//       }
// }
// printSentence(["Язык", "программирования", "TypeScript"]);
// printSentence("Язык программирования JavaScript");
// __________________________________________________________________________________
//? 					Null и undefined
// "strictNullChecks": true
// нередки ситуации, когда мы точно не знаем, имеет ли какая-то переменная или параметр функции или конкретное значение или оно отсутствует. Особенно в тех случааях, когда мы получаем значение из вне, например, с помощью запроса к какому-нибудь сетевому ресурсу. В этом случае может потребоваться, чтобы переменная или параметр могли принимать значение null. И в этом случае можно использовать объединения. 
// let userId: number|null = null;
// function printId(id: number|null){
//     if (id === null) {
//         console.log("пользователь отсутствует");
//     } else {
//         console.log(`id пользователя: ${id}`);
//     }
// }
// printId(userId)     // пользователь отсутствует
// userId = 45;
// printId(userId);    // id пользователя: 45
// __________________________________________________________________________________
//* Оператор ! (non-null assertion operator) позволяет указать, что объект не представляет значение null и undefined. Так, возьмем следующий пример:
// const header: HTMLElement|null = document.getElementById("header");
// header.innerText = "Hello Typescript!";
// Встроенная функция document.getElementById() возвращает элемент веб-страницы по id, который представляет тип HTMLElement|null. То есть он может иметь значение null, если html-элемента с подобным id нет на веб-странице. Получив элемент, мы пытаемся с помощью его свойства innerText изменить его текстовое содержимое.
// Вроде все нормально, однако умолчанию с включенной опцией strictNullChecks при компиляции мы получим ошибку:
// const header: HTMLElement|null = document.getElementById("header");
// header!.innerText = "Hello Typescript!";
//* Оператор ! ставится после объекта, который теоретически может принимать значение null перед обращением к его свойствам и методам:
// object!.property
// object!.method()
// __________________________________________________________________________________
//?       Псевдонимы типов
// Можно дать новому типу данных ( обьединение нескольких существующих) с помощью type
// type numOrStr = number | string;
//  let numb: numOrStr = true; //* ошибка;
// type newType = numOrStr | boolean;
// let userId : newType = 2;
// userId = `obe`;
// userId = true;
// ----------------------------------------------------------------
// function hey (x:number, y: string) : numOrStr {
// 	return x+y;
// }
// ----------------------------------------------------------------
// type smth = {name: string; age: number};  //* удобно, чтобы для каждого не писать тип
// let bob: smth = {name: `alex`, age: 24};
// let tom: smth = {name: `tom`, age: 30};
// type all = {name: string; age: number} & {child: string};   //* расширяем созданный тип
// let boy: all = {name: `tom`, age: 30, child: `bob`};
// __________________________________________________________________________________
//? 	 Type assertion. Преобразование к типу
//* Если у нас переменная одного типа, но нам нужно временно воспользоваться методом другого типа, то можно юзать преобразование
// let someValue : any = `2this is angff`;
// let num: number = (<string>someValue).length; // без скобок работать не будет
// // или 
// let bem: number = (someValue as string).length; 
// console.log (bem);
// __________________________________________________________________________________
//? Неопределенный набор и наполнение параметров
//* Если необходимо, чтобы функция принимала набор однотипных параметров, то используется знак многоточия, после которого идет массив:
// function addNumbers(firstNumber: number, ...numberArray: number[]): number {    
//     let result = firstNumber;
//     for (let i = 0; i < numberArray.length; i++) {
//         result+= numberArray[i];
//     }
//     return result;
// }
// let num1 = addNumbers(3, 7, 8);
// console.log(num1); // 18
// let num2 = addNumbers(3, 7, 8, 9, 4);
// console.log(num2); // 31
//* Однако не всякий массив можно так передать. Обратите внимания, что для массива используется выражение as const:
// const numbers = [1, 3, 5, 7, 9] as const;
// function sum(a: number, b: number): number {
//     return a + b;
// }
// const numbers = [1, 3, 5, 7, 9] as const;
// let num = sum(...numbers);  // ! Ошибка - функция sum принимает только два параметра
// console.log(num); // 25
// __________________________________________________________________________________
//?   				 МАССИВЫ
// let arr: number[] = [1, 2, 3, 4]; или   let arr1: Array<number> = [1,2,3,4,5];
// let str: string[] = [`one`, `two`, `three`]; 
// или let str1: Array<string> = [`one`, `two`, `three`];
//* TypeScript также позволяет определять массивы, элементы которых нельзя изменять. Для этого применяется тип ReadonlyArray<>, для которого в угловых скобках указывается тип элементов массива.
// const arr: ReadonlyArray<string> = [`one`, `two`, `three`];
// arr[1] = `three`; // ОШИБКА Сигнатура индекса в типе "readonly string[]" разрешает только чтение.
// arr.push(`sdfds`); // ОШИБКА Свойство "push" не существует в типе "readonly string[]"
//* Для определения подобных массивов также можно использовать сокращение типа - readonly Тип_данных[]:
// const people: readonly string[]= ["Tom", "Bob", "Sam"];
// __________________________________________________________________________________
//?   				 КОРТЕЖИ(Tuples)
//* В отличие от массивов кортежи могут хранить значения разных типов. Для определения кортежа применяется синтаксис массива:
// определение кортежа - кортеж состоит из двух элементов - строки и числа
// let user: [string, number] = ['Andrey', `dsfsdf`]; ошибка
// let user: [string, number] = ['Andrey', 23]; // норм 
//* Кортежи в функциях
// function createUser(name: string, age: number) : [string, number]{
//     return [name, age];
// }
// __________________________________________________________________________________
//*Необязательные элементы кортежей
// Кортежи могут иметь необязательные элементы, для которых можно не предоставлять значение. Чтобы указать
//* , что элемент является необязательным, после типа элемента ставится вопросительный знак ?:
// let bob: [string, number, boolean?] = ["Bob", 41, true];
// let tom: [string, number, boolean?] = ["Tom", 36];
// __________________________________________________________________________________
//* Заполнение кортежа
// С помощью оператора ... внутри определения типа кортежа можно определить набор элементов, количество которых неопределено.
// let tupl: [string, ...number[]] = [`Math`, 1,2,3,4];  
// tupl.push(2, 4); // работает
// console.log(tupl);
//* Неопределенное количество элементов можно определять как в конце, так и в середине и в начале кортежа:
// let physics: [...number[], string] = [5, 5, 5, "Physics"];
// let chemistry: [string, ...number[], boolean] = ["Chemistry", 3, 3, 4, 5, false];
// __________________________________________________________________________________
//* Кортеж для чтения
// const tom: readonly [string, number] = ["Tom", 36]; 
// tom[1] = 37; // ! Ошибка - элементы кортежа для чтения нельзя изменять
// __________________________________________________________________________________
//* Декомпозиция кортежа (деструктуризация) имя любое
// let tom: [string, number, boolean] = ["Tom", 36, false];
// let [username, userage, isMarried] = tom;   // декомпозиция 
// console.log(username);      // Tom
// console.log(userage);       // 36
// console.log(isMarried);     // false
// При этом количество переменных должно соответствовать количеству элементов кортежа. либо пропускать , , 
// let tom: [string, number, boolean] = ["Tom", 36, false];
// const [username, ...rest] = tom;
// console.log(username);      // Tom
// console.log(rest[0]);       // 36
// console.log(rest[1]);       // false
// __________________________________________________________________________________ 
//?          Перечисление enum
// Тип enum или перечисление позволяет определить набор именнованных констант, которые описывают определенные состояния.
// Для определения перечисления применяется ключевое слово enum. Например, объявим следующее перечисление:
//* enum Season { Winter, Spring, Summer, Autumn };
// enum Season { Winter, Spring, Summer, Autumn };
// let current: Season = Season.Summer;
// console.log(current);       // 2
// current = Season.Autumn;    // изменение значения
// ---------------------------------------------------------
// enum Season { Winter, Spring, Summer, Autumn };
// фактически эквивалентно следующему:
// enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };
//* Либо можно каждой константе задать свое значение: 
// enum Season { Winter=4, Spring=8, Summer=16, Autumn=32 };   // 4, 8, 16, 32  //  если не зададим како-то , то будет увеличиваться на 1 от предыдущей
// Также мы можем получить непосредственно текстовое значение:
// enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };
// let current: string = Season[2];    // 2 - числовое значение Summer
// console.log(current);   // Summer
// ----------------------------------------------------------------------
// enum Season { 
//     Winter = "Зима", 
//     Spring = "Весна",
//     Summer = "Лето", 
//     Autumn = "Осень"
// };
// var current: Season = Season.Summer;
// console.log(current);   // Лето
