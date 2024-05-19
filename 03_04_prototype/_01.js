function Animal() {
}

Animal.prototype.name = "Zebra"
Animal.prototype.legs = "4"
Animal.prototype.continent = "Africa"
Animal.prototype.sayName = function () {
    console.log(this.name)
}

// Animal.prototype {
//     name = "Zebra"
//     legs = "4"
//     continent = "Africa"
//     sayName = function () {
//         console.log(this.name)
//     }
//     }


// console.log(Animal)
// console.log(Animal.__proto__)

    let animal1 = new Animal()
// animal1.sayName()
// //
    let animal2 = new Animal()
animal2.name = "Koala"
// animal2.sayName()
//
//     console.log(animal1.__proto__)//
//     console.log(animal1.__proto__ === Animal.prototype)
// // console.log(animal1.__proto__ === animal2.__proto__)
//
// console.log(animal1.hasOwnProperty("name")); // false
// console.log(animal1.name); // false
// console.log(animal2.hasOwnProperty("name")); // true
// console.log('name' in animal1 );
delete animal2.name;



// console.log("name" in animal1); // true

// console.log(animal1.name); // "Greg" — из экземпляра
// console.log(animal1.hasOwnProperty("name")); // true
// console.log("name" in animal1); // true
// console.log(animal2.name); // "Nicholas" — из прототипа
// console.log(animal2.hasOwnProperty("name")); // false
// console.log("name" in animal2); // true
// delete animal2.name;
// console.log(animal2.name); // "Zebra" — из прототипа
// console.log(animal2.hasOwnProperty("name")); // false
// console.log("name" in animal2); // true

// let cat = new Animal();
// console.log(cat instanceof Object); // true
// console.log(cat instanceof Animal); // true
// console.log(cat.constructor == Animal); // true
// console.log(cat.constructor == Object); //false




