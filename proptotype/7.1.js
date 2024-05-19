// Прототипы встроенных объектов

// Паттерн Прототип может служить для реализации всех встроенных ссылочных типов.
console.log(typeof Array.prototype.sort); // "function"
console.log(typeof String.prototype.substring); // "function"

// следующий код добавляет метод startsWith() к оболочке примитивного
// типа String:
String.prototype.startsWith = function (text) {
  return this.indexOf(text) === 0; // ищет совпадение с началом строки
};
let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true
// лучше создать пользовательский класс, который
// наследуется от встроенного типа (class StartsWith extends String).