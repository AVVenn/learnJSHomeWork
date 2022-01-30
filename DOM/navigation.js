// Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.

// Есть два основных набора ссылок:

//* Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.

//* Только для узлов-элементов: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

// Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и коллекции для доступа к своему содержимому.


//todo Свойства навигации по DOM хороши, когда элементы расположены рядом. А что, если нет? Как получить произвольный элемент страницы?
// Для этого в DOM есть дополнительные методы поиска.

//* Самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.
//* elem.querySelector(css) === elem.querySelectorAll(css)[0];
// Следующий запрос получает все элементы <li>, которые являются последними потомками в <ul>:
{/* <ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "тест", "пройден"
  }
</script> */}

//? Есть 6 основных методов поиска элементов в DOM:

//? Метод				Ищет по...				Ищет внутри элемента?			Возвращает живую коллекцию?
//? querySelector		CSS-selector					  ✔									-

//? querySelectorAll	CSS-selector					✔									-

//? getElementById			id							    -									-

//? getElementsByName		name						    -									✔

//? getElementsByTagName  tag or '*'				✔									✔

//? getElementsByClassName	class						✔									✔
 

//* Безусловно, наиболее часто используемыми в настоящее время являются методы querySelector и querySelectorAll,
//  но и методы getElement(s)By* могут быть полезны в отдельных случаях, а также встречаются в старом коде.

//* Метод getElementById можно вызвать только для объекта document. Он осуществляет поиск по id по всему документу.
// elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно получить всех потомков.
// elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс.
// document.getElementsByName(name) возвращает элементы с заданным атрибутом name. Очень редко используется.

//* Кроме того:
//* Есть метод elem.matches(css), который проверяет, удовлетворяет ли элемент CSS-селектору.
//* Метод elem.closest(css) ищет ближайшего по иерархии предка, соответствующему данному CSS-селектору. Сам элемент также включён в поиск.
//* И, напоследок, давайте упомянем ещё один метод, который проверяет наличие отношений между предком и потомком:
//* elemA.contains(elemB) вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.


// innerHTML: содержимое элемента

// Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
// Мы также можем изменять его. Это один из самых мощных способов менять содержимое на странице.
// Пример ниже показывает содержимое document.body, а затем полностью заменяет его:

// <body>
//   <p>Параграф</p>
//   <div>DIV</div>

//   <script>
//     alert( document.body.innerHTML ); // читаем текущее содержимое
//     document.body.innerHTML = 'Новый BODY!'; // заменяем содержимое
//   </script>

// </body>


// .innerText()
// .innerHTML()  - забрает текстовый контент c тегами html  ноды
// .textContent() - забрает текстовый контент ноды


// .addEventListener(событие , функция, ?пеерехват (true/false))   - навестить событие  - 
// .removeEventListener(событие, функция) - отключить событие
// event в событии - эобъект в котором есть различные поля , например target



// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.


// Есть три способа назначения обработчиков событий:

// Атрибут HTML: onclick="...".
// DOM-свойство: elem.onclick = function.
// Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.


