<?php
ob_start();
$title="Casse-brique";
?>

    <h1 class="text-center">Casse-brique</h1>

    <div>
        <canvas id="myCanvas" width="480" height="320"></canvas>
    </div>
    

    <br>

</body>

    <script src="assets/js/casseBrique.js"> </script>  

</html>

<?php
$content = ob_get_clean();
//Rappel du template sur chaque page
require "template.php";
?>

