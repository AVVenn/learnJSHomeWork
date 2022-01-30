// Прототипное наследование

// В программировании мы часто хотим взять что-то и расширить.
// Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе.
// Прототипное наследование — это возможность языка, которая помогает в этом.

// Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа. В программировании такой механизм называется «прототипным наследованием».
// _______________________________________________________________________________________________________________________
// Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.
// Одним из них является использование __proto__, например так:

// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
//   rabbit.__proto__ = animal;
// _______________________________________________________________________________________________________________________
// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
// Обратите внимание, что __proto__ — не то же самое, что [[Prototype]]. Это геттер/сеттер для него.

// Он существует по историческим причинам, в современном языке его заменяют функции Object.getPrototypeOf/Object.setPrototypeOf, которые также получают/устанавливают прототип. Мы рассмотрим причины этого и сами функции позже.
// _______________________________________________________________________________________________________________________
// Если мы ищем свойство в rabbit, а оно отсутствует, JavaScript автоматически берёт его из animal.
// Например:

// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // (*)
  
//    теперь мы можем найти оба свойства в rabbit:
//   alert( rabbit.eats ); // true (**)
//   alert( rabbit.jumps ); // true

// Здесь строка (*) устанавливает animal как прототип для rabbit.

// Затем, когда alert пытается прочитать свойство rabbit.eats (**), его нет в rabbit, поэтому JavaScript следует по ссылке [[Prototype]] и находит его в animal (смотрите снизу вверх):


// let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  // walk взят из прототипа
//   rabbit.walk(); // Animal walk


//   Цепочка прототипов может быть длиннее:

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// alert(longEar.jumps); // true (из rabbit)

// _______________________________________________________________________________________________________________________

// Есть только два ограничения:

// 1. Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
// 2. Значение __proto__ может быть объектом или null. Другие типы игнорируются.

// Это вполне очевидно, но всё же: может быть только один [[Prototype]]. Объект не может наследоваться от двух других объектов.

// _______________________________________________________________________________________________________________________
// Операция записи не использует прототип
// Проототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.
// В приведённом ниже примере мы присваиваем rabbit собственный метод walk:

// let animal = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.walk = function() {
//   alert("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!
// Теперь вызов rabbit.walk() находит метод непосредственно в объекте и выполняет его, не используя прототип

// _______________________________________________________________________________________________________________________
// Значение «this»

// Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.
// _______________________________________________________________________________________________________________________
// Цикл for…in

// let animal = {
//     eats: true
//   };

//  let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  // Object.keys возвращает только собственные ключи
//   alert(Object.keys(rabbit)); // jumps
  
  // for..in проходит и по своим, и по унаследованным ключам
//   for(let prop in rabbit) alert(prop); // jumps, затем eats
// _______________________________________________________________________________________________________________________

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

// Пример такой фильтрации:

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Our: ${prop}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop}`); // Inherited: eats
//   }
// }
// В этом примере цепочка наследования выглядит так: rabbit наследует от animal, который наследует от Object.prototype (так как animal – литеральный объект {...}, то это по умолчанию), а затем null на самом верху:


// Почти все остальные методы получения ключей/значений игнорируют унаследованные свойства
// Почти все остальные методы, получающие ключи/значения, такие как Object.keys, Object.values и другие – игнорируют унаследованные свойства.

// Они учитывают только свойства самого объекта, не его прототипа.
// _______________________________________________________________________________________________________________________
// F.prototype

// Как мы помним, новые объекты могут быть созданы с помощью функции-конструктора new F().
// Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
  
//   Rabbit.prototype = animal;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//   alert( rabbit.eats ); // true
//   console.log (rabbit);

// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
// _______________________________________________________________________________________________________________________
// F.prototype используется только в момент вызова new F()
// F.prototype используется только при вызове new F() и присваивается в качестве свойства [[Prototype]] нового объекта. После этого F.prototype и новый объект ничего не связывает. Следует понимать это как «единоразовый подарок» объекту.

// После создания F.prototype может измениться, и новые объекты, созданные с помощью new F(), будут иметь другой объект в качестве [[Prototype]], но уже существующие объекты сохранят старый.

// _______________________________________________________________________________________________________________________
// F.prototype по умолчанию, свойство constructor

// У каждой функции по умолчанию уже есть свойство "prototype".
// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.
// Вот такой:
/// function Rabbit() {}
/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/

// Проверим это:
// function Rabbit() {}
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }
// alert( Rabbit.prototype.constructor == Rabbit ); // true

// Соответственно, если мы ничего не меняем, то свойство constructor будет доступно всем кроликам через [[Prototype]]:
// function Rabbit() {}
// / по умолчанию:
// /Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

// alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)
// _______________________________________________________________________________________________________________________
// Мы можем использовать свойство constructor существующего объекта для создания нового.
// Пример:
// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }
// let rabbit = new Rabbit("White Rabbit");
// let rabbit2 = new rabbit.constructor("Black Rabbit")


// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект.
// Но, пожалуй, самое важное о свойстве "constructor" это то, что…
// …JavaScript сам по себе не гарантирует правильное значение свойства "constructor".
// Да, оно является свойством по умолчанию в "prototype" у функций, но что случится с ним позже – зависит только от нас.
// В частности, если мы заменим прототип по умолчанию на другой объект, то свойства "constructor" в нём не будет.
// Например:

// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true
// };

// let rabbit = new Rabbit();
// alert(rabbit.constructor === Rabbit); // false

// Таким образом, чтобы сохранить верное свойство "constructor", мы должны добавлять/удалять/изменять свойства у прототипа по умолчанию вместо того, чтобы перезаписывать его целиком:

// function Rabbit() {}

//  Не перезаписываем Rabbit.prototype полностью,
//  а добавляем к нему свойство
// Rabbit.prototype.jumps = true
//  Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor
// Или мы можем заново создать свойство constructor:

// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// };
// теперь свойство constructor снова корректное, так как мы добавили его

// _______________________________________________________________________________________________________________________
// Встроенные прототипы

// Object.prototype


// Давайте выведем пустой объект:
// let obj = {};
// alert( obj ); // "[object Object]" ?

// Где код, который генерирует строку "[object Object]"? Это встроенный метод toString, но где он? obj ведь пуст!
// …Но краткая нотация obj = {} – это то же самое, что и obj = new Object(), где Object – встроенная функция-конструктор для объектов с собственным свойством prototype, которое ссылается на огромный объект с методом toString и другими.

// Вот что происходит: Когда вызывается new Object() (или создаётся объект с помощью литерала {...}), свойство [[Prototype]] этого объекта устанавливается на Object.prototype по правилам, которые мы обсуждали в предыдущей главе:



// Таким образом, когда вызывается obj.toString(), метод берётся из Object.prototype.
// Мы можем проверить это так:
// let obj = {};
// alert(obj.__proto__ === Object.prototype); // true
//  obj.toString === obj.__proto__.toString == Object.prototype.toString
// Обратите внимание, что по цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]:
// alert(Object.prototype.__proto__); // null
// _______________________________________________________________________________________________________________________
// Другие встроенные прототипы

// Другие встроенные объекты, такие как Array, Date, Function и другие, также хранят свои методы в прототипах.
// Например, при создании массива [1, 2, 3] внутренне используется конструктор массива Array. Поэтому прототипом массива становится Array.prototype, предоставляя ему свои методы. Это позволяет эффективно использовать память.
// Согласно спецификации, наверху иерархии встроенных прототипов находится Object.prototype. Поэтому иногда говорят, что «всё наследует от объектов».


// Давайте проверим прототипы:
// let arr = [1, 2, 3];   // наследует ли от Array.prototype?
// alert( arr.__proto__ === Array.prototype ); // true
//  затем наследует ли от Object.prototype?
// alert( arr.__proto__.__proto__ === Object.prototype ); // true

/// и null на вершине иерархии
// alert( arr.__proto__.__proto__.__proto__ ); // null
// Некоторые методы в прототипах могут пересекаться, например, у Array.prototype есть свой метод toString, который выводит элементы массива через запятую:

// let arr = [1, 2, 3]
// alert(arr); // 1,2,3 <-- результат Array.prototype.toString
// Как мы видели ранее, у Object.prototype есть свой метод toString, но так как Array.prototype ближе в цепочке прототипов, то берётся именно вариант для массивов:

// В браузерных инструментах, таких как консоль разработчика, можно посмотреть цепочку наследования (возможно, потребуется использовать console.dir для встроенных объектов):

// Другие встроенные объекты устроены аналогично. Даже функции – они объекты встроенного конструктора Function, и все их методы (call/apply и другие) берутся из Function.prototype. Также у функций есть свой метод toString.

// function f() {}

// alert(f.__proto__ == Function.prototype); // true
// alert(f.__proto__.__proto__ == Object.prototype); // true, наследует от Object

// _______________________________________________________________________________________________________________________
// Примитивы

// Самое сложное происходит со строками, числами и булевыми значениями.

// Как мы помним, они не объекты. Но если мы попытаемся получить доступ к их свойствам, то тогда будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean, который предоставит методы и после этого исчезнет.

// Эти объекты создаются невидимо для нас, и большая часть движков оптимизирует этот процесс, но спецификация описывает это именно таким образом. Методы этих объектов также находятся в прототипах, доступных как String.prototype, Number.prototype и Boolean.prototype.

// Значения null и undefined не имеют объектов-обёрток
// Специальные значения null и undefined стоят особняком. У них нет объектов-обёрток, так что методы и свойства им недоступны. Также у них нет соответствующих прототипов.

// _______________________________________________________________________________________________________________________
// Встроенные прототипы можно изменять. Например, если добавить метод к String.prototype, метод становится доступен для всех строк:

// String.prototype.show = function() {
//   alert(this);
// };
// "BOOM!".show(); // BOOM!

// В течение процесса разработки у нас могут возникнуть идеи о новых встроенных методах, которые нам хотелось бы иметь, и искушение добавить их во встроенные прототипы. Это плохая идея.

// В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.
// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.
// Тогда мы можем реализовать его сами и добавить во встроенный прототип.

// Например:

// if (!String.prototype.repeat) { // Если такого метода нет добавляем его в прототип

//   String.prototype.repeat = function(n) {  // повторить строку n раз
//     return new Array(n + 1).join(this);
//   };
// }
// alert( "La".repeat(3) ); // LaLaLa

// Заимствование у прототипов

// Некоторые методы встроенных прототипов часто одалживают.
// Например, если мы создаём объект, похожий на массив (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.
// Пример:

// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// obj.join = Array.prototype.join;
// alert( obj.join(',') ); // Hello,world!

// Это работает, потому что для внутреннего алгоритма встроенного метода join важны только корректность индексов и свойство length, он не проверяет, является ли объект на самом деле массивом. И многие встроенные методы работают так же.

// Альтернативная возможность – мы можем унаследовать от массива, установив obj.__proto__ как Array.prototype, таким образом все методы Array станут автоматически доступны в obj.

// Но это будет невозможно, если obj уже наследует от другого объекта. Помните, мы можем наследовать только от одного объекта одновременно.

// Заимствование методов – гибкий способ, позволяющий смешивать функциональность разных объектов по необходимости.

// _______________________________________________________________________________________________________________________
// Методы прототипов, объекты без свойства __proto__
// В первой главе этого раздела мы упоминали, что существуют современные методы работы с прототипами.
// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.

// Современные же методы это:

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.

// Эти методы нужно использовать вместо __proto__.
// Например:

// let animal = {
//   eats: true
// }; 
// let rabbit = Object.create(animal); // создаём новый объект с прототипом animal
// alert(rabbit.eats); // true
// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit


// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
// У Object.create есть необязательный второй аргумент: дескрипторы свойств. Мы можем добавить дополнительное свойство новому объекту таким образом:

// let animal = {
//   eats: true
// };
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });

// alert(rabbit.jumps); // true


// Мы также можем использовать Object.create для «продвинутого» клонирования объекта, более мощного, чем копирование свойств в цикле for..in:
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));  // клон obj c тем же прототипом (с поверхностным копированием свойств)
// Такой вызов создаёт точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые, геттеры/сеттеры для свойств – и всё это с правильным свойством [[Prototype]].
// _______________________________________________________________________________________________________________________
// Не меняйте [[Prototype]] существующих объектов, если важна скорость
// _______________________________________________________________________________________________________________________
// если мы хотим использовать объект как ассоциативный массив, мы можем сделать это с помощью небольшого трюка:
// let obj = Object.create(null);
// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";
// alert(obj[key]); // "some value"

// Мы можем назвать такой объект «простейшим» или «чистым словарным объектом», потому что он ещё проще, чем обычные объекты {...}.
// Недостаток в том, что у таких объектов не будет встроенных методов объекта, таких как toString:

// let obj = Object.create(null);

// alert(obj); // Error (no toString)
// …Но обычно это нормально для ассоциативных массивов.

// _______________________________________________________________________________________________________________________





// Пример


// function Animal (name, age) {
//     this.name = name;
//     this.age = age;
// }
// Animal.prototype.eat = function (food) {
//     return `${this.name} eats ${food}`;
// };
// Animal.prototype.sleep = function () {
//     return `${this.name} sleeps`;
// };
// // const dog = new Animal('bobik', 23);
// // console.log(dog);
// function Human (name, age, job) {
//     Animal.call(this, name, age);   // Для того чтобы не переписывать поля, что в конструкторе энимала
//     this.job = job;
// 
// Human.prototype = Object.create(Animal.prototype);  
// Human.prototype.constructor = Human; 
// Human.prototype.learn = function () {
//     return `${this.name} learns JS`;
// };
// // создать класс Programmer 
// // инстанс которого должен иметь метод code
// // и поле isProgrammer = true
// // отнаследовать Programmer от Human

// function Programmer (name, age,bool) {
//     Human.call(this, name, age)
//     this.job = `programmer`;
//     this.isProgrammer = bool;
// }

// Programmer.prototype = Object.create(Human.prototype);
// Programmer.prototype.constructor = Programmer;
// Programmer.prototype.code = function() {
//     return `${this.name} ${this.age} ${this.job}`
// };

// let vasya = new Programmer(`Vasiliy`, 25 , true);

// console.log(vasya);
// console.log(vasya.code());
// console.log(vasya.sleep());