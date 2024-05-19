// DESCRIPTION:
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


//Пример 2
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
// console.log(memoizedIsPrime(7)); // Четвертый вызов с предыдущими аргументами (возьмет результат из кэша)