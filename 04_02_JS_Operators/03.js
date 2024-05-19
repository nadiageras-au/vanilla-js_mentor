
// Логические операторы
// &&, ||, ?? в Javascript интересны тем,
// что они выбирают и возвращают один из своих операндов, а не просто приводят к true или false

//! логическое "НЕ", !! - приведение значения к логическому типу (boolean)

// && - запинается на лжи
// || - запинается на правде
// console.log( 10 && 2)
// console.log( null && 2)
// console.log( 2 && null)
//
// console.log( 10 || 2)
// console.log( null || 2)
// console.log( 10 || null)
//
// let a = 1
// let b = 'b'
// let c = false

// console.log(!!(!a || b && !c))// !! (false || true && true) -> false
// console.log((0 || 1 && 2))// !! (false || true && true) -> false
// console.log(!!(a || !b && !c))
// console.log((a || !b || c))// true || false || false
// console.log((a && b && !c))//
 // console.log(!(a || !b && !c))// !(1 || false && true)

// “??” оператор нулевого слияния - возвращает первое определенное (не равное null или undefined)
// значение или , если такого нет, возвращает последний операнд. Часто используется для задания
// значения по умолчанию.


// var a = 42;
// var b = "foo";
// var c = [1,2,3];
// a && b || c; //
// a || b && c; //

// Логическое ИЛИ (||)
// Оператор логического ИЛИ (||) возвращает первое истинное значение (truthy value)
// из своих операндов. Если все операнды являются ложными (falsy values), он вернет последний операнд.
// console.log(false || "default"); // "default"
// console.log("" || "default"); // "default"
// console.log(0 || "default"); // "default"
// console.log(null || "default"); // "default"
// console.log(undefined || "default"); // "default"
// console.log(NaN || "default"); // "default"
// //
// // Если первый операнд truthy, он будет возвращен
// console.log("value" || "default"); // "value"
// console.log(42 || "default"); // 42
// console.log(true || "default"); // true



// Оператор объединения с null (??)
// Оператор объединения с null (??) возвращает первый операнд, который не является null или undefined.
// Если оба операнда не равны null или undefined, он вернет второй операнд.

// Основные различия
// Проверка truthy/falsy vs. null/undefined:
//
// || проверяет, является ли значение truthy или falsy.
// ?? проверяет, является ли значение null или undefined.
//     Использование:

// || часто используется для присвоения значения по умолчанию в случае, если выражение является ложным.
// ?? используется для присвоения значения по умолчанию в случае, если выражение равно null или undefined.

// Использование || для присвоения значения по умолчанию
// let value1 = "" || "default"; // "default" потому что "" является falsy
// let value2 = 0 || "default"; // "default" потому что 0 является falsy
//

console.log("??: ", null ?? 'default')
console.log("??:", '' ?? 'default')
console.log("??:", 0 ?? 'default')
console.log("||: ", null || 'default')
console.log("||:", "" || 'default')
console.log("||:", 0 || 'default')

//
// // Использование ?? для присвоения значения по умолчанию
// let value3 = "" ?? "default"; // "" потому что "" не равен null или undefined
// let value4 = 0 ?? "default"; // 0 потому что 0 не равен null или undefined
//
// console.log(value3); // ""
// console.log(value4); // 0
