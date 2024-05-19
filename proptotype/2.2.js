function Person() {}

let person1 = new Person();
let person2 = new Person();

console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype === person1.__proto__) // аналогично Person.prototype.isPrototypeOf(person1)

console.log(Person.prototype.isPrototypeOf(person2)); // true
// console.log(Person.prototype === person2.__proto__) // аналогично Person.prototype.isPrototypeOf(person1)

