// Метод hasOwnProperty(), унаследованный от типа Object,
//   позволяет выяснить, принадлежит ли свойство экземпляру. (рис. 3.2)

// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// let person1 = new Person();
// let person2 = new Person();
// console.log(person1.hasOwnProperty("name")); // false
// person1.name = "Greg";
// console.log(person1.name); // "Greg" — из экземпляра
// console.log(person1.hasOwnProperty("name")); // true
// console.log(person2.name); // "Nicholas" — из прототипа
// console.log(person2.hasOwnProperty("name")); // false
// delete person1.name;
// console.log(person1.name); // "Nicholas" — из прототипа
// console.log(person1.hasOwnProperty("name")); // false