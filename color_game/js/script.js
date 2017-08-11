// Color Game
var numSquares = 8;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var result = document.getElementById("result");
var jumbotron = document.querySelector(".jumbotron");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset-btn");
var modeButtons = document.querySelectorAll(".mode");

init(); //this will run on load

function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("custom-active");
			modeButtons[1].classList.remove("custom-active");
			this.classList.add("custom-active");
			//'ternary operator'...this can replace the if/else...
			//this.textContent === "Easy" ? numSquares = 4: numSquares = 8;
			if (this.textContent === "Easy"){
				numSquares = 4;
			} else {
				numSquares = 8;
			}
			reset();
		});
	}
}

function setupSquares(){
	// Loop that will check each square...
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				result.textContent = "Correct!";
				result.style.color = pickedColor;
				jumbotron.style.background = pickedColor;
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				result.textContent = "Sorry, Try Again!";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	result.textContent = " ";
	result.style.color = "#232323";
	jumbotron.style.background = "#232323";
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function(){
	reset();
});





function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color, push to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	// to make a random color each num needs to 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





















