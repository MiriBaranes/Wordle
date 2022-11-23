function styleElements(row, userWord) {
    let gameWord = readWordGameFromCookie().toString();
    for (let i = 0; i < userWord.length; i++) {
        let id = makeStringIdByRowAndColum(row, i);
        unClicked(id);
        if (userWord[i] === gameWord[i]) {
            setColor(id, RIGHT_GUESS_COLOR, userWord[i]);
        } else {
            if (gameWord.includes(userWord[i]) && allowPaint(userWord[i], userWord, i, gameWord)) {
                setColor(id, RIGHT_GUESS_IN_WRONG_LOCATION, userWord[i]);
            } else {
                setColor(id, WRONG_GUESS_COLOR, userWord[i]);
            }
        }
    }
}

function countRightGussChar(char, userWord, gameWord) {
    let count = 0;
    for (let i = 0; i < userWord.length; i++) {
        if (userWord[i] === char && gameWord[i] === char) {
            count++;
        }
    }
    return count;
}


function countChars(char, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
            count++;
        }
    }
    return count;
}

function allowPaint(char, userWord, index, gameWord) {
    return countChars(char, gameWord) - (countChars(char, userWord.substring(0, index - 1)) + countRightGussChar(char, userWord, gameWord)) > 0;
}

function setColor(id, color, char) {
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
    let keyElement = document.getElementById(char);
    if (keyElement?.style.backgroundColor !== RIGHT_GUESS_COLOR) {
        keyElement.style.backgroundColor = color;
    }
}

function unClicked(id) {
    document.getElementById(id ).style.pointerEvents = NONE;
}

function allowClick(row) {
    for (let i = 0; i <= MAX_COLUM; i++) {
        document.getElementById(makeStringIdByRowAndColum(row, i)).style.pointerEvents = '';
    }
}