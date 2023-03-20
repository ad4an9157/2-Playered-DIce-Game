function whowins(){
    var dice1 = roll();
    var dice2= roll();
    document.getElementById("player1dice").innerHTML= '<img src="images/'+dice1+'.png"></img>';
    document.getElementById("player2dice").innerHTML= '<img src="images/'+dice2+'.png"></img>';

    if(dice1>dice2){
        return 'Player 1';
    }
    else if(dice2>dice1){
        return 'Player 2';
    }
    else
        return 'No one';
    
}

function roll(){
    var random = Math.random();
    random = Math.ceil(random*6);
    return random;
}


document.getElementById("main-header").innerText=whowins()+(" wins the game !");