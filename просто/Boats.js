function Boat(){

    if (myPole[1][0] == 'x'){

        if(pole[1][0] == 'x'){

            pole[1][0] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }
    }
    if (myPole[3][0] == 'x'){

        if(pole[3][0] == 'x'){

            pole[3][0] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }
    }
    if (myPole[8][3] == 'x'){

        if(pole[8][3] == 'x'){

            pole[8][3] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }
    }
    if(myPole[5][7] == 'x'){

        if(pole[5][7] == 'x'){

            pole[5][7] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }

    }
    if (myPole[5][1] == 'x' && myPole[6][1] == 'x'){

        if (pole[5][1] == 'x' && pole[6][1] == 'x'){

            pole[5][1] = '#';
            pole[6][1] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }

    }
    if (myPole[7][6] == 'x' && myPole[8][6] == 'x'){

        if (pole[7][6] == 'x' && pole[8][6] == 'x'){

            pole[7][6] = '#';
            pole[8][6] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }

    }
    if (myPole[3][9] == 'x' && myPole[4][9] == 'x'){

        if (pole[3][9] == 'x' && pole[4][9] == 'x'){

            pole[3][9] = '#';
            pole[4][9] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);
        
        }

    }
    if (myPole[0][2] == 'x' && myPole[0][3] == 'x' && myPole[0][4] == 'x'){

        if(pole[0][2] == 'x' && pole[0][3] == 'x' && pole[0][4] == 'x'){
            
            pole[0][2] = '#';
            pole[0][3] = '#';
            pole[0][4] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);

        }

    }
    if(myPole[3][3] == 'x' && myPole[3][4] == 'x' && myPole[3][5] == 'x'){
        
        if(pole[3][3] == 'x' && pole[3][4] == 'x' && pole[3][5] == 'x'){
            
            pole[3][3] = '#';
            pole[3][4] = '#';
            pole[3][5] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);

        }

    }
    if (myPole[1][6] == 'x' && myPole[1][7] == 'x' && myPole[1][8] == 'x'&& myPole[1][9] == 'x'){

        if(pole[1][6] == 'x' && pole[1][7] == 'x' && pole[1][8] == 'x' && pole[1][9] == 'x'){
            
            pole[1][6] = '#';
            pole[1][7] = '#';
            pole[1][8] = '#';
            pole[1][9] = '#';

            numberOfBoat += 1;

            alert("Убит! Количество убитых кораблей = " + numberOfBoat);

        }

    }
    if(numberOfBoat == 10){

        aler("Победа!")

    }

}