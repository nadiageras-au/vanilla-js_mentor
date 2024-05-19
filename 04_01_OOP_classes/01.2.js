
// Какими способами мы можем создать объект?
// {}, new Object, Object.create(), функции-конструктор, классы
//Что такое функция конструктор?
// - используются для создания объектов спец-их типов, имя с большой буквы, инструкция return отсутствует, this.
// function Person(name){
//     this.name = name
//     this.sayHello = () => {
//         console.log(this.name + " Hello")
//     }
//     // this.sayName = function() {
//     //     console.log(this.name)
//     // }
// }
//
// Person.prototype.sayName = function(){
//     console.log(this.name)
// }
//
// const person1 = new Person("Olga");
// console.log(person1)
// person1.sayName();
// person1.sayHello()

//
function User(role){
    this.role = role
}
User.prototype.sayRole = function(){
    console.log(this.role)
}
const admin1 = new User('admin');

admin1.sayRole()
console.log("admin1.__proto__ === User.prototype ",admin1.__proto__ === User.prototype) //true
console.log("admin1.__proto__ === Object.prototype", admin1.__proto__ === Object.prototype) //false
console.log("admin1.__proto__.__proto__ === Object.prototype", admin1.__proto__.__proto__ === Object.prototype)//true
console.log("User.__proto__=== Function.prototype", User.__proto__=== Function.prototype)//true
console.log("User.__proto__.__proto__=== Function.prototype", User.__proto__.__proto__=== Function.prototype)//false
console.log("User.__proto__.__proto__=== Object.prototype", User.__proto__.__proto__=== Object.prototype)//true


