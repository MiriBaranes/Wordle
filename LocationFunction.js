
function setLocation(type, colum) {
    let newColum = colum;
    if (type === TO_MOVE && colum <= MAX_COLUM) {
        newColum++;
    }
    setLocationByRowAndColum(locationObject.row,newColum);
}

function setLocationByRowAndColum(row, newColum) {
    locationObject.row = row;
    locationObject.colum = newColum;
}
function setValue(newText, typeKey) {
    let colum = locationObject.colum;
    if (typeKey === TO_REMOVE) {
        colum--;
    }
    const element = document.getElementById(makeStringIdByRowAndColum(locationObject.row, colum));
    if (colum!==MAX_COLUM+1){
        element.value = newText;
    }
    setLocation(typeKey, colum);
}

function makeStringIdByRowAndColum(row, colum) {
    return ROW + row + COLUM + colum;
}
function getTextByType(type, text) {
    if (type !== TO_MOVE) {
        text = '';
    }
    return text;
}


function getTypeButton(index) {
    let type = TO_MOVE;
    if (index === (ELEMENT_KEY_BORD.length - 2)) {
        type = TO_REMOVE;
    } else if (index === ELEMENT_KEY_BORD.length-1) {
        type = SENT;
    }
    return type;
}
