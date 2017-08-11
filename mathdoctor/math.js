	var answer = 0;
	var numCorrect = 0;
	var numIncorrect = 0;
	var percent = 0;
	var numProblem = 0;
	
	
/* When you click the Addition 'Start' Button */
function events() {
	addition();
	counter();
	checkForm();
}

/* When you click the Subtraction 'Start' Button */
function subtevent(){
	subtraction();
	counter();
	checkForm();
}

/* When you click the Multiplication 'Start' Button */
function multevent(){
	multiplication();
	counter();
	checkForm();
}

/* When you click the Division 'Start' Button */
function divevent(){
	division();
	counter();
	checkForm();
}

/* When you click the 'Check Answer' Button */
function calculate() {
	eval();
	stopAll();
}

/* When you click the 'Next Problem' button */
function newProblemAddition() {
	addition();
	counter();
}

function newProblemSubtraction() {
	subtraction();
	counter();
}

function newProblemMultiplication() {
	multiplication();
	counter();
}

function newProblemDivision() {
	division();
	counter();
}


function addition() {
	var minNum = parseInt(document.getElementById("min").value);
	var maxNum = parseInt(document.getElementById("max").value);
	var probs = document.getElementById("probNums").value;
    var a = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    var b = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    document.getElementById("topNum").innerHTML = a;
    document.getElementById("botNum").innerHTML = b;
    document.getElementById("txtAnswer").value = " ";
    document.getElementById("totProbs").innerHTML = probs;
    document.getElementById("response").innerHTML = " ";
    document.getElementById("btnCheck").disabled = false;
    document.getElementById("btnselect").disabled = true;
    answer = a + b;
	return answer;
}

function subtraction() {
	var minNum = parseInt(document.getElementById("min").value);
	var maxNum = parseInt(document.getElementById("max").value);
	var probs = document.getElementById("probNums").value;
    var a = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    var b = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    document.getElementById("txtAnswer").value = " ";
    document.getElementById("totProbs").innerHTML = probs;
    document.getElementById("response").innerHTML = " ";
    document.getElementById("btnCheck").disabled = false;
    document.getElementById("btnselect").disabled = true;
	
	if(a < b) {
		document.getElementById("topNum").innerHTML = b;
		document.getElementById("botNum").innerHTML = a;
		answer = b - a;
		return answer;
	} else {
		document.getElementById("topNum").innerHTML = a;
		document.getElementById("botNum").innerHTML = b;
		answer = a - b;
		return answer;
	}
}


function multiplication() {
	var minNum = parseInt(document.getElementById("min").value);
	var maxNum = parseInt(document.getElementById("max").value);
	var probs = document.getElementById("probNums").value;
    var a = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    var b = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    document.getElementById("topNum").innerHTML = a;
    document.getElementById("botNum").innerHTML = b;
    document.getElementById("txtAnswer").value = " ";
    document.getElementById("totProbs").innerHTML = probs;
    document.getElementById("response").innerHTML = " ";
    document.getElementById("btnCheck").disabled = false;
    document.getElementById("btnselect").disabled = true;
	answer = a * b;
	return answer;
}


function division() {
	var minNum = parseInt(document.getElementById("min").value);
	var maxNum = parseInt(document.getElementById("max").value);
	var probs = document.getElementById("probNums").value;
    var a = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    var b = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    document.getElementById("txtAnswer").value = " ";
    document.getElementById("totProbs").innerHTML = probs;
    document.getElementById("response").innerHTML = " ";
    document.getElementById("btnCheck").disabled = false;
    document.getElementById("btnselect").disabled = true;

	if(a < b) {
		document.getElementById("topNum").innerHTML = b;
		document.getElementById("botNum").innerHTML = a;
		answer = b / a;
		var result = Math.round(answer*100)/100;
		answer = result;
		return answer;
	} else {
		document.getElementById("topNum").innerHTML = a;
		document.getElementById("botNum").innerHTML = b;
		answer = a / b;
		var result = Math.round(answer*100)/100;
		answer = result;
		return answer;
	}
}


function eval() {
	var inputAnswer = document.getElementById("txtAnswer").value;

	if (document.getElementById("txtAnswer").value == " "){
		alert("Oops, your answer is blank.");
	} else {
		if(isNaN(inputAnswer)){
			alert("Invalid input. Please enter a valid number.");
		} else {
			if(answer == document.getElementById("txtAnswer").value) {
				document.getElementById("response").innerHTML = "That's Correct!!";
				document.getElementById("response").style.color = "green";
				numCorrect++;
				document.getElementById('correct').innerText = numCorrect;	
				/* Calculating Percentage */
				var x = numCorrect;
				var y = document.getElementById("probNums").value;
				var total = (x / y) * 100;
				var result = total.toFixed(0);
				document.getElementById("percentage").innerHTML = result;
				document.getElementById("btnCheck").disabled = true;	
			} else {
				document.getElementById("response").innerHTML = "Sorry, the answer is: " + answer;
				document.getElementById("response").style.color = "red";
				numIncorrect++;
				document.getElementById('incorrect').innerText = numIncorrect;
				document.getElementById("btnCheck").disabled = true;
			}
		}
	}
}

function counter(){
	numProblem++;
	document.getElementById('currentProb').innerText = numProblem;

	if(numProblem == document.getElementById("probNums").value){
		document.getElementById("response").innerHTML = "This is your last Problem!";
		document.getElementById("response").style.color = "blue";
		document.getElementById("next").disabled = true;
	}
}

function stopAll() {
	var totalProblems = document.getElementById("probNums").value
	var scoreTotal = numCorrect + numIncorrect;

	if (scoreTotal == totalProblems){
		document.getElementById("next").disabled = true;
	} else {
		document.getElementById("next").disabled = false;
	}
}

function ResetAll(){
	probNums = 0;
	min = 0;
	max = 0;

	numProblem = 0;
	currentProb = 0;
	totProbs = 0;	

	numCorrect = 0;
	numIncorrect = 0;
	percent = 0;

	topNum = 0;
	botNum = 0;

	document.getElementById("probNums").value = " ";
	document.getElementById("min").value = " ";
	document.getElementById("max").value = " ";

	document.getElementById("currentProb").innerHTML = 0;
	document.getElementById("totProbs").innerHTML = 0;

	document.getElementById("correct").innerHTML = 0;
	document.getElementById("incorrect").innerHTML = 0;
	document.getElementById("percentage").innerHTML = 0;

	document.getElementById("topNum").innerHTML = 0;
	document.getElementById("botNum").innerHTML = 0;
	document.getElementById("txtAnswer").value = " ";
	document.getElementById("response").innerHTML = " ";

	document.getElementById("btnselect").disabled = false;
	document.getElementById("btnCheck").disabled = false;
	document.getElementById("next").disabled = false;	
}

function checkForm(){


	if(myForm.probNums.value == "")
	{
		ResetAll();
		alert("Number of Problems field was left Empty!");
		location.reload();
		return false;

	} else {

		if(isNaN(myForm.probNums.value))
		{
			ResetAll();
			alert("Number of Problems:  Invalid Input!");
			location.reload();
			return false;	

		} else {

			if(myForm.probNums.value < 1 || myForm.probNums.value > 100)
			{
				ResetAll();
				alert("Number of Problems must be between 1 and 100.");
				location.reload();
				return false;			
			}
		}
	}



	if(myForm.min.value == "")
	{
		ResetAll();
		alert("Minimum Number field was left Empty!");
		location.reload();
		return false;

	} else {

		if(isNaN(myForm.min.value))
		{
			ResetAll();
			alert("Minimum Number:  Invalid Input!");
			location.reload();
			return false;	

		} else {

			if(myForm.min.value < 0 || myForm.min.value > 1000)
			{
				ResetAll();
				alert("Minimum Number must be between 0 and 1000.");
				location.reload();
				return false;			
			}
		}
	}	



	if(myForm.max.value == "")
	{
		ResetAll();
		alert("Maximum Number field was left Empty!");
		location.reload();
		return false;

	} else {

		if(isNaN(myForm.max.value))
		{
			ResetAll();
			alert("Maximum Number:  Invalid Input!");
			location.reload();
			return false;	

		} else {

			if(myForm.max.value < 0 || myForm.max.value > 1000)
			{
				ResetAll();
				alert("Minimum Number must be between 0 and 1000.");
				location.reload();
				return false;			
			}
		}
	}









}

