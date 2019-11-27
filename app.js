/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentPlayer=0;
var roundScore=0
var scores=[0,0]
//Reset overall scores to 0
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';

//Reset current scores to 0
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

//Hide dice
document.querySelector('.dice').style.display="none";

//Roll Dice button on click function
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display="block";
    document.querySelector('.dice').src="dice-"+dice+".png";
    if(dice!==1){
        roundScore=roundScore+dice;
        document.getElementById('current-'+ currentPlayer).textContent=roundScore;

    } else {
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer === 0;
        document.querySelector('.player-0-panel').classList.toggle('.ctive');
        document.querySelector('.player-1-panel').classList.toggle('.active');


    }



});