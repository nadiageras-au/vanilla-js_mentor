//Arrow function
//Task1
// let obj = {
//     name: 'Nadia'
// }
//
// const arrow = () => {
//     console.log('this in arrow', this)
// }
//
// arrow();
// obj.a=arrow;
// obj.a()

//Task2
//
// let obj2 = {
//     name: 'Alisa',
//     a: () => {
//         console.log('this in arrow', this.name)
//     }
// };
//
// obj2.a();

// //Task3
// let obj = {
//     name: 'Nadia'
// }
//
// let obj2 = {
//     name: 'Alisa',
//     a() {
//         return () => {
//             console.log('this in arrow', this)
//         }
//     }
// };
//
// obj.a = obj2.a();
// obj.a()

// //Task3
// let obj = {
//     name: 'Nadia'
// }
//
// let obj2 = {
//     name: 'Alisa',
//     a: () => {
//         return () => {
//             console.log('this in arrow', this)
//         }
//     }
// };
//
// obj.a = obj2.a();
// obj.a()

// // //Task4
let obj = {
    name: 'Nadia'
}

let obj2 = {
    name: 'Alisa',
    a: () => {
        return function () {
            console.log('this in arrow', this)
        }
    }
};

obj.a = obj2.a();
obj.a()


