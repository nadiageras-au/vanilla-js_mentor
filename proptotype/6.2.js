function Person() {}
let friend = new Person();
Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName() {
    console.log(this.name);
  }
};
friend.sayName(); // ошибка

// --------------------------------------------------------
// Решение №1
// function Person() {}
// Person.prototype = {
//   constructor: Person,
//   name : "Nicholas",
//   age : 29,
//   job : "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   }
// };
// let friend = new Person();
// friend.sayName(); // "Nicholas"

// --------------------------------------------------------
// Решение №2
// function Person() {}
// let friend = new Person();
// Person.prototype.obgTest = {
//   name : "Nicholas",
//   age : 29,
//   job : "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   }
// };
// friend.obgTest.sayName(); // "Nicholas"

// Перезапись прототипа у конструктора приводит к тому, что новые экземпляры
// ссылаются на новый прототип, а уже существующие — на старый.
