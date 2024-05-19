'use strict'

//1.Object.freeze()//isFrozen()
const obj = {
    name: {}
}

// Object.freeze(obj);
obj.name.firstName = 'Test';
console.log(obj.name.firstName);
console.log(obj);
obj.name = 'Ku'
console.log(obj);

//Array freeze

//2.Object.seal() //isSealed
// По умолчанию, объекты являются расширяемыми (к ним могут добавляться новые свойства). Запечатывание объекта
// предотвращает добавление к нему новых свойств и делает все существующие свойства не настраиваемыми.

var obj = {
    prop: function () {},
    foo: "bar",
};

// Новые свойства могу быть добавлены, существующие свойства могут быть изменены или удалены.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;
Object.seal(obj);

// Изменение значений свойств на запечатанном объекте всё ещё работает.
obj.foo = "quux";

// Но вы не можете преобразовать свойства данных в свойства доступа и наоборот.
Object.defineProperty(obj, "foo", {
    get: function () {
        return "g";
    },
}); // выбросит TypeError

// Теперь любые изменения, кроме изменения значений свойств, не будут работать.
obj.quaxxor = "дружелюбная утка"; // молча не добавит свойство
delete obj.foo; // молча не удалит свойство