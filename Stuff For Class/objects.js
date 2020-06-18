var myObject = {
  name: 'pete',
  age: 15,
  isMarried: false,

  fullName: function() {
    var status = this.isMarried ? ' is Married' : ' is not Married'
    return this.name + status
  }
}

console.log(myObject.fullName())

