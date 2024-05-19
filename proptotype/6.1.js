// Динамическая природа прототипов

// При изменении прототипа, он обновляется у всех экземпляров, даже если они написаны до изменения прототипа
let friend = new Person();
Person.prototype.sayHi = function() {
  console.log("hi");
};
friend.sayHi(); // "hi" — все работает