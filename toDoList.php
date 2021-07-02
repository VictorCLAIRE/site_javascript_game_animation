    <?php
    ob_start();
    $title="ToDoList";
    ?>
        <h1 class="text-center">ToDoList</h1>
        <div class="todo-form">
            <form class="form-inline" action="">
                <div class="form-group mb-2"> 
                    <input class="form-control todo-input" type="text">
                </div>
                <div class="form-group mb-2">
                    <button class="btn btn-secondary todo-button" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
        <div class="todo-container text-center">
            <ul class="todo-list bg-info m-5">
            </ul>
        </div>


    <?php
    $content = ob_get_clean();
    //Rappel du template sur chaque page
    require "template.php";
    ?>

    </body>
    <script src="assets/js/toDoList.js"> </script>
    
</html>