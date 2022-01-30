// const person = {
//     name: 'John',
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: false,
//     run: () => {console.log('RUN');}
// };

// console.log( Object.assign(person, {run: () => {console.log('RUUUUUN');}}, {c:4, b:200}) );

// const a = {a:2};
// const b = {b:3, d:4};
// const c = {c:5, b:100};

// const result = {
//     ...a,
//     ...b,
//     ...c
// };

// console.log(result);

//////////////////////////////////////////////////

const person = {
    name: 'John',
    age: 23,
    city: 'Gomel',
    isProgrammer: false,
    run: () => {console.log('RUN');}
};
const passports = new Set([2,2,3,5]);
for (let item of passports) {
    console.log(item);
}
const arr = [...passports];
console.log(arr);
for (let item of passports.values()) {
    console.log(item);
}
//////////////////////////////////////////////////////
const myMap = new Map([
    [4,5],
    ['hi','there']
]);

const h1 = {
    name: 'John',
    age: 23,
    city: 'Gomel',
    isProgrammer: false,
    run: () => {console.log('RUN');}
};

console.log(myMap.set( h1 , {nick: 'Bobik', tail: true} ));


for (let item of myMap.keys()) {
    console.log(item);
}

console.log(Array.from(myMap))

console.log(Object.fromEntries(myMap.entries()))