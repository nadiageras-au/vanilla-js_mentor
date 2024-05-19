// Область видимости (scope) в программировании определяет доступность переменных,
//     функций и других именованных сущностей внутри кода.
//     Глобальная область видимости (Global Scope):
// let globalVar = 'I am global';
//
// function globalFunction() {
//     console.log(globalVar);
// }

// console.log(globalVar); // Выведет: "I am global"
// globalFunction(); // Выведет: "I am global"
//----------
// Локальная область видимости (Local Scope)
// function localFunction() {
//     let localVar = 'I am local';
//     console.log(localVar);
// }
//
// localFunction(); // Выведет: "I am local"
// console.log(localVar); // Ошибка: localVar is not defined


// -------Lexical environment-----------
// Лексическое окружение — это структура данных, которая хранит сведения о соответствии идентификаторов
// и переменных. Здесь «идентификатор» — это имя переменной или функции,
//     а «переменная» — это ссылка на объект (сюда входят и функции) или значение примитивного типа.

// Environment Record Это место, где переменные и функции хранятся внутри лексического окружения.(объект или обл памяти)
//     Outer Environment Reference -Это ссылка на родительское лексическое окружение


// Замыкание — это способность функции запоминать лексическое окружение в котором эта функция была определена.

// let, const - ограничены блочной областью видимости
// var - ограничены функциональной область видимости

// ________Example 1 ____________

//globalScope: b = 2
//outer : null
//
// function foo(a) {
//     //LexicalEnvironment {a}
//     //outer -> global
//
//   console.log(a + b);
// }
//
// var b = 2;
//
// foo(2);

// ________Example 2 ____________
//"use strict"
//foo( 2 );

//console.log(a)


// function foo(a) {
//
//     var b = a * 2;
//
//     function bar(c) {
//         console.log( a, b, c );
//     }
//     bar(b * 3);
// }

//var a = 2;

//_________________________________________
//LE(global) -> {function doSomething - function
//   function doSomethingElse -function
// b = 3
//outer - пустой null


// console.log('before everything b -', b)
// function doSomething(a) {
//     //LE(doSomething) - { a = 2
//     // }
//     //outer -> LE(global)
//     var b = 5
//     console.log('doSomething b -', b)
//    // b = a + doSomethingElse( a * 2); // b = 2 + 3 = 5
//     console.log( b * 3) // 5 * 3 //15
// }
//
// function doSomethingElse(a) {
//     //LE(doSomethingElse(a)) = {
//     //c = 4
//     // }
//     console.log('doSomethingElse b - ', b)
//    // var b = 2;
//
//     return a - 1//
// }
//
// //console.log('global before вызова doSomething - ', b)
// b = 2;
// doSomething(2)
//
// console.log('global after вызова doSomething - ', b)

//--------Задачи---------
// function foo() {
//     //{LE - a = 1 >,
//     // outer -> global}
//     var a = 1;
//     console.log("b ",b)
//
//     if(true) {
//         var b= 4
//     }
//
//     function bar() {
//         //{LE - ,
//         // outer -> LE of foo}
//
//         console.log(a);
//     }
//      bar();
// }
//
// foo()


//------Exercise#1---------
// var a = 1;
//
// //GLE = { a = 1 }
//
// function foo() {
//
// //fooLE { a = undefined  }
//     //outer -> global
//     console.log(a);
//     var a  = 2;
// }
//
// foo();


//------Exercise#2---------
// function foo() {
//     var a = 1;
//
//     function bar() {
//         console.log(a);
//     }
//
//     return bar;
// }
//
// var baz = foo();
// a = 2;
// baz();
//------Exercise#3---------
// function foo() {
//     var a = 1;
//
//     function bar(b) {
//         return a + b;
//     }
//
//     return bar;
// }
//
// var baz = foo();// = bar -> bar(2)
//
// console.log(baz(2));//


//------Exercise#4---------

//
// function foo() {
//     //LE of foo -> a = 1
//     //outer -> null
//     var a = 1;
//
//     function baz() {
//         //LE of baz a = 2
//         //outer -> LE of foo
//
//         var a = 2;
//
//         function bar() {
//             //LE of bar
//             //outer -> LE of baz
//             console.log(a);
//         }
//         bar();
//     }
//
//     //baz();
// }
//
// foo();


//------Exercise#4---------
// function testVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x);
// }

//------Exercise#5---------
//
// function testLet() {
//     if (true) {
//         let y = 20;
//     }
//     console.log(y);
// }
//
// testVar(); // Что будет выведено?
// testLet(); // Что будет выведено?

// function testVarInLoop() {
// // let a = 0;
//
//     for (var i = 0; i < 3; i++) {
//         // console.log("a ", a)
//         // console.log(++a)
//         // console.log("++a ", a)
//
//         //LE i = 0, 1, 2
//         //outer -> LE of testVarInLoop
//         setTimeout
//             //LE
//             (function () {           //setTimeout(function() {console.log(i)})
//                                      //LE                       //setTimeout(function() {console.log(i)})
//                 console.log(i);         //setTimeout(function() {console.log(i)})
//             }, 1000);
//     }
// }
//
// testVarInLoop(); // Что будет выведено?


// function testVarInLoop() {
//     for (var i = 0; i < 3; i++) {
//         (function(index) {
//             setTimeout(function() {
//                 console.log(index);
//             }, 1000);
//         })(i);
//     }
// }
//
// testVarInLoop(); // Выведет: 0 1 2
//------Exercise#6---------
// function getCounter() {
//     let counter = 0;
//     return function () {
//         return counter++;
//     }
// }
//
// let count = getCounter();
// console.log(count());  // Что будет в консоли?
// console.log(count());  // Что будет в консоли?
// console.log(count());  // Что будет в консоли?
//------Exercise#7---------
// function createIncrement() {
//     let count = 0
//
//     function increment() {
//         return count++
//     }
//
//     const message = `Count is ${count}`
//
//     function log() {
//         console.log(message)
//     }
//
//     return [increment, log]
// }
//
// const [increment, log] = createIncrement()
// increment()
// increment()
// increment()
// log() // Что будет в консоли?

//__________Задача c подвохом_____
 let num = 10

 function showNum() {
     console.log(num);

     let num = 20;

     console.log(num)
 }

showNum();
//------Exercise#9---------
// function outer(num1) {
//
//     function inner(num2) {
//         const res = num1 + num2;
//         return res
//     }
//
//     return inner
// }
//
// const innerFrom = outer(2);
// const resFrom = innerFrom(3);
// console.log(resFrom) // Что в консоли

// const counter = () => {
//     //LE count = 3
//
//     let count = 0;
//     return () => {
//         //LE ---
//         // outer -> LE of counter
//         console.log(++count) // 2
//     }
// }

// const counter1 = counter();
// const counter2 = counter();

// counter()()
// counter()()
// counter()()

// counter1();//1  || 1 || 1 || 0
// counter1();//2  || 2 || 1 || 1
// counter1();//3  || 3 || 1 || 2
// counter2(); // 0
// counter2(); // 1



let x = 1;
function foo(){

    //var x = 2;
    return function foo2(){
        console.log(x)
    }
}

console.log(foo())

