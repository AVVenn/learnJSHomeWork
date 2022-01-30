
// for 
// methods


// .push();
// .pop();
// .shift();
// .unshift();
// .concat();
// .slice();
// .splice();
// .includes();
// .indexOf();
// .lastIndexOf();
// .join();

// .split();

// const arr = ['one',false,'three',23, 'four','five', 'six'];

// 1. создать любой массив из 10 чисел, вывести в консоль сумму всех
// элементов массива


// let sum = 0;

// for (let i = 0; i < massiv.length; i++) {
//     sum += massiv[i];
// }

// console.log(sum);


// 2. найти среднее арифметическое элементов массива которые стоят
// на четных местах

// let sum = 0;
// let counter = 0;

// for (let i = 0; i < massiv.length; i++) {
//     if (i%2 === 0) {
//         counter++;
//         sum += massiv[i];
//     }
// }

// console.log( sum/counter );



// 3. создать массив элементы которого равны элементам исходного 
// массива (созаем его сами), но с противоположными знаками

const massiv = [2,-32, 3, -12, -65, 3, -46, 86];
const result = [];

for (let i=0; i < massiv.length; i++) {
    result.push(-massiv[i]);

    // result[i] = -massiv[i];
}

console.log(result);




