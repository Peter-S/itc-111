var person = {fname:"John", lname:"Doe", age:25}

var text = ""
var x;
for (x in person) {
  console.log(x + " " + person[x])
}

var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  console.log(x);
}