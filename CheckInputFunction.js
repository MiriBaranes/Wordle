function sentButtonAct() {
    let row = locationObject.row;
    if (checkLengthWord(row)) {
        paint(row, getFullUserWord(row));
        if (!checkWinn(row) && row !== MAX_ROW) {
            row = row + 1;
            setLocationByRowAndColum(row, 0);
        } else {
            setTimeout(() => {
                end(checkWinn(row))
            }, 1000)
        }
    } else {
        alert(ERROR_MESSAGE);
    }
}

function checkWinn() {
    let count = 0;
    for (let i = 0; i <= MAX_COLUM; i++) {
        if (document.getElementById(
            makeStringIdByRowAndColum
            (locationObject.row, i)).style.backgroundColor === RIGHT_GUESS_COLOR) {
            count++;
        }
    }
    return (count === MAX_COLUM + 1)
}

function checkLengthWord(row) {
    return getFullUserWord(row).length === MAX_COLUM + 1;
}