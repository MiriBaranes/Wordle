function getTextByType(type, text) {
    if (type !== TO_MOVE) {
        text = '';
    }
    return text;
}


function getTypeButton(index) {
    let type = TO_MOVE;
    if (index === (ELEMENT_KEY_BORD.length - 1)) {
        type = TO_REMOVE;
    }
    return type;
}

function setValue(newText, typeKey) {
    let colum=Number(getLocationObject().colum);
    if (typeKey===TO_REMOVE){
        colum--;
    }
    const rowElement = document.getElementById(makeStringIdByRowAndColum(getLocationObject().row,colum));
    rowElement.value = newText;
    setLocation(typeKey, colum);
}

function makeStringIdByRowAndColum(row, colum) {
    return ROW + row + COLUM + colum;
}


function getActiveInputJsonObject() {
    let location = getLocationObject();
    const element = document.getElementById(location.id);
    return {
        myElement: element,
        row: location.row,
        colum: location.colum,
        text: element.textContent
    };

}