//Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.


// prototype chain
// каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства.
// Oбъект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется
// цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

//prototype - есть только у функций и у классов, это объект ссылается на сво-во [[Prototype]]
//__proto__ - есть у всех объектов, это ссылка на prototype

// Разница между `__proto__` и `prototype`
// `__proto__` — это свойство экземпляра объекта,
// тогда как `prototype` является свойством функции-конструктора.

// Когда с помощью конструктора создается новый экземпляр типа,
//     в экземпляре определяется внутренний указатель на прототип конструктора.
//     В ECMA-262 этот указатель называется [[Prototype]]. Стандартного способа доступа к нему из сценариев нет,
//     но в Firefox, Safari и Chrome у каждого объекта есть
// свойство __proto__, которое в других браузерах полностью скрыто от JS-сценариев.//



// const person = {
//     firstName: 'Nick',
//     lastName: 'Smith',
//     age: 35,
//     hobbies: ['swimming', 'hiking', 'jogging']
// }
//
// console.log(person);
// console.log(person.toString());

// Object Prototype {
//     constructor = (function)
//     hasOwnProperty = (function)
//     isPrototypeOf =  (function)
//     propertyIsEnumerable = (function)
//     toLocaleString = (function)
//     toString = (function)
//     valueOf = (function)
// }

let num = new Number(7);
let num1 = 7;
console.log(num)
console.log(num1)

// let num = 7;
console.log(num1.valueOf())
console.log(num1.toString())








