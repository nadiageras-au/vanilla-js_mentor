//  bind, call, apply - методы функций. Были созданы для решения проблемы потери контекста

// метод bind() -  создает новую функцию, которая будет вызываться с указанным контекстом вызова и аргументами. Удобно пользоваться
// для привязки контекста или закрепления параметров


//Task 1
// let obj = {
//     name: 'Nadia',
//     sayHi() {
//         console.log('My name is ', this.name)
//     }
// }
//
// let obj2 = {
//     name: 'Julia',
// }
//
// // obj2.sayHi = obj.sayHi;
// obj2.sayHi = obj.sayHi.bind(obj);
// obj2.sayHi()

//Task2
// let obj = {
//     name: 'Nadia',
//     sayHi(a,b,c) {
//         console.log('My name is ', this.name, a, b, c)
//     }
// }
//
// let obj2 = {
//     name: 'Alisa',
// }
// //
// // let obj3 = {
// //     "name": 'Ku',
// // }
//
// obj2.sayHi = obj.sayHi;
// obj2.sayHi = obj.sayHi.bind(obj, 10, 20, 30);
// obj2.sayHi()

// //Task2
// let obj = {
//     name: 'Nadia',
//     sayHi(a,b,c) {
//         console.log('My name is ', this, a,b,c)
//     }
// }
// //
// let obj2 = {
//     name: 'Alisa',
// }
//
// let obj3 = {
//     "name": 'Ku',
// }
// //
// // // obj2.sayHi = obj.sayHi;
// // obj2.sayHi = obj.sayHi.bind(obj, 100, 200, 300);
// // obj2.sayHi(40, 50, 60)
// // obj2.sayHi()
//
//
// obj.sayHi.bind().bind(null,100).bind('',400)()


