
// __________________________________________________________________________________
// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.


// function isEmptyObj() {
//     let hz = {
//         name: `andrey`
//     };
//     for( let key in hz) {
//         return false;
//     }
//     return true;
// }
// console.log(isEmptyObj());

// ___________________________________________________________________________________
// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)


// let shtuchki = {
//     shtuchka1: 200,
//     shtuchka2: 521,
//     shtuchka3: 113,
//     shtuchka4: 314,
//     shtuchka5: 871
// };


// function maxValue (object) {
//     let max;
//     for(let key in object){
//         if ( max < object[key] || max === undefined) {
//             max = object[key];
//         }
//     }
//     return console.log(max);
// }

// maxValue (shtuchki);
// ___________________________________________________________________________________
// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).

// let student = { math: 5, biology: 3, language: 2, isOboltus: `yes` };
// function var1 (object) {
//     for ( let key in object) {
//         if ( typeof object[key] === `number`) {
//             object[key] *=2;
//         }
//     }
//     return console.log(object);
// }
// var1(student);

//вариант с редюс сделать
// ___________________________________________________________________________________

// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
//   ]
//   Используя ТОЛЬКО методы массивов (циклы запрещены):
//   1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
//   2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
//   пример:
//   const arr2 = [
//     {a: 2, b: 1},
//     {a: 5, b: 144},
//     {a: 95, b: 49}
//   ]
//   3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
//   пример получившегося массива: [2,1,5,12,95,7]
//   можно делать копию


// ___________________________________________________________________________________
//1.1  function validOrNo (array) {
//     let result = true;
//     let c = array.filter(item => {
//         if (item.a < item.b) {
//             result = false;
//         } 
//         });
//         if (result === true) {
//             return console.log(`its valid`);
//         } else {
//             return console.log(`its no valid`);
//         }
// }

// validOrNo (arr);

// -----------------------------------

// 1.1.2 function validOrNo (array) {
//     let result = true; 
//     let c = array.map (item => {
//         if (item.a < item.b) {
//             result = !result;
//         }     
//     });
//     if ( result === true ) {    
//         return console.log(`its valid`);
//     } else {
//         return console.log(`its no valid`);
//     }
// }
// validOrNo (arr);

//
// ___________________________________________________________________________________
// 1.2
// let arr = [
//     {a: 2, b: 1},   
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ]

// const arr2 = [];

// function getNewArray (array){
//     array.map(getNeWObj);
//     console.log(arr);
//     return console.log(arr2);
// }

// function getNeWObj (object) {
//     let newObj = {}
//     newObj.a = object.a;
//     newObj.b = object.b**2;
//     arr2.push(newObj);
// }

// getNewArray (arr);
// ___________________________________________________________________________________
// -----------------------------------
// ок, есть массив, в нем 3 элемента и все обьекты в каждом по 2 свойства а и б нужно создать новый массив с такой же структурой только б будет квадрат прошлого б.     
// вопросы которые нужно решить:
// 1. как создать копию массива arr  чтобы не мутировать значения arr
// можно сздаь пустой массив и запушить в его элементы  - зашкварный вариант
// считаю , что можно как-то короче и проще === можно написать функцию в которой будет создаваться новый объект  в который буду зваписываться значения старого а б меняться 
// 2. как потом поменять б  -- здесь через мап arr2.map ( item => {item.a = ?; item.b = ??b**2})
// ___________________________________________________________________________________


//   3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
//   пример получившегося массива: [2,1,5,12,95,7]
//   можно делать копию


// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ]

// function getNewArray (array) {
//     let newArr = (arr.map( item => Object.values(item))).flat();
//     return console.log(newArr);
// }
// getNewArray (arr);

// ___________________________________________________________________________________


// const lines = {
//     line1: {
//         point1: {x: 1, y: 2},
//         point2: {x: 5, y: 5}
//     },
//     line2: {
//         point1: {x: 3, y: 8},
//         point2: {x: 2, y: 1}
//     },
//     line3: {
//         point1: {x: 0, y: 4},
//         point2: {x: 3, y: 6}
//     },
//     arr: [],
// }

// function getLineLenght (toshkaA, toshkaB) {
//     result = Math.sqrt((toshkaA.x-toshkaB.x)**2+(toshkaA.y-toshkaB.y));
//     console.log(result);
//     return lines.arr.push(result);
// };

// getLineLenght(lines.line1.point1,lines.line1.point2);
// getLineLenght(lines.line2.point1,lines.line2.point2);
// getLineLenght(lines.line3.point1,lines.line3.point2);


// function canTriniagle (array){
//     if(Math.max(...array) < (lines.arr.reduce((accum, item) => accum += item) - Math.max(...array))) {
//         return console.log(`lines can make triniagle`);
//     } else {
//         return console.log(`lines can't make triniagle`)
//     }
// }

// canTriniagle (lines.arr);





