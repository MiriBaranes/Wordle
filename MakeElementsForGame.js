let locationObject = {row: 0, colum: 0};

function createAKeyBoard() {
    let keyboard = makeAElement(DIV, {id: KEY_BOARD_CLASS});
    document.body.appendChild(keyboard);
    for (let i = 0; i < ELEMENT_KEY_BORD.length; i++) {
        const newLater = makeAElement(BUTTON, {id: ELEMENT_KEY_BORD[i]}, ELEMENT_KEY_BORD[i]);
        keyboard.appendChild(newLater);
        let type = getTypeButton(i);
        newLater.onclick = function () {
            let text = getTextByType(type, newLater.textContent);
            if (type === SENT) {
                sentButtonAct();
            } else {
                setValue(text, type);
            }
        }
    }
}

function makeAWordBord() {
    let wordBord = document.getElementById(WORDS_BOARD);
    for (let i = 0; i < MAX_ROW + 1; i++) {
        let row = makeAElement(DIV, {class: ROW + i});
        wordBord.appendChild(row);
        for (let j = MAX_COLUM; j >= 0; j--) {
            let latterSpace = makeAElement(INPUT, {id: makeStringIdByRowAndColum(i, j), type: 'text', maxLength: 1});
            latterSpace.style.pointerEvents = NONE;
            row.appendChild(latterSpace);
        }
    }
}