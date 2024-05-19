// Альтернативный синтаксис прототипов

// перезаписывание прототипа литералом объекта
function Person() {
}
let friend = new Person();
console.log(friend instanceof Object); // true // Object -> Person
console.log(friend instanceof Person); // true
console.log(friend.constructor === Person); // true
console.log(friend.__proto__.constructor === Person); // true
console.log(friend.__proto__.__proto__.constructor === Object); // false
Person.prototype = {
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName() {
    console.log(this.name);
  }
};


// свойство constructor указывает на совершенно новый
// объект (конструктор Object), а не на саму функцию
console.log("constructor",friend.constructor)
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor === Person); // false
console.log(friend.constructor === Object); // true

//------------------------------------------------------------------
// // восстановление конструктора example 1
// function Person() {
// }
// Person.prototype = {
//   constructor: Person, //восстановление конструктора
//   name : "Nicholas",
//   age : 29,
//   job : "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   }
// };
//
// let friend = new Person();
// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true
// console.log(friend.constructor === Person); // true
// console.log(friend.constructor === Object); // false

//------------------------------------------------------------------
// восстановление конструктора example 2
// Свойство constructor встроенных объектов
// по умолчанию неперечислимо, поэтому если ваш интерпретатор JavaScript совместим с ECMAScript 5, возможно, лучше использовать с той же целью метод Object.
// defineProperty():
// function Person() {}
// Person.prototype = {
//   name : "Nicholas",
//   age : 29,
//   job : "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   }
// };
// // восстановление конструктора
// Object.defineProperty(Person.prototype, "constructor", {
//   enumerable: false,
//   value: Person
// });
//
// let friend = new Person();
// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true
// console.log(friend.constructor === Person); // true
// console.log(friend.constructor === Object); // false