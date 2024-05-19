let arr = [ 'ёлка','абрикос', 'Ёж', 'абрикос','яблоко' ]
// // Sort the array
// arr.sort((a, b) => a - b);


console.log(arr.sort((a,b) => {
    return a - b
}))

console.log([ 'pear','абрикос', 'Ёж', 'ёлка', 'яблоко' ].sort((a,b) => {
    return a.localeCompare(b, "en")
}))

let set1 = new Set(arr)

console.log(set1)

// Логические операторы
// && - запинается на лжи
// || - запинается на правде
console.log( 10 && 2)
console.log( 10 || 2)


// console.log(!!(!a || !b && !c))
// console.log(!!(a || !b && !c))
// console.log(!!(a || !b || c))
// console.log((!a && !c && !b))
// console.log(!(a || !b && !c))

// A higher order component or HOC is similar to a higher order function in javascript.
//     Higher order functions are functions that take other functions as arguments OR return
// other functions. React HOCs take a component as a prop, and manipulate it to some end without
// actually changing the component itself. You can think of this like wrapper components.