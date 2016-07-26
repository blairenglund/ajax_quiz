window.addEventListener('load', function() {

	//Load the questions, options, and answers for the quiz
	var loadq = new XMLHttpRequest()
	loadq.open("get", "questions.txt");
	loadq.send();

	loadq.addEventListener('load', function(e){
		//get the string in JSON and parse it out
		var qstr = e.target.response;
		var parsequestion = JSON.parse(qstr);
		q1 = parsequestion.question1
		q2 = parsequestion.question2

		//populate the quiz fields with the first questionss
		currentq = q1
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
	
	var button = document.getElementById('submit');

	var questionfield = document.getElementById('question');

	var q1 = '';
	var q2 = '';

	var currentq = ''

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

		checker.open("GET", `check_answer.php?guess=${guess}&correct=${correct}`);
		checker.send();

		checker.addEventListener('load', function(e){
			var servresponse = e.target.response;
			display.innerHTML = servresponse;

			var nextq = document.getElementById('nextq')
			debugger;
			nextq.addEventListener('click', function(){
				debugger;
				//populate the quiz fields with the second questions
				currentq = q2;
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
			});
		})
	})
})