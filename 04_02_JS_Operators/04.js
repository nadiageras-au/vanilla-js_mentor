// Операторы доступа к свойствам объектов (.) и optional chaining опциональной цепочки(.?)
// позволяет обратиться к свойству объекта только при его наличии не ломая исполнение кода.
//     При этом его можно использовать и для обращения через квадратные скобки или вызове функции,
//     являющейся свойством объекта.

//Example
// const user1 = { name: "John" };
// const usersDogName = user1.pets?.dog.name;
// console.log(usersDogName); //TypeError: Cannot read properties of undefined (reading 'dog')
// // const usersCatName = user1.pets?.cat.name;
// // console.log(usersCatName); //undefined
// console.log('hello')

//обращение через квадратные скобки
// const user2 = null;
// // console.log(user2[name]); //ReferenceError: name is not defined
// console.log(user2?.[name]); //undefined
// console.log('hello')

// обращение к функции
// const someFuncs = {
//     foo() {
//         console.log("foo");
//     },
// };
// // someFuncs.bar(); //TypeError: someFuncs.bar is not a function
// someFuncs.bar?.(); //гтчего не произойдет
