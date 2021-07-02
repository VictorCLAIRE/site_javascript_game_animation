<?php
ob_start();
$title="Pong";
?>

    <h1 class="text-center">Pong</h1>
    <div>
        <canvas id="myCanvas" width="700" height="440"></canvas>
    </div>
    

    <br>

</body>

    <script src="assets/js/pong.js"> </script>  

</html>

<?php
$content = ob_get_clean();
//Rappel du template sur chaque page
require "template.php";
?>

