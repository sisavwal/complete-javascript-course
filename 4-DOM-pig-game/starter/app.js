/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, lastRoll, winningScore;

init();

document.querySelector('#winning-score').addEventListener('blur', function() {
    winningScore = document.getElementById('winning-score').value;
})

console.log(winningScore);




document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //* 1. random number

        rollDice();

        //* 3. Update the round score if number is not 1
        if (dice === 6 && lastRoll === 6) {
            scores[activePlayer] = 0
            updateScore();
            nextPlayer();
//            lastRoll = null;
        } else {
            lastRoll = dice;
            checkRoll();
            
        }
        
        console.log(lastRoll);
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        //* Add current score to global score
        scores[activePlayer] += roundScore;
        roundScore = 0;

        //*update the UI
        updateScore();


        //*Check if player Won
        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
            //document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            //   document.querySelector('name-' + activePlayer).classList.add('.winner');
        } else {
            //* Next player
            nextPlayer();
        }
    }


});

document.querySelector('.btn-new').addEventListener('click', init);

function updateScore() {
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

function checkRoll() {
    if (dice !== 1) {
        //* add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        //* Next player
        nextPlayer();
    }


}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    lastRoll = null;
    winningScore = 100;

    document.querySelector('#current-' + activePlayer).textContent = dice;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('winning-score').value = winningScore;
    //document.querySelector('.btn-roll').style.display = 'block';

}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastRoll = null;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.dice').style.display = 'none';
}

function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
}
