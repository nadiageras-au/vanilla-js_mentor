/**
 * Функции конструктора могут существовать как функциональные выражения
 * или объявления функции, так что оба примера подходят:
 * function Person {}
 * let Person = function() {}
 */
function Person() {}
/**
 * Учитывая объявление, функция конструктора
 * уже имеет связанный объект прототипа:
 */
console.log(typeof Person.prototype);
console.log(Person.prototype);
// {
// constructor: f Person(),
// __proto__: Object
// }

/**
 * Как было сказано ранее, у функции конструктора есть
 * ссылка 'prototype' на объект прототипа, и
 * у объекта прототипа есть ссылка 'constructor' на
 * функцию конструктора. Эти ссылки цикличны:
 */
console.log(Person.prototype.constructor === Person); // true
/**
 * Любая стандартная цепочка прототипов завершится на прототипе Object.
 * Прототип прототипа Object — null.
 */
console.log("1",Person.prototype.__proto__ === Object.prototype); // true
console.log("2",Person.prototype.__proto__.constructor === Object); // true
console.log("3",Person.prototype.__proto__.__proto__ === null); // true
console.log("4",Person.prototype.__proto__);
// {
// constructor: f Object(),
// toString: ...
// hasOwnProperty: ...
// isPrototypeOf: ...
// ...
// }
let person1 = new Person();
let person2 = new Person();
/**
 * Конструктор, объект прототипа и экземпляр —
 * три совершенно разных объекта:
 */
console.log(person1 !== Person); // true
console.log(person1 !== Person.prototype); // true
/**
 * Экземпляр связан с прототипом через __proto__, который
 * является буквальным проявлением скрытого свойства [[Prototype]].
 *
 * Конструктор связан с прототипом через свойство constructor.
 *
 * Экземпляр не имеет прямой ссылки на конструктор, только через прототип.
 */
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.__proto__.constructor === Person); // true
/**
 * Два экземпляра одной функции конструктора имеют один и тот же
 * объект прототипа:
 */
console.log(person1.__proto__ === person2.__proto__); // true
/**
 * instanceof проверит цепочку прототипов экземпляра на наличие
 * свойства prototype функции конструктора:
 */
console.log(person1 instanceof Person); // true
// console.log("test",person1.__proto__.constructor === Person) //то же самое, что: person1 instanceof Person

console.log(person1 instanceof Object); // true
// console.log(person1.__proto__.__proto__.constructor === Object) //то же самое, что: person1 instanceof Object

console.log(Person.prototype instanceof Object); // true
// console.log("test",Person.prototype.__proto__.constructor === Object) //то же самое, что: person1 instanceof Object

