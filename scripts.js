window.addEventListener('load', function() {

	//Load the questions, options, and answers for the quiz
	var loadq = new XMLHttpRequest()
	loadq.open("get", "questions.txt");
	loadq.send();

	loadq.addEventListener('load', function(e){
		//get the string in JSON and parse it out
		var qstr = e.target.response;
		var parsequestion = JSON.parse(qstr);

		//variable for each set of questions and answere
		q1 = parsequestion.question1;
		q2 = parsequestion.question2;
		q3 = parsequestion.question3;
		q4 = parsequestion.question4;
		q5 = parsequestion.question5;

		//populate the quiz fields with the first question and answers
		currentq = q1;
		questionfield.innerHTML = currentq.question;
		option1.value = currentq.options.option1;
		option2.value = currentq.options.option2;
		option3.value = currentq.options.option3;
		option4.value = currentq.options.option4;
		option1label.innerHTML = currentq.options.option1;
		option2label.innerHTML = currentq.options.option2;
		option3label.innerHTML = currentq.options.option3;
		option4label.innerHTML = currentq.options.option4;
		correct = currentq.correct;
	})
	
	// the submit button
	var button = document.getElementById('submit');

	// the question field
	var questionfield = document.getElementById('question');

	var q1 = '';
	var q2 = '';
	var q3 = '';
	var q4 = '';
	var q5 = '';

	var currentq = '';

	//the options and their labels
	var option1 = document.getElementById('option1');
	var option1label = document.getElementById('option1label');
	var option2 = document.getElementById('option2');
	var option2label = document.getElementById('option2label');
	var option3 = document.getElementById('option3');
	var option3label = document.getElementById('option3label');
	var option4 = document.getElementById('option4');
	var option4label = document.getElementById('option4label');
	var display = document.getElementById('display');
	var guess = '';
	var correct = '';

	var totalguesses = 0;

	document.getElementById('guesses').innerHTML = totalguesses;

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
		guess = option4.value;
	})

	//function to reset radio buttons when new question is loaded
	function uncheckall() {
		option1.checked=false;
		option2.checked=false;
		option3.checked=false;
		option4.checked=false;
	}


	button.addEventListener('click', function(){

		totalguesses+=1;
		document.getElementById('guesses').innerHTML = totalguesses;

		var checker = new XMLHttpRequest();

		checker.open("GET", `check_answer.erb?guess=${guess}&correct=${correct}`);
		checker.send();

		checker.addEventListener('load', function(e){
			var servresponse = e.target.response;

			if (currentq == q5) {
				if (servresponse == "Correct!") {
					display.innerHTML = "You did it! We're friends now!";
				}
				else if (servresponse == "Sorry!"){
					display.innerHTML = "Almost! Try another answer!"
				}
			}
			else {
				if (servresponse == "Correct!") {
					display.innerHTML = "Yes! Click <a href='#' id='nextq'>here</a> for the next question.";
					nextq = document.getElementById('nextq');
				}
				else if (servresponse == "Sorry!"){
					display.innerHTML = "Sorry, wrong answer. Try another one!"
				}
			}


			var nextq = '';


			nextq.addEventListener('click', function(){
				
				if (currentq == q1){
					uncheckall();
					currentq = q2;
					//populate the quiz fields with the second questions
					questionfield.innerHTML = currentq.question;
					option1.value = currentq.options.option1;
					option2.value = currentq.options.option2;
					option3.value = currentq.options.option3;
					option4.value = currentq.options.option4;
					option1label.innerHTML = currentq.options.option1;
					option2label.innerHTML = currentq.options.option2;
					option3label.innerHTML = currentq.options.option3;
					option4label.innerHTML = currentq.options.option4;
					correct = currentq.correct;
					display.innerHTML = '';	
				}
				else if (currentq == q2){
					uncheckall();
					currentq = q3;
					//populate the quiz fields with the second questions
					questionfield.innerHTML = currentq.question;
					option1.value = currentq.options.option1;
					option2.value = currentq.options.option2;
					option3.value = currentq.options.option3;
					option4.value = currentq.options.option4;
					option1label.innerHTML = currentq.options.option1;
					option2label.innerHTML = currentq.options.option2;
					option3label.innerHTML = currentq.options.option3;
					option4label.innerHTML = currentq.options.option4;
					correct = currentq.correct;
					display.innerHTML = '';
				}
				else if (currentq == q3){
					uncheckall();
					currentq = q4;
					//populate the quiz fields with the second questions
					questionfield.innerHTML = currentq.question;
					option1.value = currentq.options.option1;
					option2.value = currentq.options.option2;
					option3.value = currentq.options.option3;
					option4.value = currentq.options.option4;
					option1label.innerHTML = currentq.options.option1;
					option2label.innerHTML = currentq.options.option2;
					option3label.innerHTML = currentq.options.option3;
					option4label.innerHTML = currentq.options.option4;
					correct = currentq.correct;
					display.innerHTML = '';
				}
				else if (currentq == q4){
					uncheckall();
					currentq = q5;
					//populate the quiz fields with the second questions
					questionfield.innerHTML = currentq.question;
					option1.value = currentq.options.option1;
					option2.value = currentq.options.option2;
					option3.value = currentq.options.option3;
					option4.value = currentq.options.option4;
					option1label.innerHTML = currentq.options.option1;
					option2label.innerHTML = currentq.options.option2;
					option3label.innerHTML = currentq.options.option3;
					option4label.innerHTML = currentq.options.option4;
					correct = currentq.correct;
					display.innerHTML = '';
				}
			});
		})
	})
})