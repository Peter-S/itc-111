var panelCnt = 1, rowCnt = 0;
function makeDiv(cls) { 
    var divBox = document.createElement('div');
    if(cls == 'panel'){
        divBox.innerHTML = 'Click Me';
        divBox.setAttribute('id', 'Panel ' + panelCnt.toString())
        divBox.onclick = function () {  
            alert(divBox.getAttribute('id'));
        }
    } else if (cls == 'row') {
        divBox.setAttribute('id','row_' + rowCnt)
    }
    divBox.className = cls; 
    return divBox;
}
function loadGrid() {
    for (var i = 0; i < 4; i++) {
        var row = makeDiv('row');
        rowCnt++;
        document.getElementById('main').appendChild(row);
        for (var j = 0; j < 4; j++) {
            document.getElementById(row.getAttribute('id')).appendChild(makeDiv('panel'));
            panelCnt++;
        }
    }
}
document.body.onload = loadGrid();