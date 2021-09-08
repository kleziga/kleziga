let die = 0;
let turn = 'PLAYER 1'
    
let player1 = {
    'count': 0
}

let player2 = {
    'count': 0
}


const rollDice = ()=>{

    die = Math.floor(Math.random()*6)+1;

    if (die != 1 && turn == 'PLAYER 1' && player1.count < 100) {

        player1.count = player1.count + die;
        document.getElementsByClassName('container8')[0].style.backgroundColor = '#0392cf'

    }

    if (die != 1 && turn == 'PLAYER 2' && player2.count < 100) {

        player2.count = player2.count + die;
        document.getElementsByClassName('container8')[0].style.backgroundColor = '#ee4035'

    }

    if (die == 1){
        //flip turn
        if (turn == 'PLAYER 1') {
            turn = 'PLAYER 2';
            document.getElementsByClassName('container8')[0].style.backgroundColor = '#ee4035';  
        }

        else if (turn == 'PLAYER 2') {
            turn = 'PLAYER 1'; 
            document.getElementsByClassName('container8')[0].style.backgroundColor = '#0392cf';   
        }

    }

    if (player1.count >= 100) {
        player1.count = 100;
        document.getElementById('score1').innerHTML = player1.count
        return;
    }

    else if (player2.count >= 100) {
        player2.count = 0;
        document.getElementById('score1').innerHTML = player2.count
        return;
    }


    document.getElementById('score1').innerHTML = player1.count;
    document.getElementById('score2').innerHTML = player2.count;
    document.getElementById('dicey').innerHTML = die;
    document.getElementById('html-turn').innerHTML = turn;





    //<h3>&nbspPLAYER 1&nbspWINS!&nbspBETTER LUCK NEXT TIME&nbspPLAYER 2&nbsp</h3>
}


 function resetGame() {

    player1.count = 0;
    player2.count = 0;
    die = 0;
    turn = 'PLAYER 1'
    document.getElementById('score1').innerHTML = player1.count;
    document.getElementById('score2').innerHTML = player2.count;
    document.getElementById('dicey').innerHTML = die;
    document.getElementById('html-turn').innerHTML = turn;
    document.getElementsByClassName('container8')[0].style.backgroundColor = '#0392cf'
    return;
}

