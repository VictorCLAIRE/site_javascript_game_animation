<?php
ob_start();
$title="Jump";
?>

    <h1 class="text-center">Jump</h1>
    <div>
        <canvas id="myCanvas" width="700" height="500"></canvas>
    </div>
    

    <br>

</body>

    <script src="assets/js/jump.js"> </script>  

</html>

<?php
$content = ob_get_clean();
//Rappel du template sur chaque page
require "template.php";
?>

