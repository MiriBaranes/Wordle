const ELEMENT_KEY_BORD= ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ך', 'ל', 'מ'
    , 'ם', 'נ', 'ן', 'ס', 'ע', 'פ', 'ף', 'צ', 'ץ', 'ק', 'ר', 'ש', 'ת', 'מחיקה'];
const  LOCATION='location';
const ROW='r';
const COLUM='c';
const WORD_ID='word';
const WORDS=['נדנדה'];
// const WORDS=['שולחן', 'מליון', 'טלפון', 'בדיקה',
//     'שירון', 'מעטפה', 'מגירה', 'מדפסת', 'בקבוק',
//     'תאגיד', 'חולצה', 'חצאית', 'בניין', 'עבודה', 'סידור',
//     'תמונה', 'אפרסק', 'נדנדה', 'תינוק', 'שמונה'];
const WORD_INDEX=1;
const SELECTED_WORD_ID='selected_word';
const SENT_BUTTON_ID='sent';
const RIGHT_GUESS_COLOR='green';
const RIGHT_GUESS_IN_WRONG_LOCATION='orange';
const WRONG_GUESS_COLOR='gray';
const MAX_ROW=5;
const MAX_COLUM=4;
const KEY_BOARD_CLASS='key_board';
const TO_REMOVE=1;
const TO_MOVE=0;
const TO_MOVE_BY_CLICK=2;
const WORDS_BOARD='words_board';
const TO_REMOVE_THIS_INPUT=3;
const ERROR_MESSAGE="There are empty cells!";
const DIV='div';
const INPUT='input';
const NONE='none';
const BUTTON='button';
const CHECK_VALUE='בדיקה';
const WINN_IMG="https://t3.ftcdn.net/jpg/03/14/56/66/360_F_314566645_UNHlYyGK2EVdGQ8MoNw95vvH44yknrc7.jpg";
const LOST_IMG="data:image/png;base64,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";
const LOST_MESSAGE="You've lost, the right word is---->  '";
const WIN_MESSAGE="Congratulations, you won!";