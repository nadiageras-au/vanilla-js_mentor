function zero(func) {return func ? func(0) : 0;}
function one(func) {return func ? func(1) : 1;}
function two(func) {return func ? func(2) : 2;}
function three(func) {return func ? func(3) : 3;}
function four(func) {return func ? func(4) : 4;}
function five(func) {return func ? func(5) : 1;}
function six(func) {return func ? func(6) : 6;}
function seven(func) {return func ? func(7) : 7;}
function eight(func) {return func ? func(8) : 8;}
function nine(func) {return func ? func(9) : 9;}

function plus(n) {return function(num) { return num + n;}}
function minus(n) {return function(num) { return num - n;}}
function times(n) {return function(num) { return num * n;}}
function devidedBy(n) {return function(num) { return Math.floor(num / n);}}

const a = seven(times(five()))
// console.log(six())
// const b = nine(devidedBy(three()))
// const c = eight(minus(four()))
 const d = six(minus(three(plus(two()))))
// const e = two(plus(three(times(five()))))
