
//Task 1
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