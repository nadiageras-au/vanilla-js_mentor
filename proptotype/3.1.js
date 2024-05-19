// Понимание иерархии прототипов
// свойство constructor есть только у прототипа

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
// person1.name = "Greg";
// console.log(person1.name); // "Greg" — из экземпляра
// console.log(person2.name); // "Nicholas" — из прототипа

//--------------------------------------------------------------------

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
// person1.name = "Greg";
// console.log(person1.name); // "Greg" — из экземпляра
// console.log(person2.name); // "Nicholas" — из прототипа
// delete person1.name; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// person1.__proto__.name = "Vasy"
// console.log(person1.name); // "Nicholas" — из прототипа