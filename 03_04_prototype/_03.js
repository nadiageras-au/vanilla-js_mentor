function Person() {
}

let person1 = new Person()

Person.prototype.name = "Nick"
//person1.name = 'Mike'


console.log(Object.getPrototypeOf(person1) === Person.prototype)
console.log(person1.__proto__ === Person.prototype)


// const parent = {
//     age: 30
// };
//
// const child = {};
// Object.setPrototypeOf(child, parent);
// console.log(child.age);

//
//
console.log(Object.getPrototypeOf(person1).name)
console.log(person1.__proto__.name)//Nick
console.log(person1.name)//Mike







// // Реализация цепочки прототипов включает следующий шаблон кода:
//     function SuperType() {
//         this.property = true;
//     }
// SuperType.prototype.getSuperValue = function() {
//     return this.property;
// };
// function SubType() {
//     this.subproperty = false;
// }
// // наследование от SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
// let instance = new SubType();
// console.log(instance.getSuperValue()); // true