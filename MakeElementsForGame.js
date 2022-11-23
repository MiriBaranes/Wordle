function createAKeyBoard() {
    let keyboard = makeAElement(DIV, {id: KEY_BOARD_CLASS});
    document.body.appendChild(keyboard);
    for (let i = 0; i < ELEMENT_KEY_BORD.length; i++) {
        const newLater = makeAElement(BUTTON, {id: ELEMENT_KEY_BORD[i]}, ELEMENT_KEY_BORD[i]);
        keyboard.appendChild(newLater);
        newLater.onclick = function () {
            let type = getTypeButton(i);
            let text = getTextByType(type, newLater.textContent);
            setValue(text, type);
        }
    }
}


function submitButton() {
    let span = makeAElement(DIV, {id: SENT_BUTTON_ID});
    document.body.appendChild(span);
    let submit = makeAElement(BUTTON, {id: SENT_BUTTON_ID}, CHECK_VALUE);
    submit.onclick = function () {
        sentButtonAct();
    }
    span.appendChild(submit);
}

function makeAWordBord() {
    let wordBord = document.getElementById(WORDS_BOARD);
    for (let i = 0; i < MAX_ROW + 1; i++) {
        let row = makeAElement(DIV, {class: ROW + i});
        wordBord.appendChild(row);
        for (let j = MAX_COLUM; j >= 0; j--) {
            let latterSpace = makeAElement(INPUT, {id: makeStringIdByRowAndColum(i, j), type: 'text', maxLength: 1});
            // if (i !== 0) {
            latterSpace.style.pointerEvents = NONE;

            latterSpace.onclick = function () {
                setLocation(TO_MOVE_BY_CLICK, j);
            }
            row.appendChild(latterSpace);
        }
    }
    submitButton();
}

function onKeyUp() {
}