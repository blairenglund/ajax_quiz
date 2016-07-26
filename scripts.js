window.addEventListener('load', function() {
	
	//var for the button
	var button = document.getElementById('submit');

	var question = document.getElementById('question');

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

		checker.open("GET", "check_answer.php?food="+guess);
		checker.send();

		debugger;

		checker.addEventListener('load', function(e){
			display.innerHTML = e.target.response;
		})
	})
})