window.addEventListener('load', function() {
	
	//var for the button
	var button = document.getElementById('submit');

	var option1 = document.getElementById('option1');
	var option2 = document.getElementById('option2');
	var option3 = document.getElementById('option3');
	var option4 = document.getElementById('option4');
	var display = document.getElementById('display');
	var guess = '';

	option1.addEventListener('click', function(){
		guess = option1.value;
	})
	option2.addEventListener('click', function(){
		guess = option2.value;
	})
	option3.addEventListener('click', function(){
		guess = option3.value;
	})
	option4.addEventListener('click', function(){
		guess = option4.value
	})


	button.addEventListener('click', function(){
		var checker = new XMLHttpRequest();

		checker.open("GET", "check_answer.php");
		checker.send();

		checker.addEventListener('load', function(e){
			var correct = e.target.responseText;
			if (guess == correct) {
				display.innerHTML = `Correct! My favorite dish is ${correct}. Yum!`;
			}
			else if (guess == "eggs benedict"){
				display.innerHTML = `No thank you! Try again`;
			}
			else {
				display.innerHTML = `Sorry, ${guess} is not correct. Try something spicier.`;
			}
		})
	})
})