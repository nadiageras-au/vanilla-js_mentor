// easy

// 01. Write a function to remove duplicates from an array in JavaScript.
// (Map/Set)

// function removeDuplicates(array) {
//     return Array.from(new Set(array));
// }



//03.иммутабельность
//Как сохранить неизменность списка "heroes"?
// const heroes = [
//     { name: 'Wolverine', family: 'Marvel', isEvil: false },
//     { name: 'Deadpool', family: 'Marvel', isEvil: false },
//     { name: 'Magneto', family: 'Marvel', isEvil: true },
//     { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
//     { name: 'Batman', family: 'DC Comics', isEvil: false },
//     { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
//     { name: 'Legolas', family: 'Tolkien', isEvil: false },
//     { name: 'Gandalf', family: 'Tolkien', isEvil: false },
//     { name: 'Saruman', family: 'Tolkien', isEvil: true },
// ]
//
// const newHeroes = heroes.map(h => {
//     h.name = h.name.toUpperCase()
//     return h
// })
//
// // const newHeroes = heroes.map(h => {
// //     return {
// //         ...h,
// //         name: h.name.toUpperCase()
// //     }
// // })
// console.log(newHeroes)
// console.log(heroes)


