// MAP - коллекция для хранения данных любого типа в виде пар [ключ, значение],
// то есть каждое значение сохраняется по уникальному ключу, который потом используется для доступа к этому значению.
// Причём в качестве ключей тоже принимаются значения любого типа.
// Map vs Object

// Основные методы для работы с коллекцией Map:

// set(ключ, значение) — устанавливает значение;
// get(ключ) — возвращает значение;
// has(ключ) — проверяет наличие переданного ключа;
// values() — возвращает итератор всех значений коллекции;
// keys() — возвращает итератор всех ключей коллекции;
// entries() — возвращает итератор пар [ключ, значение];
// delete(ключ) — удаляет конкретное значение;
// clear() — полностью очищает коллекцию;
// forEach(колбэк) — перебирает ключи и значения коллекции.
// Содержит свойство size для получения количества значений в коллекции.

// // Коллекция Map создается при помощи конструктора.
// const map = new Map();
// console.log(map.size);

// // Также мы можем передать начальные значения в виде массива массивов.
// const map1 = new Map([
//     ['js', 'JavaScript'], // Массив должен состоять и пары [ключ, значение];
//     ['css', 'Cascading Style Sheets'],
// ]);
// console.log(map1);
// console.log(map1.size);

// // Для сохранения значения в коллекции необходимо использовать метод set(ключ, значение).
// const map2 = new Map();
// map2.set('js', 'javascript');
// console.log('map2', map2.size);
// map2.set('js', 'javascript'); // Повторяющееся значение не добавится.

// // Для получения значения необходимо использовать метод get(ключ).
// console.log(map2.get('js'));

// // Если в коллекции нет значения переданного ключа, то вернется undefined.
// console.log(map2.get('html'));

// // Для того чтобы узнать, есть ли в коллекции искомое значение, необходимо использовать метод has(ключ).
// console.log(map2.has('js'));
// console.log(map2.has('html'));

// // Для удаления значения используется метод delete(ключ).
// // map2.set('ts', 'typescript');
// // console.log(map2.size);
// // map2.delete('js', 'javascript');
// // console.log(map2.size);

// // // Для полной очистки коллекции используется метод clear().

// // map2.clear();
// // console.log(map2);

// // Map имеет встроенный итератор для обхода массива.
// const map3 = new Map([
//     ['t1', 'task1'],
//     ['t2', 'task2'],
//     ['t3', 'task3'],
// ]);

// console.log(map3.size);

// for (let [key, value] of map3) {
//     console.log(`${key} - ${value}`);
// }

// map3.forEach((value, key) => {
//     console.log(`${key} - ${value}`);
// });
// // При обходе значений всегда выводит их в том порядке, в котором они были добавлены.

// // Отличия от объектов
// // Ключи в обычном объекте могут быть только строками или символами.
// const obj = {
//     1: 'String',
//     2: 'Number',
//     true: 'Bool',
// };

// console.log(Object.keys(obj)); //[ '1', '2', 'true' ]

// // Map может использовать в качестве ключа любое значение: функцию, примитивные значения и даже null, undefined и NaN.
// // Для сравнения ключей используется алгоритм SameValueZero.

// const func = (name) => `Hello, ${name}`;
// const obj1 = { foo: 'bar' };

// const map4 = new Map();
// map4.set(func, 'func value');
// map4.set(obj1, 'object value');
// map4.set(undefined, 'undefined value');
// map4.set(NaN, 'NaN value');
// map4.set(null, 'null value');

// console.log(map4.get(func)); // func value

// console.log(map4.get(obj1)); // object value

// console.log(map4.get(undefined)); // undefined value

// console.log(map4.get(NaN)); // NaN value

// console.log(map4.get(null)); // null value

// // При использовании алгоритма SameValueZero приведение типов не происходит, поэтому число и строка считаются разными значениями.
// const map5 = new Map();

// map5.set(1, 'numeric 1');
// map5.set('1', 'string 1');

// console.log(map5.size); // 2

// console.log(map5.get(1)); // numeric 1

// console.log(map5.get('1')); // string 1

// // При использовании непримитивных типов в качестве ключей нужно учитывать, что они хранятся по ссылке,
// // поэтому для доступа к заданному с помощью объекта ключу, необходимо передавать тот же самый объект.

// const dataObject = { position: 'left' };
// const sameObject = dataObject;

// console.log(dataObject === sameObject); // true

// const map6 = new Map();
// map6.set(dataObject, 'value for dataObject');
// map6.set(sameObject, 'value for sameObject');

// console.log(map6.size); // 1

// console.log(map6.get(dataObject)); // value for sameObject

// console.log(map6.get(sameObject)); // value for sameObject

// // Но если взять два разных объекта с одинаковым содержанием, то получим два разных ключа.
// const playerOne = { position: 'left' };
// const playerTwo = { position: 'left' };

// console.log(playerOne === playerTwo); // false

// const map7 = new Map();
// map7.set(playerOne, 'player 1');
// map7.set(playerTwo, 'player 2');

// console.log(map7.size); // 2

// console.log(map7.get(playerOne)); // player 1

// console.log(map7.get(playerTwo)); // player 2

//===========================
//-------------------Реализация Map() например для кэширования результатов функции
// создаем хэш-таблицу для кэширования результатов
//const factorialCache = new Map();
// функция для вычисления факториала
// function factorial(n) {
//     // проверяем, есть ли результат в кэше
//     if (factorialCache.has(n)) {
//         // если результат есть в кэше, возвращаем его
//         return factorialCache.get(n);
//     }
//
//     // вычисляем факториал
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//
//     // сохраняем результат в кэше
//     factorialCache.set(n, result);
//
//     // возвращаем результат
//     return result;
// }
//
// // вычисляем факториал числа 5
// console.log(factorial(5)); // 120
//
// // вычисляем факториал числа 5 еще раз
// console.log(factorial(5)); // 120 (результат берется из кэша)
//
// // вычисляем факториал числа 10
// console.log(factorial(10)); // 3628800
//
// // выводим количество пар "ключ-значение" в кэше
// console.log(factorialCache.size); //

//===============Задачи на применение  Map()
// Задача: Создать функцию, которая принимает массив объектов с информацией о студентах (имя, фамилия, возраст, пол)
// и возвращает объект Map, где ключами являются возрасты студентов, а значениями - массивы объектов студентов
// соответствующего возраста.
//  input:
// const students = [
//     { name: 'John', surname: 'Doe', age: 20, gender: 'male' },
//     { name: 'Jane', surname: 'Doe', age: 22, gender: 'female' },
//     { name: 'Bob', surname: 'Smith', age: 20, gender: 'male' },
//     { name: 'Alice', surname: 'Johnson', age: 21, gender: 'female' },
//     { name: 'Charlie', surname: 'Brown', age: 20, gender: 'male' },
//     { name: 'Eve', surname: 'White', age: 22, gender: 'female' }
// ];

// output
// Map {
//     20 => [
//         { name: 'John', surname: 'Doe', age: 20, gender: 'male' },
//         { name: 'Bob', surname: 'Smith', age: 20, gender: 'male' },
//         { name: 'Charlie', surname: 'Brown', age: 20, gender: 'male' }
//     ],
//         21 => [
//         { name: 'Alice', surname: 'Johnson', age: 21, gender: 'female' }
//     ],
//         22 => [
//         { name: 'Jane', surname: 'Doe', age: 22, gender: 'female' },
//         { name: 'Eve', surname: 'White', age: 22, gender: 'female' }
//     ]
// }

//Решение:
// function groupStudentsByAge(students) {
//     const map = new Map();
//     students.forEach(student => {
//         const age = student.age;
//         if (!map.has(age)) {
//             map.set(age, []);
//         }
//         map.get(age).push(student);
//     });
//     return map;
// }
//
// const students = [
//     { name: 'John', surname: 'Doe', age: 20, gender: 'male' },
//     { name: 'Jane', surname: 'Doe', age: 22, gender: 'female' },
//     { name: 'Bob', surname: 'Smith', age: 20, gender: 'male' },
//     { name: 'Alice', surname: 'Johnson', age: 21, gender: 'female' },
//     { name: 'Charlie', surname: 'Brown', age: 20, gender: 'male' },
//     { name: 'Eve', surname: 'White', age: 22, gender: 'female' }
// ];
//
// console.log(groupStudentsByAge(students));




//---------------Set()-------------------
//SET - коллекция для хранения уникальных значений любого типа. Одно и то же значение нельзя добавить в Set больше одного раза.
// Это неиндексированная коллекция, положить элемент в коллекцию можно, но достать нельзя. По элементам коллекции можно итерироваться.

// Основные методы для работы с коллекцией:

// add() — добавить элемент.
// delete() — удалить элемент.
// has() — проверить, есть ли элемент в коллекции.
// clear() — очистить коллекцию.
// forEach() — выполнить функцию для каждого элемента в коллекции, аналогично одноимённому методу массива.
// Содержит свойство size для получения количества элементов в коллекции.

// Set vs Array
// Понимание того, когда использовать Set вместо Array, может иметь решающее значение как для производительности,
// так и для ясности нашего кода. Хотя оба могут хранить коллекции значений, они служат разным целям.
// * предотвращение дублирования значений, Set автоматически гарантирует уникальность всех элементов.
// * Set более эффективен для проверки существования элемента внутри него. Это связано с тем, что Set реализован
// с эффективными структурами данных, которые позволяют ускорить поиск.

// const uniqueIds = new Set();

// uniqueIds.add(123);
// uniqueIds.add(456);
// uniqueIds.add(111);
// uniqueIds.add(123);
//
// console.log("uniqueIds.values ", uniqueIds); // 3
// console.log("uniqueIds.size", uniqueIds.size); // 3
//
// console.log(uniqueIds.has(111)); // true
// //
// uniqueIds.delete(111);
// console.log(uniqueIds.size); // 2
//
// uniqueIds.clear();
// console.log(uniqueIds.size); // 0
//
// // Коллекция Set создается при помощи конструктора.
// const set = new Set();
//
// console.log(set.size); // 0
//
// // Также мы можем передать начальные значения в виде итерируемого списка значений.
// const filled = new Set([1, 2, 3, 3, 3, 'hello']);
//
// console.log(filled.size); // 4 // [1,2,3,'hello']
// //
// // // Для сохранения значения в коллекции необходимо использовать метод add(значение).
// // // Для удаления значения необходимо использовать метод set(значение).
// const filled1 = new Set([1, 2, 3, '3', 3, 'hello']);
//
// filled1.add(100);
// filled1.delete(1);
// console.log(filled1)
//
// // Для того, чтобы проверить был ли элемент уже добавлен в коллекцию,
// // необходим метод has(значение)
// const filled2 = new Set([1, 2, 3, '3', 3, 'hello']);
//
// console.log(filled2.has(3)); // true
// console.log(filled2.has('3')); // true
//
// console.log(filled2.has('My name')); // false
//
// // Set — это неиндексированная коллекция. То есть, нет индекса элемента.
// // В коллекцию можно только положить значение, а получить отдельное значение нельзя.
//
// // Обход можно организовать двумя способами
// // forEach()
//
// const filled3 = new Set([1, 2, 3, 3, 3, 'hello']);
//
// filled3.forEach(function (value) {
//     console.log(value);
// });
// 1
// 2
// 3
// 'hello'

// for...of
// const filled4 = new Set([1, 2, 3, 3, 3, 'hello']);
//
// for (let n of filled4) {
//     console.log(n);
// }
//
// // 1
// // 2
// // 3
// // 'hello'
//
// // Set использует строгое сравнение для проверки, есть ли элемент в коллекции или нет.
//
// const set2 = new Set();
//
// set2.add(1);
// set2.add('1');
//
// console.log(set2.size); // 2
//
// // Непримитивные типы хранятся по ссылке, поэтому Set будет проверять
// // что мы действительно пытаемся добавить тот же самый объект в коллекцию или нет.
//
// const cheapShirt = { size: 'L', color: 'white' };
// const fancyShirt = { size: 'L', color: 'white' };
//
//
// console.log(cheapShirt === fancyShirt); // false
// console.log(cheapShirt === cheapShirt); // true
// console.log(fancyShirt === fancyShirt); // true
// //
// const closet = new Set();
// closet.add(cheapShirt);
// closet.add(fancyShirt);
//
// console.log(closet); // 2

// Так как это разные объекты, то оба добавились в коллекцию. Если же попробовать добавить их второй раз,
// то эта операция будет проигнорирована.
//
// const closet1 = new Set();
// closet1.add(cheapShirt);
// closet1.add(fancyShirt);
//
// console.log(closet1.size); // 2
//
// closet.add(cheapShirt);
// closet.add(cheapShirt);
// closet.add(fancyShirt);
//
// console.log(closet.size); // 2
//
// // Использование Set для получения массива уникальных элементов.
// const nonUnique = [1, 2, 3, 4, 5, 4, 5, 1, 1];
// // const uniqueValuesArr = [...new Set(nonUnique)];
// const uniqueValuesArr =  Array.from(new Set(nonUnique))//Array.from(new Set(nonUnique))
// //
//  console.log(uniqueValuesArr); // [1, 2, 3, 4, 5]
//
// // let setArr = [0, 1,  3, 4, 5, 6, 7, 7, 8]
// // //console.log("setArr.length ", setArr.length)
// // let set = new Set(setArr);
// // //console.log("set size ", set.size)
//
//
//
// //-------------------Реализация базовых операций Set----------

// //
// // //содержит ли коллекция в себе другую коллекции
// //
// function isSuperset(set, subset) {
//     for (const elem of subset) {
//         if (!set.has(elem)) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSuperset(setA, setB)); // true
//
//
//
// Объединение
// function union(setA, setB) {
//     const _union = new Set(setA);
//     for (const elem of setB) {
//         _union.add(elem);
//     }
//     return _union;
// }
//
// console.log(union(setA, setC)); // Set {1, 2, 3, 4, 5, 6}

//Пересечение
// let set1 =  new Set([0, 1,  3, 4, 5, 6, 7, 7, 8])
// let set2 = new Set([9, 2, 3])


//
// function intersection(setA, setB) {
//     const _intersection = new Set();
//     for (const elem of setB) {
//         if (setA.has(elem)) {
//             _intersection.add(elem);
//         }
//     }
//     return _intersection;
// }
//
// console.log(intersection(setA, setC)); // Set {3, 4}

//Разница

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 3, 5]);
// const setC = new Set([3, 4, 5, 6]);

// function symmetricDifference(set1, set2) {
//     const _difference = new Set(set1)
//     console.log(_difference )
//     for (const elem of set2) {
//         if (_difference.has(elem)) {
//             _difference.delete(elem);
//         } else {
//             _difference.add(elem);
//         }
//     }
//     return _difference;
// }




// function symmetricDifference(set1, set2) {
//     debugger;
//     const dif = new Set();
//     for (const elem of set2){//
//         if(set1.has(elem)){
//            dif.add(elem);
//         }
//     }
//     return dif;
// }


// console.log(symmetricDifference(setA, setC)); // Set {1, 2, 5, 6}

// console.log(new Set([...setA, ...setC]))

const setA = new Set([1, 2, 3, 4]);
//const setB = new Set([2, 3, 5]);
const setC = new Set([3, 4, 5, 6]);
//
function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

console.log(difference(setA, setC)); // Set {1, 2}

//Tasks



// //Set() для нахождения всех неуникальных элементов в массиве:
// const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// function findNonUnique(arr) {
//     const set = new Set();
//     const result = [];
//
//     for (const elem of arr) {
//         if (set.has(elem)) {
//             result.push(elem);
//         } else {
//             set.add(elem);
//         }
//     }
//
//     return result;
// }
// console.log(findNonUnique(arr)); // [1, 2, 3, 4]

//==========================











