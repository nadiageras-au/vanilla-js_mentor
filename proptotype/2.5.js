// метод setPrototypeOf(), который записывает новое значение
// в свойство [[Prototype]] экземпляра
// (вероятно, приведет к серьезному снижению производительности при его использовании)

// let biped = {
//   numLegs: 2
// };
// let person = {
//   name: 'Matt'
// };
// // Object.setPrototypeOf(person, biped);
// // person.__proto__ = biped
// console.log(person.name); // Matt
// console.log(person.numLegs); // 2
// console.log(Object.getPrototypeOf(person) === biped); // true

//----------------------------------------------------------------//

// let biped = {
//   numLegs: 2
// };
// let biped2 = {
//   numLegs: 3
// };
// let person = {
//   name: 'Matt'
// };
// Object.setPrototypeOf(person, biped);
// console.log("person.__proto__",person.__proto__)
// Object.setPrototypeOf(person, biped2);
// console.log("person.__proto__",person.__proto__)
// console.log(person.name); // Matt
// console.log(person.numLegs); // 3
// console.log(Object.getPrototypeOf(person) === biped2); // true

//----------------------------------------------------------------//

// Во избежание этих замедлений проще создать новый объект и указать его прототип
// с помощью Object.create():

let biped = {
  numLegs: 2
};
let person = Object.create(biped);
person.name = 'Matt';
console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(person)
console.log(Object.getPrototypeOf(person) === biped); // true