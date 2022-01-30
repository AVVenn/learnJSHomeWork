//* Для того чтобы на 1 событие повесить несколько обработчиков: addEventListener (событие, функция обработчик, options{ 
//* 												 																capture: true - пеерехват
// *												 														passive: true - не будет работать preventDefault()
//*											 																once: true - обработчик будет ли удален после отработки
//* 																											}
//*)

//* для тго чтобы удалиьь событие  remoteElementListner (событие , функция (ТОЧНАЯ ССЫОКА), options..) 


//? Когда происходит событие, то браузер создает объект (event) и передает его в качестве аргумента в функцию обработчик

//* event.stopPropagation() - отключить дальнейшее всплытие;
//* event.stopImmediatePropagation() - отключить всплытие прямо сейчас

// Делегироование событий:  1. Вешаем обработчик на контейнер
// 							2. В обработчике проверяем исходный элемент event.target
// 						 	3. Если событие произошло внутри нужного нам элемент, то обрабатываем его


//? DOM-узел можно создать 2мя методами:
// 	1. document.createElement(`tag`);
// 	2. document.createTextNode(`text`);

//? Вот методы для различных вариантов вставки:
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

//? Можно вставлять несколько элементов:
//? 	div.before("<p> Привет </p>", document.createElement(`hr`)); Но текст вставляется безопасным образом как textContent,
//? что бы текст работал как innerHTML используем метод:
//? elem.insertAdjacentHTML (куда, html)   -  

// КУДА:
//  "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

// ПРИМЕР : div.insertAdjacentHTML(`beforebegin`, `<p>Привет</p>`);

//* Для удаления узла есть метод node.remote()

//* Клонировать узел можно elem.cloneNode(true - глубокое копирование с дочерними элементами , если false -то просто сам элемент без дочерних)


//? Изменить класс - elem.className = ..

//? Добавить класс, удалить, проверить -  elem.classList 
// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.


//? Свойство element.style - объект, который соответствует тоу, что написано в атрибуте style
// elem.style.width = `100px` работает так же , как наличие в атрибуте style строки width: 100px
// если свойство состоит из нескольких слов используют camelCase: backgroundcolor = elem.style.backgroundColor

//? для задания нескольих стилей в одной строке используют:
//  elem.style.cssText = `color: red;
//  						background-color: yellow;
// 						 width: 100px`

// Некоторые значения содержатся в CSS файле , а не в обекте style, чтобы узнать значение из css можно воспользоваться :
//* getCompusedStyle(элемент, значение которого нужно получить? 2 аргумент, если нужен псевдо элемент ::before например)
