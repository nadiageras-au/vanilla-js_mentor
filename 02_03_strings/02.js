// //Пример:
//
// let greeting = 'Привет, мир!';
// let question = "Как дела?";
// let templateLiteral = Это шаблонная строка.;
// //Объявление строк
// //Используя одинарные кавычки:
// let singleQuotes = 'Привет';
// //Используя двойные кавычки:
// let doubleQuotes = "Привет";
// //Используя шаблонные литералы (обратные кавычки):
// let templateLiterals = Привет;
//
// //Основные операции со строками
//
//
// //Конкатенация (сложение строк):
//
// let hello = "Привет, ";
// let world = "мир!";
// let greeting = hello + world; // "Привет, мир!"

//================= Методы строк ===================
//Получение длины строки:

// let message = "Привет, мир!";
// console.log(message.length); // Выводит 12
//
// //Доступ к символу в строке:
//
// let firstChar = message[0];
// // "П"
// console.log("firstChar", firstChar)
//
// // Доступ к символу в строке:
//
// let indexOfSymb = message.indexOf("П"); // "П"
// console.log("indexOf ", indexOfSymb)
//
// //Популярные методы строк
// //toUpperCase() и toLowerCase() - преобразование регистра:
//
// let lowerCaseString = "привет, мир!".toUpperCase(); // "ПРИВЕТ, МИР!"
// let upperCaseString = "ПРИВЕТ, МИР!".toLowerCase(); // "привет, мир!"
//
// slice(start, end) - //извлечение подстроки:

// let subString = "Привет, мир!".slice(-3); // "Привет"
// console.log(subString)

//replace(searchValue, newValue) - замена подстроки:

// let replacedString = "Привет, мир-мир!".replace("мир", "JavaScript"); // "Привет, JavaScript!"
// console.log(replacedString)

// let replacedString = "Привет, мир-мир!".replaceAll("мир", "JavaScript"); // "Привет, JavaScript!"
// console.log(replacedString)

//trim() - удаление пробелов с начала и конца строки:

// let trimmedString = "  Привет, мир!  ".trim(); // "Привет, мир!"
// console.log(trimmedString)

//split(separator) - разделение строки на массив подстрок:

// let splittedString = "Привет, мир, JavaScript!".split(", "); // ["Привет", "мир", "JavaScript!"]
// let splittedString4 = "Привет, мир, JavaScript!".split(". "); // ["Привет, мир, JavaScript!"]
// let splittedString2 = "Привет, мир, JavaScript!".split(""); // ["П", "р", "и", "в", "е", "т", " ", "м", "и", "р", "JavaScript!"]
// let splittedString3 = "Привет, мир, JavaScript!".split(" "); // ["Привет", "мир", "JavaScript!"]
// let splittedString5 = "Привет, мир, JavaScript!".split("и"); // ["Привет", "мир", "JavaScript!"]

// console.log(', ', splittedString)
// console.log('empty', splittedString2)
// console.log('space', splittedString3)
// console.log('и', splittedString5)








// задачи
//
//Задача 1: Первая буква в верхнем регистре
// Описание: Напишите функцию, которая принимает строку в качестве аргумента и возвращает ту же строку,
// где первая буква каждого слова преобразована в верхний регистр.
// capitalizeWords("привет мир"); // должно вернуть "Привет Мир"

// function capitalizeWords(str) {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }
//
// console.log(capitalizeWords("привет мир")); // Вывод: "Привет Мир"

// //Задача 2: Обратная строка
//Описание: Создайте функцию, которая принимает строку и возвращает ее в обратном порядке.
// reverseString("привет"); // должно вернуть "тевирп"
//
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//
// console.log(reverseString("привет")); // Вывод: "тевирп"
//
// //Задача 3: Подсчет определенного символа
//Описание: Напишите функцию, которая принимает два аргумента: строку и символ для поиска. Функция должна возвращать
// количество раз, которое символ встречается в строке.
// countChar("привет, как дела?", "а"); // должно вернуть 2
// function countChar(str, char) {
//     return str.split(char).length - 1;
// }
//
// console.log(countChar("привет, как дела?", "а")); // Вывод: 2
// let str2 = "привет, как де как ла?"
// console.log(str2.split())