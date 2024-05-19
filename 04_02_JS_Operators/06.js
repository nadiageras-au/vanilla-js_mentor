// Неявное преобразование происходит,
// когда мы заставляем JavaScript работать со значениями разных типов.
//
// есть только три вида преобразований:
//     В строку (String)
//     В логическое значение (Boolean)
//     В число (Number)

// 1. Интерпретатор приведёт примитивные значения к логическим, если мы используем &&, ||, ??, !!.
//
// 2. К строке, если мы используем +, когда один из операндов — строка.
//
// 3. К числу, если:
//          мы используем операторы сравнения <, <=, >, >=;
//          используем арифметические операции -, + (за исключением пункта 2), /, *.
//          используем унарный плюс: +'2' === 2;
//          используем оператор нестрогого сравнения ==.


console.log(12 / "6")//2
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log(true + false)
console.log('[1] > null',// valueOf- 1
    [1] > null)

console.log('[null] == "null"',//[null].valueOf = null -> 0
    [null] == "null")

console.log('["null"] == "null"', //["null"].valueOf -> 'null'
    ["null"] == "null")

console.log('[1] == "1"',//[1].valueOf -> 1 == "1" -> 1==1 -> true
    [1] == "1")

console.log({a:0} == false)

console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
console.log( ['x'] == 'x')
console.log([] + null+ 1)// [].valueOf -> '' + null -> null-> null + "1"
console.log(0 || "0" && {})//
console.log([1,2,3] == [1,2,3])//
console.log({}+[]+{}+[1])
console.log(!+[]+[]+![])// ПоЧемУ??? такой результат

// +[].valueOf -> [].toString -> '' -> +''-> 0 --> +[]==0
console.log(+[]==0)
console.log(!+[]==true)
console.log(+![]==true)// ![]-> []==true
console.log(true==[])
console.log(+[]==false)
console.log(![]==false)
