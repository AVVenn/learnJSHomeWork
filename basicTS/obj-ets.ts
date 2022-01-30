//? 			OBJECT

// let person: { name: string; age: number } = { name: "Tom", age: 23 };
// тоже самое что
// let person = { name: "Tom", age: 23 };
// но
// person = { name: "Bob" };           // !  Ошибка  - в данном случае переменная person представляет тип { name: string; age: number }

// let person = { name: "Tom", age: 23 };
// person = { name: "Bob", age: 35 };      //todo Норм
// __________________________________________________________________________________
//*  Необязательные свойства
// let person: { name: string; age?: number } = { name: "Tom", age: 23 }; //* Свойство age - необязательное
// person = {name: 'TOOOM'}; // Нормально поменяли
// console.log(person.age); // undefined , мы ж то перезаписали обьъект
// __________________________________________________________________________________
//* Объекты в функциях
// function printUser(user: { name: string; age: number}) {
// 	console.log(`name: ${user.name}  age: ${user.age}`);
//   }
//   let bob = {name: "Bob", age: 44, isMarried: true};
//   printUser(bob);
//* Здесь переменная bob представляет тип {name: string, age: number, isMarried: boolean}, тем не менее он также соответствует определению типа { name: string; age: number}.
// __________________________________________________________________________________
//* Оператор in
// Оператор in позволяет проверить наличие определенного свойства в объекта. Он возвращает true, если свойство есть в объекте, и false, если свойство отсутствует. Например:
// let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
// function printUser(user: { name: string; age?: number }){
//     if("age" in user){    //* Название свойства передается как строка.
//         console.log(`Age: ${user.age}`);
//     }
//     else{
//         console.log(`Няма age`);
//     }
// }
// printUser(tom);
// __________________________________________________________________________________
//* Декомпозиция объектов-параметров
// function printUser({name, age}: { name: string; age: number}) {
// 	console.log(`name: ${name}  age: ${age}`); //* обращаемся не к tom.name , а сразу к name
//   }

//   let tom = {name: "Tom", age: 36};  
//   printUser(tom);
// __________________________________________________________________________________
//?  				 ОПП(Объектно-ориентированное программирование)
// __________________________________________________________________________________
//? 				Классы
// class User {}
// let tom: User = new User();
// let alice = new User();
// __________________________________________________________________________________
//* Конструкторы
// class User {
//     name: string; // нужно прописать тип данных каждому полю до конструктора
//     age: number;
//     constructor(userName: string, userAge: number) {   
//         this.name = userName;
//         this.age = userAge;
//     }
//     print(){
//         console.log(`name: ${this.name}  age: ${this.age}`);
//     }
// }
// let tom = new User("Tom", 36);
// tom.print();        // name: Tom  age: 36
//* TypeScript позволяет определять поля для чтения, значения которых нельзя изменить (кроме как в конструкторе). Для определения таких полей применяется ключевое слово readonly:
// class User {
//     readonly name: string = "Default user";
//     age: number;
//     constructor(userName: string, userAge: number) { //* Фактически дублирует определение типа данных , что выше
//         this.name = userName;
//         this.age = userAge;
//     }
// }
// let tom = new User("Tom", 36);
// tom.name = "Bob";       // ! Ошибка - поле name - только для чтения
// __________________________________________________________________________________
// * Наследование и переопределение конструктора
// class Person {
// 	    name: string;
// 	    constructor(userName: string) {
// 	        this.name = userName;
// 	    }
// 	    print(): void {
// 	        console.log(`Имя: ${this.name}`);
// 	    }
// 	}
// 	class Employee extends Person {
// 	    company: string;
// 	    constructor(name: string, company: string) {
// 	        super(name);
// 	        this.company = company;
// 	    }
// 	    work(): void {
// 	        console.log(`${this.name} работает в компании ${this.company}`);
// 	    }
// 	}
// 	 
// 	let bob: Employee = new Employee("Bob", "Microsoft");
// 	bob.work();     // Bob работает в компании Microsoft
// __________________________________________________________________________________
//?                         Абстрактные классы, методы и поля
//* Абстрактные классы представляют классы, определенные с ключевым словом abstract. Они во многом похожи на обычные классы за тем исключением, что мы не можем создать напрямую объект абстрактного класса, используя его конструктор.
// abstract class Figure {
// }
//  let someFigure = new Figure()    // Ошибка!
//* Абстрактный метод не определяет никакой реализации. Если класс содержит абстрактные методы, то такой класс должен быть абстрактным. Кроме того, при наследовании производные классы обязаны реализовать все абстрактные методы.
// __________________________________________________________________________________
//?                         Модификаторы доступа
//* В TypeScript три модификатора: public, protected и private.  По умолчанию public

//* Если же к свойствам и методам применяется модификатор private, то к ним нельзя будет обратиться извне при создании объекта данного класса.
// class Person {
//     private _name: string;
//     private _year: number;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._year = this.setYear(age);
//     }
//     public print(): void {
//         console.log(`Имя: ${this._name}  Год рождения: ${this._year}`);
//     }
// private setYear(age: number): number {
// return new Date().getFullYear() - age;
// }
// }
// let tom = new Person("Tom", 24);
// tom.print();
// console.log(tom._name); //! нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private
// __________________________________________________________________________________
//* protected   Модификатор protected определяет поля и методы, которые из вне класса видны только в классах-наследниках:
// class Person {
//     protected name: string;
//     private year: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.year = this.setYear(age);
//     }
//     protected printPerson(): void {
//         console.log(`Имя: ${this.name}  Год рождения: ${this.year}`);
//     }
// }
// class Employee extends Person {
//     protected company: string;
//     constructor(name: string, age: number, company: string) {
//         super(name, age);
//         this.company = company;
//     }
//     public printEmployee(): void {
//         //console.log("Age: " + this.age);      // поле age недоступно, так как private
//         this.printPerson();                     // метод printPerson доступен, так как protected
//         console.log(`Компания: ${this.company}`);
//     }
// }
// let sam = new Employee("Sam", 31, "Microsoft");
// sam.printEmployee();
// __________________________________________________________________________________
//* Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, пусть у нас есть следующий класс:
// class Person {
//     private name: string;
//     private age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     printPerson(): void {
//         console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
//     }
// }
// Этот класс будет аналогичен следующему:
// class Person {
//     constructor(private name: string, private age: number) {  } 
//     printPerson(): void {
//         console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
//     }
// }
// __________________________________________________________________________________
// *readonly
// class Person {
//     constructor(private readonly name: string, private age: number) {  }
// }
// let one = new Person(`John`, 25); 
// one.name = `dsfsd`; // для чтение и приватное
// __________________________________________________________________________________
//? 			Методы доступа get и set
// class Person {
//     name: string;
//     private _age: number;
//     private _name: string;

//     public get age(): number {
//         return this._age;
//     }

//     public set age(n: number) {
//         if(n < 0 || n > 110){
//             console.log("Недопустимый возраст!");
//         }
//         else{
//             this._age = n;
//         }
//     }
// }
// let tom = new Person();
// tom.name = "Tom";
// tom.age = 36;           
// console.log(tom.age);   // 36
// tom.age = -1243;        // Недопустимый возраст!   
// console.log(tom.age);   // 36 
// __________________________________________________________________________________
//* static
// static retirementAge: number = 65;
// Стоит отметить, что в статических методах мы можем обращаться к статическим полям или другим статическим методам класса, но мы не можем обращаться к нестатическим полям и методам и использовать ключевое слово this. Например, в следующем случае мы столкнемся с ошибкой при компиляции:

// static calculateYears(): number{
//     return Person.retirementAge - this.age; // ! Ошибка - this.age - обращение к нестатическому полю
// }
// __________________________________________________________________________________
//?                                     ИНТЕРФЕЙСЫ

// Интерфейс определяет свойства и методы, которые объект должен реализовать. 
// interface IUser {
//     id: number;
//     name: string;
// }

// Теперь используем его в программе:

// let employee: IUser = {
//     id: 1, 
//     name: "Tom"
// }
//* По сути employee - обычный объект за тем исключением, что он имеет тип IUser. Если правильнее говорить, то employee реализует интерфейс IUser. Причем эта реализация накладывает на employee некоторые ограничения. Так, employee должен реализовать все свойства и методы интерфейса IUser, поэтому при определении employee данный объект обязательно должен включать в себя свойства id и name.
// __________________________________________________________________________________
// Необязательные свойства и свойства только для чтения
//* При определении интерфейса мы можем задать некоторые свойства как необязательные с помощью знака вопроса. Подобные свойства реализовать необязательно:
// interface IUser {
//     readonly id: number;
//     name: string;
//     age?: number; // *можно чтобы не было в объекте
// 		sayWords(words: string): void;
// }
// let employee: IUser = {
//     id: 1,  //* поменять низя
//     name: "Alice",
//     age: 23,
//     sayWords: function(words: string): void{   //* объект, который реализует интерфейс,обязан реализовать определенную в интерфейсе функцию с тем же набором параметров и тем типом выходного результата. 
// 	   console.log(`${name} говорит "${words}"`);
//	   }
//
// }
// let manager: IUser = {
//     id: 2, 
//     name: "Tom"
//     sayWords: function(words: string): void{
// 	   console.log(`${name} говорит "${words}"`);
//	   }
// }
// __________________________________________________________________________________
//* Интерфейсы классов
// Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово implements:
// interface IUser {
//     id: number;
//     name: string;
//     getFullName(surname: string): string;
// }
// class User implements IUser{
//     constructor(public userId: number, public userName: string,public userAge: number) {
//         this.userId = userId;
//         this.userName = userName;
//         this.userAge = userAge;
//     }
//     getFullName(surname: string): string {
//         return this.userName + " " + surname;
//     }
// }

// let tom = new User(1, "Tom", 23);
// console.log(tom.getFullName("Simpson"));
//* Класс User реализует интерфейс IUser. В этом случае класс User обязан определить все те же свойства и функции, которые есть в IUser.
//* При этом объект tom является как объектом User, так и объектом IUser:
// let tom :IUser = new User(1, "Tom", 23);
// //или
// let tom :User = new User(1, "Tom", 23);
// __________________________________________________________________________________
//* Расширение интерфейса
// TypeScript позволяет добавлять в интерфейс новые поля и методы, просто объявив интерфейс с тем же именем и определив в нем необходимые поля и методы. Например:
// interface IUser {
//     id: number;
//     name: string;
// }
// interface IUser{
//     age: number;
// }
// let employee: IUser = {

//     id: 1, 
//     name: "Alice",
//     age: 31
// }
// __________________________________________________________________________________
//* Наследование интерфейсов
// Интерфейсы, как и классы, могут наследоваться:

// interface IMovable {
//     speed: number;
//     move(): void;
// }
// interface ICar extends IMovable {
//     fill(): void;
// }
// class Car implements ICar {
//     speed: number;
//     move(): void {
//         console.log("Машина едет со скоростью " + this.speed + " км/ч");
//     }

//     fill(): void {
//         console.log("Заправляем машину топливом");
//     }
// }

// let auto = new Car();
// auto.speed = 60;
// auto.fill();
// auto.move();
// __________________________________________________________________________________
//* Интерфейсы функций
// interface FullNameBuilder {
//     (name: string, surname: string): string;
// }
// let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
//         return "Mr. " + name + " " + surname;
// }
// let fullName = simpleBuilder("Bob", "Simpson");
// console.log(fullName); // Mr. Bob Simpson
// __________________________________________________________________________________
//* Интерфейсы массивов
// Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам
// interface StringArray {
//     [index: number]: string;
// }

// let phones: StringArray;
// phones = ["iPhone 7", "HTC 10", "HP Elite x3"];

// let myPhone: string = phones[0];
// console.log(myPhone);

// Здесь определен интерфейс StringArray, который содержит сигнатуру массива. Эта сигнатура указывает, что объект, который реализует StringArray, может индексироваться с помощью чисел (объекта типа number). И, кроме того, данный объект должен хранить объекты типа string, то есть строки.
// __________________________________________________________________________________
//* Выше индекс представлял тип number. Но мы можем использовать для индексации и тип string:

// interface Dictionary {
//     [index: string]: string;
// }
// var colors: Dictionary = {};
// colors["red"] = "#ff0000";
// colors["green"] = "#00ff00";
// colors["blue"] = "#0000ff";

// console.log(colors["red"]);

//* после implements перечисляются интерфеййсф через запятую
// __________________________________________________________________________________
//?                                    Преобразование типов

// class Person {
//     name: string;
//     constructor(userName: string) {
//         this.name = userName;
//     }
// }

// class Employee extends Person {
//     company: string;
//     constructor(userName: string, company: string) {
//         super(userName);
//         this.company = company;
//     }
// }

// Здесь класс Employee унаследован от класса Person. Поскольку объекты Employee в то же время являются и объектами Person, то при определении объектов мы можем написать так:
// let tom : Person = new Employee("Tom", "Microsoft");

// Соответственно везде, где в функцию в качестве параметра передается объект Person или возвращается из функции объект Person, мы вместо объекта Person можем передавать объект Employee
//* Здесь продемонстрированы восходящиие преобразования, то есть преобразования от более конкретного типа к более общему - от призводного типа Employee к базовому типу Person.
// __________________________________________________________________________________
//* Но есть и другой тип преобразований - нисходящие или от более общего типа к более конкретному. Например:

// class Person {
//     name: string;
//     constructor(userName: string) {
//         this.name = userName;
//     }
// }

// class Employee extends Person {

//     company: string;
//     constructor(userName: string, company: string) {
//         super(userName);
//         this.company = company;
//     }
// }

// let tom : Person = new Employee("Tom", "Microsoft");
// console.log(tom.company);   // ошибка - в классе Person нет свойства company


//* Чтобы решить эту ситуацию, нам надо явно преобразовать объект tom к типу Employee:
//* let tomEmployee: Employee = <Employee>tom; // преобразование к типу Employee
// console.log(tomEmployee.company);
//  или так
// console.log((<Employee>tom).company);

//* Все сказанное в отношении преобразования классов будет справедливо и для преобразования интерфейсов.
// __________________________________________________________________________________
//?                              Обобщения

// TypeScript является строго типизированным языком, однако иногда надо построить функционал так, чтобы он мог использовать данные любых типов.

// function getId<T>(id: T): T { 
//     return id;
// }

//* С помощью выражения <T> мы указываем, что функция getId типизирована неким типом T. Причем на момент написания функции мы можем не знать, что именно это будет за тип. А при выполнении функции вместо Т будет подставляться конкретный тип. Причем на этапе компиляции конкретный тип не известен. И возвращать функция будет объект этого типа. Например:

// function getId<T>(id: T): T {
//     return id;
// }
// let result1 = getId<number>(5);
// console.log(result1);
// let result2 = getId<string>("abc");
// console.log(result2);

// В первом случае вместо параметра T будет испльзоваться тип number, поэтому в функцию мы можем передать число. Во втором случае вместо T используется тип string, поэтому во втором случае можно передать строку. Таким образом, мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, каждый вариант обобщенной функции может принимать объекты только определенного типа.
// __________________________________________________________________________________
//* Подобным образом еще можно использовать обобщенные массивы:

// function getString<T>(arg: Array<T>): string {
//     return args.join(", ");
// }
// let result = getString<number>( [1, 2, 34, 5]);
// console.log(result);
// __________________________________________________________________________________
//* Обобщенные классы и интерфейсы
// class User<T> {
//     private _id: T;
//     constructor(id:T) {

//         this._id=id;
//     }
//     getId(): T {

//         return this._id;
//     }
// }

// let tom = new User<number>(3);
// console.log(tom.getId()); // возвращает number

// let alice = new User<string>("vsf");
// console.log(alice.getId()); // возвращает string

//* Только в данном случае надо учитывать, что если мы типизировали объект определенным типом, то сменить данный тип уже не получится.

// __________________________________________________________________________________
//* Ограничения или constraints позволяют ограничить набор типов, которые могут использоваться в обобщениях. Ограничения задаются в форме
// <T extends критерий_типов>

// function compareName<T extends {name:string}>(obj1: T, obj2: T): void{
//     if(obj1.name === obj2.name){
//         console.log("Имена совпадают");
//     }
//     else{
//         console.log("Имена различаются");
//     }
// }
// let tom: {name:string} = {name: "Tom"};
// let sam: {name: string} = {name: "Sam"};
// compareName<{name:string}>(tom, sam);

// Запись <T extends {name:string}> означает, что параметр T должен представлять такой тип, который содержит свойство name, как в случае выше два объекта tom и sam.
// Причем параметр T необязательно должен представлять именно тип {name:string}. 

let num: number = 14;
let a = 