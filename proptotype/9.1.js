// НАСЛЕДОВАНИЕ
// Из-за того что в языке ECMAScript
// у функций нет сигнатур(контрактов), наследование интерфейса в нем невозможно, а поддерживается только наследование реализации, которое выполняется преимущественно
// с помощью цепочек прототипов.

// Цепочки прототипов

function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function() {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}
// наследование от SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
let instance = new SubType();
console.log(instance.constructor)
console.log(instance.getSuperValue()); // true

// Поиск свойств
// и методов всегда продолжается до конца цепочки прототипов.