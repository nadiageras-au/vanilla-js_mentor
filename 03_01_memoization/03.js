// // const sleep = (n) => new Promise((resolve) => {setTimeout(resolve, n)});
// // let count = 0;
// //
// // const getData = async () => {
// //     await sleep(5000);
// //     return Promise.resolve(++count)
// // }
// //
// // const memoize = (fn, n) => {
// //      let cache = new Map();
// //
// // }
// //
// // const getJsonMemoize = memoize(getData,1000)
// //
// // (async function(){
// //     await sleep(3000);
// //     console.log(await getJsonMemoize()); //1
// //     console.log(await getJsonMemoize()); //1
// //     await sleep(3000);
// //     console.log(await getJsonMemoize()); //2
// //     console.log(await getJsonMemoize()); //2
// // })();
//
// // Напишите функцию memoize чтобы она соответсвовала поведению выше
//
// const sleep = (n) => {
//     debugger;
//     new Promise((resolve) => {
//         setTimeout(resolve, n)
//     })
// };
// let count = 0;
//
// const getData = async () => {
//     debugger;
//     await sleep(5000);
//     return Promise.resolve(++count)
// }
//
// // const memoize = (fn, n) => {
// //     let cache = new Map();
// //
// // }
// // const getJsonMemoize = memoize(getData,1000)
//
// (async function(){
//     debugger;
//     await sleep(3000);
//     console.log('first 1', await getData()); //1
//     console.log('second 1', await getData()); //1
//     await sleep(3000);
//     console.log('first 2', await getData()); //2
//     console.log('second 2', await getData()); //2
// })();


// var createCounter = function(n) {
//     let  call = new Map();
//
//     return function() {
//         if (call.has(n)){
//             let result = call.get(n) + 1;
//             call.set(n, result);
//             return result
//         } else {
//             let result = n;
//             call.set(n, result)
//             return result
//         }
//
//     };
// };

var createCounter = function (n) {
    // let  call = new Map();

    return function () {
       return n++
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
