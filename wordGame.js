function createWordGameOnCookie() {
    document.cookie=SELECTED_WORD_ID+"="+randomWord();
    makeLocationCookies();
}
function readWordGameFromCookie(){
    return getCookiesByName(SELECTED_WORD_ID);
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