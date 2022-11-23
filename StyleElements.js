function styleElements(row, userWord) {
    let gameWord = readWordGameFromCookie().toString();
    for (let i = 0; i < userWord.length; i++) {
        let id = makeStringIdByRowAndColum(row, i);
        let color = WRONG_GUESS_COLOR;
        if (userWord[i] === gameWord[i]) {
            color = RIGHT_GUESS_COLOR;
        } else if (gameWord.includes(userWord[i]) && allowPaint(userWord[i], userWord, i, gameWord)) {
            color = RIGHT_GUESS_IN_WRONG_LOCATION;
        }
        setColor(id, row,color, userWord[i], i);
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

function setColor(id, row,color, char) {
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
    // moveRow(id, color, i);

    let keyElement = document.getElementById(char);
    if (keyElement?.style.backgroundColor !== RIGHT_GUESS_COLOR) {
        keyElement.style.backgroundColor = color;
    }
}

// function moveRow(id, color, index) {
//     setTimeout(() => {
//         const input = document.getElementById(id);
//         input.classList.add("animate__jello");
//         input.style.backgroundColor = color;
//     }, 200 * index);
// }