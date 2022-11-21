function styleElements(row, userWord) {
    let myRow = readWordGameFromCookie().toString();
    for (let i = 0; i < userWord.length; i++) {
        let id = makeStringIdByRowAndColum(row, i);
        unClicked(id);
        if (userWord[i] === myRow[i]) {
            setColor(id, RIGHT_GUESS_COLOR, userWord[i]);
        } else {
            if (myRow.includes(userWord[i])) {
                setColor(id, RIGHT_GUESS_IN_WRONG_LOCATION, userWord[i]);
            } else {
                setColor(id, WRONG_GUESS_COLOR, userWord[i]);
                unClicked(userWord[i]);
            }
        }
    }
}
function setColor(id, color, char) {
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
    let keyElement = document.getElementById(char + "");
    if (keyElement?.style.backgroundColor !== RIGHT_GUESS_COLOR) {
        keyElement.style.backgroundColor = color;
    }
}

function unClicked(id) {
    document.getElementById(id + "").style.pointerEvents = NONE;
}
function allowClick(row){
    for (let i = 0; i <=MAX_COLUM ; i++) {
        document.getElementById(makeStringIdByRowAndColum(row,i)).style.pointerEvents='';
    }
}