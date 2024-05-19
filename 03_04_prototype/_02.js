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

let friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor == Person); // false
console.log(friend.constructor == Object); // true

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

// let friend = new Person();
// Person.prototype.sayHi = function() {
//     console.log("hi");
// };
// friend.sayHi(); // "hi" — все работает!

// function Person() {}
// let friend = new Person();
// Person.prototype = {
//     constructor: Person,
//     name : "Nicholas",
//     age : 29,
//     job : "Software Engineer",
//     sayName() {
//         console.log(this.name);
//     }
// };
// friend.sayName(); // ошибка