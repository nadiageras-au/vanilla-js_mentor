function isHasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}

function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let person = new Person();
console.log(isHasPrototypeProperty(person, "name")); // true
person.name = "Greg";
console.log(isHasPrototypeProperty(person, "name")); // false