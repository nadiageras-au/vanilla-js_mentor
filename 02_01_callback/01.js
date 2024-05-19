//
// const btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>foo(log))
//
// function foo(callback){
//     // setTimeout(()=>console.log("before callback"),0)
//     callback()
//     // console.log("after callback")
// }
// function log(){
//     console.log("Hi Samurai!")
// }
//
// foo(log);
//
// //_________________________________
// const greeting = 'Hi Samurai!'
//
// function sayGreeting(phrase) {
//     console.log(phrase);
// }
//
// setTimeout(()=>sayGreeting(greeting), 1000);
//
//




//________________________________
//const arrNumbers = [1,2,3,4]
// function changeArr(arr,callback) {
//     const changedArr = []
//     for (let item of arr) {
//         changedArr.push(callback(item))
//     }
//     return changedArr;
// }

const cube = (num) => {
    return num * num * num
}
const double = (num) => {
    return num * 2
}

// console.log(changeArr(arrNumbers,square))
// console.log(changeArr(arrNumbers,cube))
// console.log(changeArr(arrNumbers,double))
//_____________________________________________
//
const numbers = [1, 2, 3, 4, 5];

// const square = (num) => {
//     console.log(num * num)
// }
// const squareNumber = (num) => {
//     console.log(`Квадрат числа ${num}: ${num * num}`);
// };
//
// // console.log(square(2))
// numbers.forEach(squareNumber);
// // console.log(numbers)
// numbers.forEach(square)
// console.log(numbers)

//_____________________________________________
//
console.log('arr ',numbers)
console.log('map ', (numbers.map((el) => el*2)))
console.log('arr ',numbers)




