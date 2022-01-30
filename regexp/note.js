// В JavaScript регулярные выражения реализованы отдельным объектом RegExp и интегрированы в методы строк.
// Регулярное выражение (оно же «регэксп», «регулярка» или просто «рег»), состоит из шаблона («паттерн») и необязательных флагов.

// Существует два синтаксиса для создания регулярного выражения.

// «Длинный» синтаксис:
// regexp = new RegExp("шаблон", "флаги");

// …И короткий синтаксис, использующий слеши "/":
// regexp = /шаблон/; // без флагов
// regexp = /шаблон/gmi; // с флагами gmi (будут описаны далее)
//* Слеши /.../ говорят JavaScript о том, что это регулярное выражение. Они играют здесь ту же роль, что и кавычки для обозначения строк.

// Основная разница между этими двумя способами создания заключается в том, что слеши /.../ не допускают никаких вставок переменных (наподобие возможных в строках через ${...}). Они полностью статичны.
// ___________________________________________________________________________________________________________________________________
//* Флаги
// Регулярные выражения могут иметь флаги, которые влияют на поиск.
// В JavaScript их всего шесть:
// i - С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
// g - С этим флагом поиск ищет все совпадения, без него – только первое.
// m - Многострочный режим (рассматривается в главе Многострочный режим якорей ^ $, флаг "m").
// s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
// u - Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
// y -  Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")
// ___________________________________________________________________________________________________________________________________

//* Существуют следующие символьные классы:
// \d – цифры.
// \D – не цифры.
// \s – пробельные символы, табы, новые строки.
// \S – все, кроме \s.
// \w – латиница, цифры, подчёркивание '_'.
// \W – все, кроме \w.
// . – любой символ, если с флагом регулярного выражения s, в противном случае любой символ, кроме перевода строки \n.

// ___________________________________________________________________________________________________________________________________
//*  Флаг u включает поддержку Юникода в регулярных выражениях.
// Конкретно, это означает, что:
// Символы из 4 байт воспринимаются как единое целое, а не как два символа по 2 байта.
// ___________________________________________________________________________________________________________________________________
//? Работает поиск по юникодным свойствам \p{…}.
// Шестнадцатеричная цифра может быть обозначена как \p{Hex_Digit}:
// let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
// для поиска кириллических букв: \p{sc=Cyrillic}, для китайских иероглифов: \p{sc=Han};
// \p{Sc}. - для поиска символов валюты
// С помощью юникодных свойств мы можем искать слова на нужных языках, специальные символы (кавычки, обозначения валюты) и так далее.
// ___________________________________________________________________________________________________________________________________
//* Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.

// let str1 = "Mary had a little lamb";
// alert( /^Mary/.test(str1) ); // true

// let str1 = "it's fleece was white as snow";
// alert( /snow$/.test(str1) ); // true

//? Оба якоря вместе ^...$ часто используются для проверки, совпадает ли строка с шаблоном полностью. Например, чтобы определить, в правильном ли формате пользователь ввёл данные.

// Проверим, что строка является временем в формате 12:34, то есть две цифры, затем двоеточие, затем ещё две цифры.
// На языке регулярных выражений это   \d\d:\d\d:
// let goodInput = "12:34";
// let badInput = "12:345";
// let regexp = /^\d\d:\d\d$/;
// alert( regexp.test(goodInput) ); // true
// alert( regexp.test(badInput) ); // false

//? Якоря ^ и $ – это проверки. У них нулевая ширина.
// ___________________________________________________________________________________________________________________________________
//* Многострочный режим включается флагом m.
// Он влияет только на поведение ^ и $.
// В многострочном режиме они означают не только начало/конец текста, но и начало/конец каждой строки в тексте.
// ___________________________________________________________________________________________________________________________________
//* Граница слова \b – проверка, как ^ и $.

// Когда движок регулярных выражений (программный модуль, реализующий поиск по регулярным выражениям) видит \b, он проверяет, что позиция в строке является границей слова.

// Есть три вида позиций, которые являются границами слова:

// Начало текста, если его первый символ \w.
// Позиция внутри текста, если слева находится \w, а справа – не \w, или наоборот.
// Конец текста, если его последний символ \w.
// Например, регулярное выражение \bJava\b будет найдено в строке Hello, Java!, где Java – отдельное слово, но не будет найдено в строке Hello, JavaScript!.
// ___________________________________________________________________________________________________________________________________
//? Мы можем использовать \b не только со словами, но и с цифрами.
// Например, регулярное выражение \b\d\d\b ищет отдельно стоящие двузначные числа. Другими словами, оно требует, чтобы и до и после \d\d были символы, отличные от \w, такие как пробелы или пунктуация (или начало/конец текста).
// ___________________________________________________________________________________________________________________________________
//* Экранирование, специальные символы
//? перечень этих символов: [ ] \ ^ $ . | ? * + ( ) . И / для короткой формы записи

// Допустим, мы хотим найти буквально точку. Не «любой символ», а именно точку.
//? Чтобы использовать специальный символ как обычный, добавьте к нему обратную косую черту: \.

// При передаче строки в new RegExp нужно удваивать обратную косую черту: \\ для экранирования специальных символов, потому что строковые кавычки «съедят» одну черту.
// Строковые кавычки «съедают» символы обратной косой черты для себя, например:
// \n – становится символом перевода строки,
// \u1234 – становится символом Юникода с указанным номером,
// …А когда нет особого значения: как например для \d или\z, обратная косая черта просто удаляется.

//? Чтобы исправить это, нам нужно удвоить обратную косую черту, потому что строковые кавычки превращают \\ в \:
// let regStr = "\\d\\.\\d";

// ___________________________________________________________________________________________________________________________________
//* Несколько символов или символьных классов в квадратных скобках […] означают «искать любой символ из заданных».

// Для примера, [eao] означает любой из 3-х символов: 'a', 'e' или 'o'.
// Это называется набором.

// Наборы могут использоваться в регулярных выражениях вместе с обычными символами, например:
// // найти [т или х], после которых идёт "оп"
// alert( "Топ хоп".match(/[тх]оп/gi) ); // "топ", "хоп"

//? Диапазоны

// К примеру, [a-z] соответствует символу в диапазоне от a до z, или [0-5] – цифра от 0 до 5.
// В приведённом ниже примере мы ищем "x", за которым следуют две цифры или буквы от A до F:
// alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF - Здесь в [0-9A-F] сразу два диапазона: ищется символ, который либо цифра от 0 до 9, либо буква от A до F.

//? Также мы можем использовать символьные классы внутри […].
// Например, если мы хотим найти «символ слова» \w или дефис -, то набор будет: [\w-].
// Можем использовать и несколько классов вместе, например [\s\d] означает «пробельный символ или цифра».

// Символьные классы – сокращения для наборов символов
// Символьные классы – не более чем сокращение для наборов символов.
// Например:
//? \d – то же самое, что и [0-9],
//? \w – то же самое, что и [a-zA-Z0-9_],
//? \s – то же самое, что и [\t\n\v\f\r ], плюс несколько редких пробельных символов Юникода.


// Так как символьный класс \w является всего лишь сокращением для [a-zA-Z0-9_], он не найдёт китайские иероглифы, кириллические буквы и т.п.
//todo Давайте сделаем более универсальный шаблон, который ищет символы, используемые в словах, для любого языка. Это очень легко с Юникод-свойствами: [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}].

// Расшифруем его. По аналогии с классом \w, мы делаем свой набор, который включает в себя символы со следующими юникодными свойствами:
// Alphabetic (Alpha) – для букв,
// Mark (M) – для акцентов,
// Decimal_Number (Nd) – для цифр,
// Connector_Punctuation (Pc) – для символа подчёркивания '_' и подобных ему,
// Join_Control (Join_C) – два специальных кода 200c и 200d, используемые в лигатурах, например, арабских.

//todo Исключающие диапазоны
// Помимо обычных диапазонов, есть «исключающие» диапазоны, которые выглядят как [^…].

// Они обозначаются символом каретки ^ в начале диапазона и соответствуют любому символу за исключением заданных.
// Например:
// [^aeyo] – любой символ, за исключением 'a', 'e', 'y' или 'o'.
// [^0-9] – любой символ, за исключением цифры, то же, что и \D.
// [^\s] – любой непробельный символ, то же, что и \S.
// Пример ниже ищет любые символы, кроме латинских букв, цифр и пробелов:
// alert( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) ); // @ и .

// Экранирование внутри […]
// Обычно, когда мы хотим найти специальный символ, нам нужно экранировать его, например \.. А если нам нужна обратная косая черта, тогда используем \\, т.п.
// В квадратных скобках большинство специальных символов можно использовать без экранирования:

// Символы . + ( ) не нужно экранировать никогда.
// Тире - не надо экранировать в начале или в конце (где оно не задаёт диапазон).
// Символ каретки ^ нужно экранировать только в начале (где он означает исключение).
// Закрывающую квадратную скобку ], если нужен именно такой символ, экранировать нужно.
// Другими словами, разрешены без экранирования все специальные символы, кроме случаев, когда они означают что-то особое в наборах.

// Точка . внутри квадратных скобок – просто точка. Шаблон [.,] будет искать один из символов: точку или запятую.

// Если в наборе есть суррогатные пары, для корректной работы обязательно нужен флаг u.
// например шаблон [𝒳𝒴]
// ___________________________________________________________________________________________________________________________________
// Регулярные выражения!
// . - любой одиночный символ
// [ ] - любой из них, диапазоны
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов
// \w - буква
// \W - все кроме букв
// \b - граница слова
// \B - не границ

// Квантификация
// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз