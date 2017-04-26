var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Randomly Generated Computer Pick
var compPick = letterChoices[Math.floor(Math.random() * 25)];


//Beginning Game variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var lettersGuessed = [];

//FUNCTIONS

//Produces new computer pick at end of each game
function updateComputerPick(){
	this.letterToGuess = this.letterChoices[Math.floor(Math.random() * 25)];
		
}

function showGuessLeft() {
    document.querySelector("#guessesLeft").innerHTML = ": " + guessesLeft;
}

function showUserGuess() {
    document.querySelector("#userGuess").innerHTML = "  " + lettersGuessed + "  ";
}

function reset(){
	guesses = 9;
  	guessesLeft = 9;
  	lettersGuessed = [];
  	showGuessLeft();
  	showUserGuess();
  	updateComputerPick();
  }


document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	lettersGuessed.push(userGuess);
	
	guessesLeft--
	showGuessLeft();
	showUserGuess();
	updateComputerPick();
	
	if(guessesLeft > 0){
		if(letterToGuess === compPick){
			wins++
			document.querySelector("#wins").innerHTML = wins;
			reset();
		}
	}else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            reset();
        }
}