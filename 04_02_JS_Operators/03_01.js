// Кроме обычного оператора присваивания (”=”) в JavaScript существуют бинарные операторы
// присваивания с операцией и операторы логического присваивания

let a = 2;
let b = 4;
b += 1; //b = 5 (5+1)
b *= a; //b = 10 (5*2)
//
// Операторы логического присваивания ”`||=`” - присвоение через логическое "ИЛИ", "&&=" - присвоение
// через логическое "И" и "??=" - оператор нулевого присвоения ведут себя схоже со своими
// логическими собратьями, но вместо первого операнда используют текущее значение переменной.

const userData1 = { name: null, role: "user", age: undefined };

userData1.name ||= "John"; //поле имя имело ложное значение и будет изменено
userData1.name ??= "John"; //
userData1.role ||= "admin"; //роль не была ложным значением и не будет изменена
userData1.age ||= 0; //возраст был ложным значением и будет изменен
userData1.age ??= 22;
console.log(userData1);


// userData1.age &&= 22; //возраст был ложным значением и не будет изменен
// console.log(userData1);
// // userData1.role ??= "admin"; //роль не равна ни null ни undefined и не изменится
// // console.log(userData1);
//
// userData1.role &&= "admin"; //роль не равна ни null ни undefined и не изменится
// console.log(userData1);