// Проблемы прототипов
// Прототипы хорошо работают с функциями и примитивами, но не с объектами({},[])

function Person() {}
Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  friends : ["Shelby", "Court"],
  sayName : function () {
    console.log(this.name);
  }
};
let person1 = new Person();
let person2 = new Person();
person1.friends.push("Van");
console.log(person1.friends); // "Shelby,Court,Van"
console.log(person2.friends); // "Shelby,Court,Van"
console.log(person1.friends === person2.friends); // true

// Если нужно, чтобы массив был
// общим для всех экземпляров, это нормально, однако обычно экземпляры должны
// иметь собственные копии всех свойств.