// 'use strict'
// function foo(){
//     console.log(this)
// }
// foo()
// window.foo()

//
// const obj = {
//     name: 'Мой объект',
//     sayName: function() {
//         console.log(this.name);
//     }
// };
//
// const sayName = obj.sayName;
// sayName();


function User(name){
    this.name = name
}

let foo = new User("Nadia");
console.log(foo.name);
