function createGameCookie() {
    document.cookie=SELECTED_WORD_ID+"="+randomWord();
}

function readWordGameFromCookie(){
    return getCookie(SELECTED_WORD_ID);
}
function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
}

function randomWord() {
    let max = WORDS.length - 1;
    let random = Math.ceil(Math.random() * max);
    return WORDS[random];
}
function getFullUserWord(rowNumber) {
    let ans = "";
    for (let i = 0; i <=MAX_COLUM; i++) {
        ans += document.getElementById(makeStringIdByRowAndColum(rowNumber, i)).value;
    }
    return ans;
}