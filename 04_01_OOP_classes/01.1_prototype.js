//Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.

// каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства.
// Oбъект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется
// цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

// prototype - есть только у функций и у классов, это объект ссылается на сво-во [[Prototype]]
//__proto__ - есть у всех объектов, это ссылка на prototype

// Разница между `__proto__` и `prototype`
// `__proto__` — это свойство экземпляра объекта,
// тогда как `prototype` является свойством функции-конструктора.

// function Animal(name, age) {
//     this.name = name
//     this.age = age
// }
//
// Animal.prototype.sayName = function(){
//     console.log(this.name)
// }
//
// const cat = new Animal('cat', 3)
// console.log(cat)
// cat.sayName()

function Animal() {
}
Animal.prototype.name = "Zebra"
Animal.prototype.legs = "4"
Animal.prototype.continent = "Africa"
Animal.prototype.sayName = function () {
    console.log(this.name)
}
//
// let animal2 = new Animal();
// console.log(animal2 instanceof Object); // true
// console.log(animal2 instanceof Animal); // true
// console.log(animal2.constructor == Animal); // true
// console.log(animal2.constructor == Object); // false


//Альтернативный синтаксис прототипов

function Person() {
}
Person.prototype = {
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName() {
        console.log(this.name);
    }
}
// let friend = new Person();
// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true
// console.log(friend.constructor == Person); // false
// console.log(friend.constructor == Object); // true

// function Person() {
// }
// Person.prototype = {
//     constructor: Person,
//     name : "Nicholas",
//     age : 29,
//     job : "Software Engineer",
//     sayName() {
//         console.log(this.name);
//     }
// };

// Все
// Object Prototype {
//     constructor = (function)
//     hasOwnProperty = (function)
//     isPrototypeOf =  (function)
//     propertyIsEnumerable = (function)
//     toLocaleString = (function)
//     toString = (function)
//     valueOf = (function)
// }

// let num = new Number(7);
// let num1 = 7;
// console.log(num)
// console.log(num1)
//
// // let num = 7;
// console.log(num1.valueOf())
// console.log(num1.toString())
