var val1, val2
vals = []
function loadDisplay(num) {
  document.getElementById('display2').value +=  num.value.toString()
  
  console.log('object:', num, '- Type:', typeof(num))
  console.log('type:', num.type, '- Type:', typeof(num.type))
  console.log('name:', num.name, '- Type:', typeof(num.name))
  console.log('value:', num.value, '- Type:', typeof(num.value))
  console.log('onClick:', num.onclick, '- Type:', typeof(num.onclick))
}

function clearDisplay() {
  document.getElementById('display2').value = ""
  document.getElementById('display1').innerHTML = ""
  vals = []

}

function deleteFromRight() {
  document.getElementById('display2').value = document.getElementById('display2').value.slice(0, -1)
}

function setOperator(trg) {
  val1 = document.getElementById('display2').value +  " " + trg.value
  vals.push(val1)
  document.getElementById('display1').innerHTML = val1
  document.getElementById('display2').value = ""
  console.log(vals)
}

function doMath() {
  val2 = document.getElementById('display2').value
  var result
  switch(val1.slice(-1)) {
    case '+':
      result = parseInt(val1) + parseInt(val2)
      break
    case '-':
      result = parseInt(val1) - parseInt(val2)
      break
    case '*':
      result = parseInt(val1) * parseInt(val2)
      break
    case '/':
      result = parseInt(val1) / parseInt(val2)
      break
    case 's':
      result = Math.sqrt(parseInt(val1))
      break
    case 'p':
      result = Math.pow(parseInt(val1), parseInt(val2))
      break
  }
  document.getElementById('display1').innerHTML = ""
  document.getElementById('display2').value = result
  val1 = null
  val2 = null
  result = null
}
