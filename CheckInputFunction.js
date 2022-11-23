function sentButtonAct() {
    let locationObject = getLocationObject();
    let row = Number(locationObject.row);
    if (checkLengthWord(row)) {
        styleElements(row, getFullUserWord(row));
        if (!checkWinn(row)) {
            if (row !== MAX_ROW) {
                row = row + 1;
                locationObject.location.setAttribute(ROW, row.toString());
                locationObject.location.setAttribute(COLUM, "0");
            } else {
                end(checkWinn(row));
            }
        } else {
            end(checkWinn(row))
        }
    } else {
        alert(ERROR_MESSAGE);
    }
}

function checkWinn(endRow) {
    let count = 0;
    for (let i = 0; i <= MAX_COLUM; i++) {
        if (document.getElementById(makeStringIdByRowAndColum(endRow, i)).style.backgroundColor === RIGHT_GUESS_COLOR) {
            count++;
        }
    }
    return (count === MAX_COLUM+1)
}

function checkLengthWord(row) {
    return getFullUserWord(row).length === MAX_COLUM + 1;
}