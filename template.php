<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    
    <title><?= $title ?></title>
</head>

<body>
    <!-- Header-->
    <header>
        <?php
        require "menu.php";
        ?>
    </header>
    
    <!-- Content-->
    <div class="mt-5 container">
        <br>
        <?= $content ?>
    </div>

    <!-- Footer-->
    <footer>
        <?php
        require "footer.php";
        ?>
    </footer>

</body>
</html>
