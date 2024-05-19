
// // Null приводится к числу со значением 0 только при сравнении через операторы `≤` и `≥`,
// //     а в остальных случаях остается собой. Undefined при любом сравнении выдает false
// // потому что при приведении к числу возвращает NaN. При этом нестрогое сравнение null и undefined
// // вернет true.

// console.log(null > 0); //false
// console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(undefined >= 0); //true
console.log(undefined <= 0); //true
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(null==undefined)

