<!DOCTYPE html>
<html>
<head>
	<title>Quiz</title>
	<script type="text/javascript" src="scripts.js"></script>
</head>
<body>

<form>
<label><h2 id="question"></h2></label>
<input id="option1" type="radio" name="guess" value="">&nbsp;<label id="option1label"></label><br>
<input id="option2" type="radio" name="guess" value="">&nbsp;<label id="option2label"></label><br>
<input id="option3" type="radio" name="guess" value="">&nbsp;<label id="option3label"></label><br>
<input id="option4" type="radio" name="guess" value="">&nbsp;<label id="option4label"></label><br>
<input id="submit" type="button" name="submit" value="Submit">
</form>

<p id="display"></p>
<p>You've made <span id="guesses"></span> guesses.</p>
</body>
</html>