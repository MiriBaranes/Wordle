function end(winn) {
    document.getElementById(WORDS_BOARD).remove();
    document.getElementById(SENT_BUTTON_ID).remove();
    document.getElementById(KEY_BOARD_CLASS).remove();
    const values=getTextByWinnOrLost(winn);
    document.body.appendChild(makeAElement(DIV,{class:'header',id:'message'},values[0]));
    document.body.style.background='url('+(values[1])+")";

}
function getTextByWinnOrLost(winn){
    if (winn){
        return [WIN_MESSAGE,WINN_IMG];
    }
    return [LOST_MESSAGE+readWordGameFromCookie()+"'.",LOST_IMG];
}
