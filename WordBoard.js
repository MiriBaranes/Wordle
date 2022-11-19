function makeAWordBord() {
    let wordBord = document.getElementById(WORDS_BOARD);
    for (let i = 0; i < MAX_ROW + 1; i++) {
        let row = makeAElement('div', null, [['class', ROW + i]]);
        wordBord.appendChild(row);
        for (let j = MAX_COLUM; j >= 0; j--) {
            let latterSpace = makeAElement('input', null,
                [['id', makeStringIdByRowAndColum(i, j)],
                    ['type', 'text']]);
            if (i !== 0) {
                latterSpace.style.pointerEvents = 'none';
            }
            latterSpace.onclick = function () {
                setLocation(TO_MOVE_BY_CLICK, j);
            }
            row.appendChild(latterSpace);
        }
    }
    submitButton();
}
function checkWinn(endRow){
    let count=0;
    let winn=false;
    for (let i = 0; i < MAX_COLUM; i++) {
        if (document.getElementById(makeStringIdByRowAndColum(endRow,i)).style.backgroundColor===RIGHT_GUESS_COLOR){
            count++;
        }
    }
    if (count===MAX_COLUM){
        winn=true;
    }
    return winn;
}

function getImage(endRow) {
    let greenPlaces = [];
    for (let i = 0; i <= endRow; i++) {
        for (let j = 0; j < MAX_COLUM; j++) {
            const element = document.getElementById(makeStringIdByRowAndColum(i, j));
            if (element.style.backgroundColor.toString() === RIGHT_GUESS_COLOR) {
                greenPlaces.push(makeLocationJSON(i, j));
            }
        }
    }
    return greenPlaces;
}

function makeLocationJSON(row, colum) {
    return {row: row, colum: colum};
}

function getFullUserWord(rowNumber) {
    let ans = "";
    for (let i = 0; i < 5; i++) {
        ans += document.getElementById(makeStringIdByRowAndColum(rowNumber, i)).value;
    }
    return ans;
}

function makeStringIdByRowAndColum(row, colum) {
    return ROW + row + COLUM + colum;
}

function paint(row, userWord) {
    let myRow = document.getElementById(GAME_WORD_ID).getAttribute('value').toString();
    for (let i = 0; i < userWord.length; i++) {
        let id = makeStringIdByRowAndColum(row, i);
        unClicked(id);
        if (userWord[i] === myRow[i]) {
            setColor(id, RIGHT_GUESS_COLOR, userWord[i]);
        } else if (myRow.includes(userWord[i])) {
            setColor(id, RIGHT_GUESS_IN_WRONG_LOCATION, userWord[i]);
        } else {
            setColor(id, WRONG_GUESS_COLOR, userWord[i]);
            unClicked(userWord[i]);
        }
    }
}

function checkLengthWord(row) {
    return getFullUserWord(row).length === MAX_COLUM + 1;
}

function setColor(id, color, char) {
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
    let keyElement = document.getElementById(char + "");
    if (keyElement.style.backgroundColor.toString() !== RIGHT_GUESS_COLOR) {
        keyElement.style.backgroundColor = color;
    }
}

function unClicked(id) {
    document.getElementById(id + "").style.pointerEvents = 'none';
}

function getWordId1() {
    return ROW + getLocationObject().row + COLUM + getLocationObject().colum;
}

function getActiveInputJsonObject() {
    const element = document.getElementById(getWordId1());
    return {
        myElement: element, row: getLocationObject().row, colum: getLocationObject().colum,
        text: element.textContent
    };

}