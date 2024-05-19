// Каждая функция создается со свойством prototype —
// Картинка для кода "рис.8.1"
function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName === person2.sayName); // true
// Person.prototype.sayName()

// console.log(person1.__proto__)
// console.log(Person.prototype.constructor)
//
// console.log(Object.getPrototypeOf(person1).__proto__ === Object.prototype)


