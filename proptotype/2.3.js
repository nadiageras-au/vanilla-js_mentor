// У типа Object добавлен новый метод Object.getPrototypeOf(), который возвращает значение [[Prototype]]
function Person() {}

let person1 = new Person();
Person.prototype.name = "Nicholas";

// console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
// console.log(person1.__proto__ === Person.prototype) // аналогично Object.getPrototypeOf(person1) === Person.prototype

// console.log(Object.getPrototypeOf(person1).name); // "Nicholas"
// console.log(person1.__proto__.name) // аналогично и больше подходит Object.getPrototypeOf(person1).name
// console.log(person1.name) // аналогично Object.getPrototypeOf(person1).name
