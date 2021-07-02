<?php
ob_start();
$title="Quizz";
?>

    <h1 class="text-center">Quizz</h1>
   
    <br>

    <div class="container quizz">
        <div id="quizz">
            <h2 class="text-center h2quizz" id="question"></h2>
            <h3 id="score"></h3>
            <div class="choices">
                <button id="guess0" class="">
                    <p id="choice0"></p>
                </button>
                <button id="guess1" class="">
                    <p id="choice1"></p>
                </button>
                <button id="guess2" class="">
                    <p id="choice2"></p>
                </button>
                <button id="guess3" class="">
                    <p id="choice3"></p>
                </button>
            </div>
            <div class="text-center">
                <p id="progress"></p>  
            </div>
        </div>
    </div>


</body>

    <script src="assets/js/quizz.js"> </script>  

</html>

<?php
$content = ob_get_clean();
//Rappel du template sur chaque page
require "template.php";
?>

