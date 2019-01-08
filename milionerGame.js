var promt, ok;
alert("Добро пожаловать в игру кто хочет стать милионером")
do{
for (live = 0; live < text.length; live++) {
    if(live <= 3){
    isGame(live)
    if(promt == -1){
        break;
    }else if(promt == 'Gameover'){
        alert('Ответ не правильный! а правильный ответ был № ' + text[live].win);
        promt = prompt("Хотите сыграть ещё? \n Ок - да \n -1 - нет")
        break;
    }
  }
    if(live == 4){
    isGame(live)
    if(promt == -1){
        break;
    }else if(promt == 'Gameover'){
        alert('Ответ не правильный! а правильный ответ был № ' + text[live].win);
        promt = prompt("Хотите сыграть ещё? \n Ок - да \n -1 - нет")
        break;
    }else{
        alert("Поздравляю вы милионер!")
        promt = prompt("Хотите сыграть ещё? \n Ок - да \n -1 - нет")
        break;
    }
  }
}
}while(promt != -1);
function isGame(i) {
    do {
        ok = false;
        promt = +prompt(text[i].title + text[i].text + text[i].a1 + text[i].a2 + text[i].a3 + text[i].a4 + 'На сумму: ' + text[i].summ + '\n' + "Если надоело играть введите -1");
        if (promt == -1) {
            break;
        }
        else {
            ok = checkAnswer(promt);
        }
    } while (!ok);
    if(promt == text[i].win){
        alert("Поздравляю! ответ правильный и вы выиграете - " + text[i].summ);
    }else if(promt == -1){
        alert("До скорой встречи!");
    }else{
        promt = 'Gameover';
    }
}

function checkAnswer(promt) {
    if (isNaN(promt) || !isFinite(promt)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (promt < 1 || promt > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}