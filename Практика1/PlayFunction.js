    let numberOfBoat = 0;

    let pole = [
        ['.','.','x','x','x','.','.','.','.','.'],
        ['x','.','.','.','.','.','x','x','x','x'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['x','.','.','x','x','x','.','.','.','x'],
        ['.','.','.','.','.','.','.','.','.','x'],
        ['.','x','.','.','.','.','.','x','.','.'],
        ['.','x','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','x','.','.','.'],
        ['.','.','.','x','.','.','x','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.']
    ];

    let myPole = [
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.','.','.','.']
    ];

    const display = document.querySelector("#display");
    
    display.innerHTML += "<p></p> "

    for(let i = 65; i <= 75; i++){

        if (i == 73){

            i += 1;

        }

        let ch = String(i);

        display.innerHTML += String.fromCharCode(ch);
    }

    for(let i = 0; i < myPole.length; i++){

        display.innerHTML += "<p></p> " + (i + 1)  + ' ';

        for(let j = 0; j < myPole[i].length; j++){

            display.innerHTML += myPole[i][j] + ' ';
        }
    }

    function Proverka(i, j){

        let numberOfBoat = 0;
        let bukva = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'];

        if(i < 'A' || i > 'K'){

            alert("Такой координаты не существует");

        }
        else{  

            for(let b = 0; b < bukva.length; b++){

                if(bukva[b] == i){

                    i = b;
                    break;

                }

            }

            if(j < '0' || j > '9'){

                alert("Такой координаты не существует");

            }

            if(pole[j][i] == 'x') {

                alert("Попал!");

                myPole[j][i] = 'x';

                Print();

                Boat(j, i);

            }
            else if (pole[j][i] == '.'){

                myPole[j][i] = '#';

                Print();

                alert("Мимо!");
            } 

        }
    }


    function Play(){

        let i = document.getElementById("message").value[0];
        let j;

        if(i == 'I'){

            i = 'J';

        }

        if(document.getElementById("message").value[2] == null){

            j = Number(document.getElementById("message").value[1]) - 1;

        } else{

            j = Number(document.getElementById("message").value[1] + document.getElementById("message").value[2]) - 1;

        }

        Proverka(i, j);
    }