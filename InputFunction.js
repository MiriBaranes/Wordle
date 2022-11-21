function getTextByType(type, text) {
    if (type !== TO_MOVE) {
        text = '';
    }
    return text;
}


function getTypeButton(index) {
    let type = TO_MOVE;
    if (index === (ELEMENT_KEY_BORD.length - 1))
        type = isEmptyInput() ? TO_REMOVE : TO_REMOVE_THIS_INPUT;

    return type;
}

function setValue(newText, typeKey) {
    const rowElement = document.getElementById(getLocationObject().id);
    rowElement.value = newText;
    setLocation(typeKey, Number(getLocationObject().colum));
}

function isEmptyInput() {
    return getActiveInputJsonObject().text === '';
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