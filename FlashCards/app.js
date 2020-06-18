var greetings_En = ["Hello", "How are you?", "Whats up", "nice to meet you"]
var bodyParts_En = ["Head", "Chest", "Back", "Arm", "Leg"]
var colors_En = ["red", "orange", "yellow", "green", "blue", "indigo"]

var greetings_Sw = ["Hibari", "Hibani gani", "Kuna ninin", "Ni yema na wewe"]
var bodyParts_SW = ["Kichwa", "Kifua", "mgongo", "mkono", "mguu"]
var colors_Sw = ["Nyekun", "chungwa", "monjano", "kilanji", "bluu", "bluu ya kati"]

var word = document.getElementById("wrd")

// diplay word spot
var crrWrd

// hold list
var crrLst
var trgLst

//hold index
var ndx

// boolean for fli
var flipped = false

function init() {
  // set up initial values
  crrLst = greetings_En
  trgLst = greetings_Sw
  crrWrd = crrLst[0]
  word.innerHTML = crrWrd
  ndx = crrLst.indexOf(crrWrd)
  document.getElementById("category").selectedIndex = 0
  document.getElementById("target1").selectedIndex = 0
  document.getElementById("target2").selectedIndex = 0


}

function chgLst(trg) {
  //  alert(trg.value)
  switch(trg.value) {
    case "greetings":
      crrLst = greetings_En
      trgLst = greetings_Sw
      word.innerHTML = crrLst[ndx]
      break
    case "bodyParts":
      crrLst = bodyParts_En
      trgLst = bodyParts_SW
      word.innerHTML = crrLst[ndx]
      break
    case "colors":
      crrLst = colors_En
      trgLst = colors_Sw
      word.innerHTML = crrLst[ndx]
      break
  }
}

function prvWrd() {
  if(ndx > 0){
    ndx--
  }else {
    ndx = (crrLst.length - 1)
  }
  word.innerHTML = crrLst[ndx]
}

function flipWrd() {
  // alert(trgLst[ndx])
  if(flipped) {
    word.innerHTML = crrLst[ndx]
    flipped = false
  }else {
    word.innerHTML = trgLst[ndx]
    flipped = true
  }
}

function nxtWrd() {
  if(ndx < crrLst.length -1) {
    ndx++
  } else {
    ndx = 0
  }
  word.innerHTML = crrLst[ndx]
}

function setList(trg) {
  // alert(trg.value)
  switch(trg.value) {
    case "target1":
      if(trg.value == "English") {
        crrLst = greetings_En
      }else {
        crrLst = greetings_Sw
      }
      // word.innerHTML = crrLst[ndx]
      break
    case "target2":
      if(trg.value == "English") {
        trgLst = greetings_En
      }else {
        trgLst = greetings_Sw
      }
      // word.innerHTML = trgLst[ndx]
      break
  }
}

function swapTargets() {
  var trg1 = document.getElementById("target1").value
  var trg2 = document.getElementById("target2").value
  var trgTmp = trg1
  document.getElementById("target1").value = trg2
  document.getElementById("target2").value = trgTmp

  var tmpList = crrLst
  crrLst = trgLst
  trgLst = tmpList

  crrWrd = crrLst[ndx]
  word.innerHTML = crrWrd
}

document.onload = init()