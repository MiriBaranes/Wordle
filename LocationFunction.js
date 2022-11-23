function getLocationObject() {
    const locationElement = document.getElementById(WORDS_BOARD);
    return {
        location: locationElement,
        row: locationElement.getAttribute(ROW),
        colum: locationElement.getAttribute(COLUM),
        id: ROW + locationElement.getAttribute(ROW) + COLUM + locationElement.getAttribute(COLUM)
    };
}

function setLocation(type, colum) {
    let newColum = colum;
    if (type === TO_MOVE && colum <= MAX_COLUM) {
        newColum++;
    }
    const locationElement = getLocationObject().location;
    setColumNumber(newColum, locationElement);
}

function setColumNumber(newColum, locationElement) {
    locationElement.setAttribute(COLUM, String(newColum));
    getActiveInputJsonObject().myElement.focus();
}

function setFocus() {
    getActiveInputJsonObject().myElement.focus();
}

function getCookiesByName(name) {
    return document.cookie.split(name)[1].split("=")[1].split(";")[0];
}
