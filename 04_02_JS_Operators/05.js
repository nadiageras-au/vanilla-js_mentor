// Операторы логического присваивания
// тернарный оператор

// Единственным оператором в JavaScript, который принимает три операнда является тернарный оператор. Он принимает условие и два выражения (условие ? выражение1 : выражение2 ), после чего возвращает первое выражение, если условие истинно или второе, если условие ложно.
//
// const condition = 1;
// console.log(condition ? "first" : "second");//first
// //условие истино и вернется первое выражение
// condition = 0
// console.log(condition ? "first" : "second");//second
// //условие ложно и вернется второе выражение

let a = false
console.log(a ? a : "default")
console.log(a ?? "default")