<?php

if ($_GET["guess"] == $_GET["correct"]) { ?>

	Correct! Click <a id="nextq" href=#>here</a> for the next question.

<?php }

else { ?>

	Sorry! Try again.

<?php } ?>