<?php
    ob_start();
    $title="ToDoList";
    ?>
        <h1 class="text-center">Accueil </h1>


    <?php
    $content = ob_get_clean();
    //Rappel du template sur chaque page
    require "template.php";
    ?>

    </body>
</html>