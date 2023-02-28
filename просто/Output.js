function Print(){

    display.innerHTML = " ";

    display.innerHTML += "<p></p> "

    for(let i = 65; i <= 75; i++){

        if (i == 73){

            i += 1;

        }

        let ch = String(i);

        display.innerHTML += String.fromCharCode(ch);
    }

    for(let i = 0; i < myPole.length; i++){

        display.innerHTML += "<p></p> " + (i + 1);

        for(let j = 0; j < myPole[i].length; j++){

            display.innerHTML += myPole[i][j] + ' ';
        }
    }

}