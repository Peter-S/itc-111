var a = 5
var b = 10

function apple() {
  let a = '50'
  return a
}

function bannana() {
  let c = a + b
  return c
}

console.log('var a =', a)
console.log('function apple =', apple())
console.log('function bannana =', bannana())
console.log('a is a ', typeof(a))
console.log('apple is a ', typeof( apple()))
