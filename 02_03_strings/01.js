//========================= "String" data type =================================

let name = "Alice"
let place = 'Wonderland'
let petName = `Cheshire Cat` // back-tics - расширенные возможности


// console.log('name - ', name)
// console.log('place - ', place)
// console.log('petName - ', petName)

//________________________Конкатинация(объединение) строк
// let bookName = name + ' in ' + place;
// let bookName2 = "Alice" + ' in ' + 'Wonderland';
// let union = `${name} and ${petName}`
// let union2 = name + petName;


// console.log('union - ', union)
// console.log('union2 - ', union2)
// console.log('book name - ', bookName)
// console.log('book name 2 - ', bookName2)

// пример с функцией
// function total(a, b){
//     return a + b
// }
//
// const totalStr = `Сумма: ${total(2,3)}`
// console.log(totalStr)
//
// многострочная реализация
// let multipleStrings = `У меня зазвонил телефон.
//     — Кто говорит?
//     — Слон.
//     — Откуда?
//     — От верблюда.
//     — Что вам надо?
//     — Шоколада.`
//
// let multipleStrings2 = "У меня зазвонил телефон.\n— Кто говорит?\n— Слон.\n— Откуда?\n— От верблюда.\n— Что вам надо?\n— Шоколада."
// /
//  console.log(multipleStrings)
 // console.log(multipleStrings2)


//________________________Использование разных кавычек, экранирование "\"
// const sglDbl = 'Я не сказала "да", милорд…';
// const dblSgl = "Вы не сказали 'нет'… (королева, Бэкингем)";
// console.log(sglDbl);
// console.log(dblSgl);
// //
// const phrase1 = 'Пол Атрейдес: \'Я должен сделать это. Это моя судьба.\'';
// const phrase2 = "Леди Джессика: \"Твоя судьба - это то, что ты создаешь сам.\"";
// console.log('phrase1 ', phrase1)
// console.log('phrase2 ', phrase2)


// -------- примитив или объект--------
// console.log('typeof - ',typeof name)
// // создаётся специальный «объект-обёртка», который предоставляет нужную функциональность, а после удаляется.
//
// let str = "Привет";
// alert( str.toUpperCase() ); // ПРИВЕТ
// 1. Строка str – примитив. В момент обращения к его свойству, создаётся специальный объект, который знает значение строки
// и имеет такие полезные методы, как toUpperCase().
// 2. Этот метод запускается и возвращает новую строку (показывается в alert).
// 3. Специальный объект удаляется, оставляя только примитив str.

//================= Задача  ===================
// "use strict"
// let str = "Привет Привет Привет Привет Привет";
// // let obj = {};
//
// str.test = 5;
//
// console.log(str.test);// что выведется


//================= Задача  ===================

// В современных веб-приложениях большинство данных вводит сам пользователь в текстовые поля. И часто пользователи могут
// напечатать строку неправильного формата. Веб-разработчики должны брать это в учет и поэтому сейчас мы с вами поработаем
// с такими случаями.
//
//
//
//  Мы будем использовать функцию prompt. До этого мы уже работали с ней. Prompt показывает модальное окно с сообщением
// и текстовым полем. Данные, введенные пользователем в текстовое поле, мы можем сохранять в переменную.
//
//
//
//     Пример:
//
// const userAnswer = prompt(‘Введите ваш ответ’);
//
// Сейчас ваша задача состоит в том, чтобы с помощью prompt запросить у пользователя его имя. Передайте в prompt строку
// “Как вас зовут?” и введенный пользователем результат сохраните в переменную userName. Какое бы значение пользователь
// не ввел, вам требуется отформатировать строку userName по следующим условиям:
//
//     Все буквы должны быть строчными
// В начале и в конце строки не должно быть лишних пробелов
// После выведите в модальное окно с помощью alert строку “Вас зовут userName” (замените userName на отформатированный
// текст, введенный пользователем).


//let userName = prompt("Как вас зовут?").trim().toLowerCase();




// let userName = prompt("Как вас зовут?").toLowerCase().trim();//строчные буквы без пробелов
//
// alert("Вас зовут " + userName);


//================= Задача  ===================
// Вам необходимо реализовать программу, которая будет запрашивать у пользователя 2 значения через prompt:
//
//     Любой текст. В prompt передавайте сообщение “Введите текст”. Сохраните это значение в переменную userText.
//     Слово, которое нужно найти в тексте userText. В prompt передавайте сообщение “Введите слово из текста”.
//     Сохраните значение, которое напишет пользователь, в переменную wordFromText.
//     Также учтите, что в строках не должно быть лишних пробелов в начале и в конце (используйте trim).
//
//

let  userText = "Уронила в речку мячик";//речку мячик
let  wordFromText = "речку";

let indexOfWord = userText.indexOf(wordFromText)
// console.log(userText.indexOf(wordFromText))
console.log(userText.slice(indexOfWord).slice(0,wordFromText.length))

//Таня громко плачет //громко === 5

//
// Вам требуется найти индекс слова wordFromText в строке userText и сохранить этот индекс в переменную
// indexOfWord. После обрежьте строку userText начиная с нулевого индекса и заканчивая индексом, хранящимся
// в переменной indexOfWord.
// С помощью alert отобразите сообщение “Результат: string”, где string - итоговая обрезанная строка.
// Решение







// let userText = prompt("Введите текст").trim();
// let wordFromText = prompt("Введите слово из текста").trim();
// let indexOfWord = userText.indexOf(wordFromText);
//
// alert("Результат: " + userText.slice([0],indexOfWord));

//================= Задача  ===================
// Вам даны строка str и индексы целочисленного массива одинаковой длины.
// Строка s будет перетасована так, что символ в i-й
// позиции переместится на индексы[i] в перетасованной строке.
//     Верните перетасованную строку.

// Example 1:
const str = "codeleet"
const arrPos = [4,5,6,7,0,1,2,3]
//     Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
//     Example 2:
//
//  str2 = "abc", arrPos2 = [0,1,2]
// // Output: "abc"
// // Explanation: After shuffling, each character remains in its position.
//

let result = '';
for (let i = 0; i < arrPos.length; i++) {

    console.log(arrPos[i])
    result += str[arrPos[i]];
}
console.log(result)







// // Решение
// function restoreString(string, indices) {
//     debugger;
//   let result = '';
//   for (let i = 0; i < indices.length; i++) {
//     result += string[indices[i]];
//   }
//   return result;
// }

// console.log(restoreString(str,arrPos))
// console.log(restoreString(str2,arrPos2))
