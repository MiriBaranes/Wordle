function getLocationObject() {
    const locationElement = document.getElementById(WORDS_BOARD);
    return {
        location: locationElement,
        row: locationElement.getAttribute(ROW),
        colum: locationElement.getAttribute(COLUM),
        id: ROW+locationElement.getAttribute(ROW)+COLUM+locationElement.getAttribute(COLUM)
    };
}
function getLocationObject1() {
    const row = getCookiesByName("row");
    const colum= getCookiesByName("colum");
    return {
        row:  getCookiesByName("row"),
        colum: getCookiesByName("colum"),
        id: ROW+getCookiesByName("row")+COLUM+getCookiesByName("colum")
    };
}
function setFocus1() {
    document.getElementById(getLocationObject1().id).focus();
}
function setLocation1(type, colum) {
    let newColum = colum;
    if (type === TO_REMOVE && colum > 0) {
        newColum--;
    } else if (type === TO_MOVE) {
        if (colum < MAX_COLUM) {
            newColum++;
        }
    }
    setColumNumber1(newColum);
}
function setColumNumber1(newColum) {
    setCookiesByName('colum',newColum);
    if (newColum !== MAX_COLUM) {
        setFocus();
    }
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
function setFocus() {
    getActiveInputJsonObject().myElement.focus();
}
function makeLocationCookies(){
    document.cookie="row=0";
    document.cookie="colum=0"
}
function getCookiesByName(name){
    return  document.cookie.split(name)[1].split("=")[1].split(";")[0];
}
function setCookiesByName(name,newVal){
    return  document.cookie.replace(getCookiesByName(name),newVal);
}