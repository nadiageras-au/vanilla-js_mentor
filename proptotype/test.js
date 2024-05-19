function Person () {
  this.t = t
}
Person.oppa = 'Oppa'
Person.oppa2 = function ggg(){}
Person.prototype.name = 'OLEG'
let biped = new Person()

console.log(biped.__proto__)
// console.log(Person.prototype)
