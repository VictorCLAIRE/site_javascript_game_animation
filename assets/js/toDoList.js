
        //selecteurs
        const todoInput = document.querySelector(".todo-input");
        const todoButton = document.querySelector(".todo-button");
        const todoList = document.querySelector(".todo-list");
        const todos = todoList.childNodes;


        //ecouteurs
        document.addEventListener("DOMContentLoaded", getTodos);
        todoButton.addEventListener("click", addTodo);
        todoList.addEventListener("click", deleteCheck);

        //functions
        function addTodo(event){
            event.preventDefault();

            //Todo DIV
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

                //créer le li
                const newTodo = document.createElement("li");
                newTodo.innerText = todoInput.value ;
                newTodo.classList.add("todo-item");
                todoDiv.appendChild(newTodo);

                //Ajouter la sauvegarde localStorage
                saveLocalTodos(todoInput.value);

                //Button Check
                const completedbutton = document.createElement("button");
                completedbutton.innerText= "Check"
                completedbutton.classList.add("completed-btn");
                completedbutton.classList.add("btn");
                completedbutton.classList.add("btn-light");
                todoDiv.appendChild(completedbutton);

                //Button Trash
                const trashbutton = document.createElement("button");
                trashbutton.innerText= "trash"
                trashbutton.classList.add("trash-btn");
                trashbutton.classList.add("btn");
                trashbutton.classList.add("btn-danger");
                todoDiv.appendChild(trashbutton);

                //Ajout à la div todo     
                todoList.appendChild(todoDiv);

                //Vide cache button
                todoInput.value="";
        }

        function deleteCheck(e){
            const item = e.target;
            //delete TODO
            if(item.classList[0] === "trash-btn"){
                const todo = item.parentElement;
                removeLocalTodos(todo);
                item.parentElement.remove()
            }

            if(item.classList[0] === "completed-btn"){
                item.parentElement.classList.toggle("completed");
            }
        }

        function saveLocalTodos(todo){
            //Cheker si y a des items existants
            let todos;
            if(localStorage.getItem("todos") === null){
                todos = [];
            }else{
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        function getTodos(){
            //Cheker si y a des items existants
            let todos;
            if(localStorage.getItem("todos") === null){
                todos = [];
            }else{
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.forEach(function (todo) {
                //Todo DIV
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("todo");

                //créer le li
                const newTodo = document.createElement("li");
                newTodo.innerText = todo ;
                newTodo.classList.add("todo-item");
                todoDiv.appendChild(newTodo);

                //Button Check
                const completedbutton = document.createElement("button");
                completedbutton.innerText= "Check"
                completedbutton.classList.add("completed-btn");
                completedbutton.classList.add("btn");
                completedbutton.classList.add("btn-light");
                todoDiv.appendChild(completedbutton);

                //Button Trash
                const trashbutton = document.createElement("button");
                trashbutton.innerText= "trash"
                trashbutton.classList.add("trash-btn");
                trashbutton.classList.add("btn");
                trashbutton.classList.add("btn-danger");
                todoDiv.appendChild(trashbutton);

                //Ajout à la div todo     
                todoList.appendChild(todoDiv);
            });
        }
        function removeLocalTodos(todo) {
            let todos;
            if(localStorage.getItem("todos") === null) {
                todos =  [];
            }else{
                todos =JSON.parse(localStorage.getItem("todos"));
            }
            const todoIndex= todo.children[0].innerText;
            todos.splice(todos.indexOf(todoIndex), 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
