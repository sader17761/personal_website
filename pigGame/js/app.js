/*
PIG GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variable Declarations...
var scores, roundScore, activePlayer, gamePlaying, playerScores, audioWinner, audioRoll, audioLoser;

init(); // initializes/resets game

playerScores = [0, 0];
audioWinner = document.getElementById("winAudio");
audioRoll = document.getElementById("rollAudio");
audioLoser = document.getElementById("loserAudio");



//this adds an 'event listener' and 'anonymous function' to the 'role dice button'...
document.querySelector('.button-roll').addEventListener('click', function(){
	// determines whether gamePlaying is true or false...
	if(gamePlaying){
		rollAudio();
	//1. need random number
		var diceOne = Math.floor(Math.random() * 6) + 1; //generates random numbers between 1-6;
		var diceTwo = Math.floor(Math.random() * 6) + 1; //generates random numbers between 1-6;
		var rotateOne = Math.floor(Math.random() * 360) + 1; //generates random numbers between 1-360;
		var rotateTwo = Math.floor(Math.random() * 360) + 1; //generates random numbers between 1-360;
	
	//2. display the result of the random number/dice image...
		var diceDOMOne = document.querySelector('.dice-one');
		var diceDOMTwo = document.querySelector('.dice-two');
		diceDOMOne.style.display = 'block';
		diceDOMOne.src = 'img/dice/dice-' + diceOne + '.png';
		diceDOMOne.style.transform = 'rotate(' + rotateOne + 'deg)';
		diceDOMTwo.style.display = 'block';
		diceDOMTwo.src = 'img/dice/dice-' + diceTwo + '.png';
		diceDOMTwo.style.transform = 'rotate(' + rotateTwo + 'deg)';

	//3. update the round score, but only if the rolled number was NOT a 1
		if(diceOne !== 1 && diceTwo !== 1){
			//add score to current
			roundScore += (diceOne + diceTwo);
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else if (diceOne === 1 && diceTwo === 1) {
			//reset the 'player score' to 0...
			document.getElementById('score-' + activePlayer).textContent = '0';
			scores[activePlayer] = 0;
			nextPlayer();
			loserAudio();
		} else {
			//change to the next player...
			nextPlayer();
		}
	}
});


//this adds an 'event listener' and 'anonymous function' to the 'Hold button'...
document.querySelector('.button-hold').addEventListener('click', function(){
	if(gamePlaying){
	//1. add 'currentScore to globalScore'...
		scores[activePlayer] += roundScore;

	//2. update the UI...
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//this grabs the value from the input box...
		var input = document.querySelector('.final-score').value;
		var winningScore;

		// undifined, null, 0 or '' are COERCED to false...anything is COERCED to true
		if(input){
			winningScore = input;
		} else {
			winningScore = 100;
		}


	//3. check if player won the game...
		if(scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			//remove the dice if 'winner'...
			document.querySelector('.dice-one').style.display = 'none';
			document.querySelector('.dice-two').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			//add points to winners score...
			playerScores[activePlayer] += 1;
			document.querySelector('#player' + activePlayer + '-score').textContent = playerScores[activePlayer];
			//play sound...
			winAudio();
			//set gamePlaying to false...
			gamePlaying = false;
		} else if (roundScore === 0) {
			alert("Please roll the dice before you 'Hold'.");
		} else {
	//4. change active player...
			nextPlayer();
		}
	}
});


// New Game Button - Event Listener
document.querySelector('.button-new').addEventListener('click', init);

document.querySelector('#reset-button').addEventListener('click', function(){
	init();
	playerScores[0] = 0;
	playerScores[1] = 0;
	document.getElementById('player0-score').textContent = 0;
	document.getElementById('player1-score').textContent = 0;
	document.querySelector('.final-score').value = '';
});


// this gets called when we start the first game, as well as when we click the 'new game' button...
function init(){
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	
	//changes the display of the 'dice' class...
	document.querySelector('.dice-one').style.display = 'none';
	document.querySelector('.dice-two').style.display = 'none';


	//setting the current and total scores to '0'...
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}


// a function that handles the changing of our Players...
function nextPlayer(){
	//updating the next player (using the ternary operator)
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //example of 'ternary operator'
		roundScore = 0;

		//reset the 'current score' to 0...
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//add and remove class to change player(add-remove-toggle)...
		/*document.querySelector('.player-0-panel').classList.remove('active');
		  document.querySelector('.player-1-panel').classList.add('active');*/
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//this hides the dice if it equals 1...
		document.querySelector('.dice-one').style.display = 'block';
		document.querySelector('.dice-two').style.display = 'block';
}


function winAudio() { 
	audioWinner.volume = 0.5;
    audioWinner.play(); 
}

function rollAudio() { 
	audioRoll.volume = 0.5;
    audioRoll.play(); 
}

function loserAudio() { 
	audioLoser.volume = 0.5;
    audioLoser.play(); 
}

