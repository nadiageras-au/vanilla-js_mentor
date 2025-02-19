// В цикле for-in возвращаются все свойства экземпляра и прототипа,
// которые доступны через объект и могут быть перечислены.

// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// let keys = Object.keys(Person.prototype);
// console.log(keys); // "name,age,job,sayName"
// let p1 = new Person();
// p1.name = "Rob";
// p1.age = 31;
// let p1keys = Object.keys(p1);
// console.log(p1keys); // "name,age"
//
// // // список всех свойств экземпляра, перечислимых и неперечислимых
// let keys2 = Object.getOwnPropertyNames(Person.prototype);
// console.log(keys2); // "constructor,name,age,job,sayName"