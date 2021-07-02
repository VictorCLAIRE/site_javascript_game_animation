
    //VARIABLE BASE DU CANAS
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //VARIABLE POINT DE DEPART DE LA BALL
    var x = canvas.width/2;
    var y = canvas.height/2;

    //VARIABLE VITESSE DEPLACEMENT BALL
    var dx =  2;
    var dy = -2;
    var newLifeDx = dx
    var newLifeDy = dy

    //VARIABLE TAILLE BALL
    var ballRadius = 10;
    var ballColor = "#0095DD";

    //VARIABLE RAQUETTE1
    var paddleHeight1 = 80;
    var paddleWidth1 = 10;
    var paddleX1 = 20;
    var paddleY1 = (canvas.height/2)-(paddleWidth1*2);

    //VARIABLE RAQUETTE2
    var paddleHeight2 = paddleHeight1;
    var paddleWidth2 = paddleWidth1;
    var paddleX2 = (canvas.width)-(paddleWidth2)-(paddleX1);
    var paddleY2 = paddleY1;

    //VARIABLE DEPLACEMENT RAQUETTE1
    var upPressed1 = false;
    var downPressed1 = false;

    //VARIABLE SCORE1
    var score1 = 0;

    //VARIABLE vies1
    var lives1 = 3;

    //VARIABLE SCORE2
    var score2 = 0;

    //VARIABLE vies2
    var lives2 = 3;

    //FONCTION APPARENCE BALL
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = ballColor;
        ctx.fill();
        ctx.closePath();
        
        //FONCTION REBOND PADDLE ET SUR MUR SAUF SOL  

        if(y + dy < ballRadius || y + dy > canvas.height-ballRadius) {
            dy = -dy; 
        }else if(x < paddleX1+paddleWidth1 && y > paddleY1 && y < paddleY1+paddleHeight1){
               dx = -dx * 1.2;  
        }else if(x > paddleX2 && y > paddleY2 && y < paddleY2+paddleHeight2){
                dx = -dx * 1.2;     
        }else if(x + dx < ballRadius ) {
            lives1--;
            if(!lives1) {
                alert("GAME OVER: player 1 || Winner : player 2");
                document.location.reload();
            }
            else {
                alert("-1");
                x = canvas.width/2;
                y = canvas.height/2;
                dx = newLifeDx;
                dy = newLifeDy;
            } 
        }else if(x + dx > canvas.width-ballRadius) {
            lives2--;
            if(!lives2) {
                alert("Winner: player 1 || GAME OVER : player 2");
                document.location.reload();
            }
            else {
                alert("-1");
                x = canvas.width/2;
                y = canvas.height/2;
                dx = newLifeDx;
                dy = newLifeDy;
            } 
        }
    }
    //FONCTION APPARENCE PADDLE1
    function drawPaddle1() {
        ctx.beginPath();
        ctx.rect(paddleX1,paddleY1, paddleWidth1, paddleHeight1);
        ctx.fillStyle = "#52DCEA";
        ctx.fill();
        ctx.closePath();
    }
    //FONCTION APPARENCE PADDLE2
    function drawPaddle2() {
        ctx.beginPath();
        ctx.rect(paddleX2,paddleY2, paddleWidth2, paddleHeight2);
        ctx.fillStyle = "#52DCEA";
        ctx.fill();
        ctx.closePath();
    }

    //FONCTION DESSIN DES FONCTIONS
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle1();
        drawPaddle2();
        drawLives1();
        drawLives2();
        drawName1();
        drawName2();

        x += dx;
        y += dy;
        if(upPressed1) {
            paddleY1 -= 7;
            if(paddleY1 < 0){
                paddleY1 = 0;
            }
        }
        else if(downPressed1) {
            paddleY1 += 7;
            if(paddleY1 > canvas.height-paddleHeight1){
                paddleY1 = canvas.height-paddleHeight1;
            }
        }
        paddleY2 = y - 50;
        if(paddleY2) {
            if(paddleY2 < 0){
                paddleY2 = 0;
            }
            else if(paddleY2 > canvas.height-paddleHeight2){
                paddleY2 = canvas.height-paddleHeight2;
            }
        }    
       
        requestAnimationFrame(draw);
    }
    
    //ECOUTE DES PRESSIONS SUR LES TOUCHES DROITES ET GAUCHE
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    //FONCTION DE VERIFICATION D'APPUIE DES TOUCHES
    function keyDownHandler(e) {
        if(e.key == "Up" || e.key == "ArrowUp") {
            upPressed1 = true;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") {
            downPressed1 = true;
        }
    }
    
    //FONCTION DE VERIFICATION DE NON APPUIE DES TOUCHES
    function keyUpHandler(e) {
        if(e.key == "Up" || e.key == "ArrowUp") {
            upPressed1 = false;
        }
        else if(e.key == "Down" || e.key == "ArrowDown") {
            downPressed1 = false;
        }
    }
    //FONCTION DES CARACTERISTIQUE DU NOM DU PLAYER 1
    function drawName1() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Player 1 ", 8, 20);
    }
    //FONCTION DES CARACTERISTIQUE DU NOM DU PLAYER 1
    function drawName2() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Player 2 ", canvas.width-65, 20);
    }
    //FONCTION DES CARACTERISTIQUE DES VIES1
    function drawLives1() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives1, 8, 40);
    }

    //FONCTION DES CARACTERISTIQUE DES VIES1
    function drawLives2() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives2, canvas.width-65, 40);
    }    

    draw();    