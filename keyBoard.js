function createAKeyBoard() {
    let keyboard = makeAElement('div', null, [['class', KEY_BOARD_CLASS]]);
    document.body.appendChild(keyboard);
    for (let i = 0; i < ELEMENT_KEY_BORD.length; i++) {
        const newLater = makeAElement('button', ELEMENT_KEY_BORD[i], [['id', ELEMENT_KEY_BORD[i]]]);
        keyboard.appendChild(newLater);
        newLater.onclick = function () {
            let type = getTypeButton(i);
            let text = getTextByType(type, newLater.textContent);
            setValue(text, type);
        }
    }
}

function submitButton() {
    let span = makeAElement('div', null, [['value', SENT_BUTTON_ID]]);
    document.body.appendChild(span);
    let submit = makeAElement('button', 'בדיקה', [['id', SENT_BUTTON_ID]]);
    submit.onclick = function () {
        sentButtonAct();
    }
    span.appendChild(submit);
}
function sentButtonAct (){
    let row = getLocationObject().row;
    if (checkLengthWord(row)) {
        paint(row, getFullUserWord(row));
        let location = getLocationObject().location;
        location.setAttribute(ROW, Number(row) + 1 + "");
        location.setAttribute(COLUM, 0 + "");
    }
    else {
        alert(ERROR_MESSAGE);
    }
}


function getTextByType(type, text) {
    if (type !== TO_MOVE) {
        text = '';
    }
    return text;
}


function getTypeButton(index) {
    let type = TO_MOVE;
    if (index === (ELEMENT_KEY_BORD.length - 1)) {
        if (!isEmptyInput()) {
            type = TO_REMOVE_THIS_INPUT;
        } else {
            type = TO_REMOVE;
        }
    }
    return type;
}

function setValue(newText, typeKey) {
    const rowElement = document.getElementById(getWordId1());
    rowElement.value = newText;
    setLocation(typeKey, Number(getLocationObject().colum));
}

function isEmptyInput() {
    return getActiveInputJsonObject().text === '';
}

function setLocation(type, colum) {
    let newColum = colum;
    if (type === TO_REMOVE && colum > 0) {
        newColum--;
    } else if (type === TO_MOVE) {
        if (colum < MAX_COLUM) {
            newColum++;
        }
    }
    const locationElement = getLocationObject().location;
    setColumNumber(newColum, locationElement);
}

function setColumNumber(newColum, locationElement) {
    locationElement.setAttribute(COLUM, String(newColum));
    if (newColum !== MAX_COLUM) {
        setFocus();
    }
}

function getLocationObject() {
    const locationElement = document.getElementById(WORDS_BOARD);
    return {
        location: locationElement,
        row: locationElement.getAttribute(ROW),
        colum: locationElement.getAttribute(COLUM)
    };
}

function setFocus() {
    getActiveInputJsonObject().myElement.focus();
}
