var Sugar = require('sugar');

console.log(Sugar.Number.random(1, 100))

let datee = Sugar.Date.create('2021-12-29T10:13:09Z')
let ss = Sugar.Date(datee)
console.log(ss.full().raw)