function createWord(toAdd) {
    let word =makeAElement('div',null,[['id',GAME_WORD_ID],['value',toAdd]]);
    document.body.appendChild(word);
}

function randomWord() {
    let max = WORDS.length - 1;
    let random = Math.ceil(Math.random() * max);
    return WORDS[random];
}

function createWordForGame() {
    createWord(randomWord());
}