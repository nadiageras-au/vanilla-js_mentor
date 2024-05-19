//Что такое мемоизация
// Мемоизация — это метод оптимизации, который ускоряет приложения за счет сохранения результатов дорогостоящих
// вызовов функций и возвращения кешированного результата для одних и тех же входных данных.
//     Идея мемоизации в JavaScript основывается на двух концепциях:
//     • замыканиях
//     • и функциях высшего порядка — функциях, которые возвращают другие функции

// Возврат функций из функций или функции высшего порядка
// Функции, которые работают с другими функциями, либо принимая их в качестве аргументов, либо возвращая их,
// называются функциями высшего порядка (higher-order functions)
//
// Замыкания позволяют нам вызывать внутреннюю функцию вне ее родительской функции, сохраняя при этом доступ
// к лексической области видимости родителя.
//
//     function foo(){
//         var a = 2;
//         function bar() {
//             console.log(a)
//         } return bar;
//     }
//     var baz = foo(); baz();//2

// В последней строчке кода мы выполняем функцию baz за пределами лексической области foo. Казалось бы, в этом месте она
// никак не может получить доступ к переменной a, чтобы вывести ее в консоль. Но ей это удается благодаря замыканию.

// Последовательность Фибоначчи

// Ряд Фибоначчи — это последовательность числе, начинающаяся с нуля или единицы, в которой каждое следующее число
// является суммой двух предыдущих.
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, … // или 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//
// Задача: написать функцию, которая возвращает n-ный член последовательности Фибоначчи
//
// Это типичная задача с рекурсивным решением.

    // function fibonacci(n) {
    //     if (n <= 1) {
    //         return 1
    //     } return fibonacci(n - 1) + fibonacci(n - 2);
    // }

// Короткий и аккуратный алгоритм, однако, есть проблема. Мы делаем очень много повторяющейся работы,
// постоянно вычисляем одни и те же значения. Например, при вызове функции для вычисления пятого члена
// последовательности, мы целых три раза вычислим ее второй член.

    // function fibonacci(n,memo) {
    //     memo = memo || {}
    //     if (memo[n]) {
    //         return memo[n]
    //     } if (n <= 1) {
    //         return 1
    //     } return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    // }

// По этой ссылке https://jsperf.com/scotch-memoization-test вы можете перейти на тест производительности нашей
// функции. Запустите его

//     Функциональный подход
//
// Создадим функцию высшего порядка memoizer, которая позволит нам использовать мемоизацию для любой другой функции, не изменяя ее код.

    //     function memoizer(fun){
    //     let cache = {}
    //         return function (n){
    //         if (cache[n] != undefined ) {
    //             return cache[n]
    //         } else {
    //             let result = fun(n)
    //             cache[n] = result
    //             return result
    //         }
    //     }
    // }

    // const fibonacciMemoFunction = memoizer(fibonacciRecursive)


// Example
// a simple function to add something
// const add = (n) => (n + 10);
// add(9);
// add(9);
//
// // a simple memoized function to add something
// const memoizedAdd = () => {
//     let cache = {};
//
//     return (n) => {
//         if (n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         }
//         else {
//             console.log('Calculating result');
//             let result = n + 10;
//             cache[n] = result;
//             return result;
//         }
//     }
// }
// returned function from memoizedAdd
// const newAdd = memoizedAdd();
// const newAdd1 = memoizedAdd();
//
// console.log(newAdd(9)); // calculated
// console.log(newAdd(9)); // cache
// console.log(newAdd1(9)); // calculated

//Example 2
// a simple pure function to get a value adding 10
// const add = (n) => (n + 10);
// console.log('Simple call', add(3));
// // a simple memoize function that takes in a function
// // and returns a memoized function
// const memoize = (fn) => {
//     let cache = {};
//     return (...args) => {
//         let n = args[0];  // just taking one argument here
//         if (n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         }
//         else {
//             console.log('Calculating result');
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }
// // creating a memoized function for the 'add' pure function
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(3));  // calculated
// console.log(memoizedAdd(3));  // cached
// console.log(memoizedAdd(4));  // calculated
// console.log(memoizedAdd(4));  // cached

//Example 3
//     Есть чистая функция, но медленная.
//
//     function double(x) {
//         for(let i = 0; i < 1e9; i++);
//         return x * 2;
//     }
//     double(10) === 20 // but it takes ≈1s


// Надо обернуть ее в мемо декоратор.
// Функция принимает в себя в качестве аргумента функцию и возвращает новую функцию, которая делает тоже самое, но
// не вычисляет результат для одного и того же аргумента дважды

function memo(fn) {
    const cache = new Map(); //key1(arg1): res;

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("cache");
            return cache.get(key);
        } else {
            console.log("calc");
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

function add(n, m) {return n + m};
const memoAdd = memo(add)
console.log(memoAdd(20, 30))
console.log(memoAdd(20, 30))


// Example usage with the double function
//     function double(x) {
//         for (let i = 0; i < 1e9; i++);
//         return x * 2;
//     }
//
//     const memoizedDouble = memo(double);
//
//     console.log(memoizedDouble(10)); // Computes and caches result
//     console.log(memoizedDouble(10)); // Uses cached result, doesn't recompute
//     console.log(memoizedDouble(5)); // Computes and caches result for different argument
//     console.log(memoizedDouble(5)); // Uses cached result for different argument


//Example 4
//Проверка простого числа
//
// function isPrime(n) {
//     console.log('Проверка числа на простоту...');
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }



// function memo(fn) {
//     let cache = {};
//
//     return function(...args) {
//         let key = args.toString();
//         if (key in cache) {
//             console.log('Используется кэш для аргументов:', args);
//             return cache[key];
//         } else {
//             let result = fn(...args);
//             console.log('Выполнение операции для аргументов:', args);
//             cache[key] = result;
//             return result;
//         }
//     };
// }
//
// const memoizedIsPrime = memo(isPrime);
//
// console.log(memoizedIsPrime(7)); // Первый вызов
// console.log(memoizedIsPrime(7)); // Второй вызов с теми же аргументами (возьмет результат из кэша)
// console.log(memoizedIsPrime(10)); // Третий вызов с другими аргументами
/