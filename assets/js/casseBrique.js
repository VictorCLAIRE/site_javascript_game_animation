
    //VARIABLE BASE DU CANAS (https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //VARIABLE POINT DE DEPART DE LA BALL
    var x = canvas.width/2;
    var y = canvas.height-30;

    //VARIABLE VITESSE DEPLACEMENT BALL
    var dx =  2;
    var dy = -2;
    var newLifeDx = dx
    var newLifeDy = dy

    //VARIABLE TAILLE BALL
    var ballRadius = 10;
    var ballColor = "#0095DD";

    //VARIABLE RAQUETTE1
    var paddleHeight1 = 10;
    var paddleWidth1 = 25;
    var paddleX1 = ((canvas.width-paddleWidth1)/2)-25;
    var paddleY1 = 305

    //VARIABLE RAQUETTE2
    var paddleHeight2 = 10;
    var paddleWidth2 = 25;
    var paddleX2 = (canvas.width-paddleWidth2)/2;
    var paddleY2 = 305

    //VARIABLE RAQUETTE2
    var paddleHeight3 = 10;
    var paddleWidth3 = 25;
    var paddleX3 = ((canvas.width-paddleWidth2)/2)+25;
    var paddleY3 = 305

    //VARIABLE DEPLACEMENT RAQUETTE
    var rightPressed = false;
    var leftPressed = false;

    //VARIABLE TAILLE DES BRIQUE ET DELIMITATION DU PLACEMENT DES BRIQUE
    var brickRowCount = 4;
    var brickColumnCount = 5;
    var brickWidth = 75;
    var brickHeight = 20;
    var brickPadding = 5;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 45;

    //VARIABLE CREATION DES BRIQUES SUR EMPLACEMENT POSSIBLE
    var bricks = [];
    for(var c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    //VARIABLE SCORE
    var score = 0;

    //VARIABLE vies
    var lives = 3;

    //FONCTION APPARENCE BALL
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = ballColor;
        ctx.fill();
        ctx.closePath();

    //FONCTION REBOND PADDLE ET SUR MUR SAUF SOL  
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX1 && x < paddleX1 + paddleWidth1) {
                dy = -dy * 1.2;
                dx = -2;
            }else if (x > paddleX2 && x < paddleX2 + paddleWidth2) {
                dy = -dy * 1.2;
            }else if(x > paddleX3 && x < paddleX3 + paddleWidth3) {
                dy = -dy * 1.2;
                dx = 2;
            }
            else{
                //FONCTION SOUSTRACTION DE VIE SI IL EN RESTE SINON GAME OVER
                lives--;
                if(!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    alert("Lives -1");
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = newLifeDx;
                    dy = newLifeDy;

                }
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
        ctx.rect(paddleX2, paddleY2, paddleWidth2, paddleHeight2);
        ctx.fillStyle = "#52DCEA";
        ctx.fill();
        ctx.closePath();
    }

    //FONCTION APPARENCE PADDLE3
    function drawPaddle3() {
        ctx.beginPath();
        ctx.rect(paddleX3, paddleY3, paddleWidth3, paddleHeight3);
        ctx.fillStyle = "#52DCEA";
        ctx.fill();
        ctx.closePath();
    }

    //FONCTION APPARENCE BRICK
    function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#ff4af6";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    //FONCTION DESSIN DES FONCTIONS
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawBricks();
        drawPaddle1();
        drawPaddle2();
        drawPaddle3();
        drawScore();
        drawLives();
        collisionDetection();
        
        x += dx;
        y += dy;
        if(rightPressed) {
            paddleX1 += 7;
            paddleX2 += 7;
            paddleX3 += 7;
            if (paddleX3 + paddleWidth3 > canvas.width){
                paddleX3 = canvas.width - paddleWidth3;
                paddleX2 = (canvas.width - paddleWidth2)-25;
                paddleX1 = (canvas.width - paddleWidth1)-50;
            }
        }
        else if(leftPressed) {
            paddleX1 -= 7;
            paddleX2 -= 7;
            paddleX3 -= 7;
            if (paddleX1 < 0){
                paddleX1 = 0;
                paddleX2 = 25;
                paddleX3 = 50;
            }
        }

        requestAnimationFrame(draw);
    }

    //ECOUTE DES PRESSIONS SUR LES TOUCHES DROITES ET GAUCHE
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    //ECOUTE DU MOUVEMENT DE LA SOURIS
    document.addEventListener("mousemove", mouseMoveHandler2, false);

    function mouseMoveHandler2(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX1 = relativeX - paddleWidth1;
            paddleX2 = (relativeX - paddleWidth2)+25;
            paddleX3 = (relativeX - paddleWidth3)+50;
        }
    }

    //FONCTION DE VERIFICATION D'APPUIE DES TOUCHES
    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }

    //FONCTION DE VERIFICATION DE NON APPUIE DES TOUCHES
    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    //FONCTION DE COLLISION AVEC UNE BRIQUE
    function collisionDetection() {

        // CONST Changement de couleur de la balle for Random
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        ballColor = "#" + randomColor;
                        score++;
                        if(score == brickRowCount*brickColumnCount) {
                            alert("C'est gagné, Bravo! Vous avez marqué"+ " " + score + " " + "points");
                            document.location.reload();
                            
                        }
                        
                    }
                }
            }
        }
    }
    //FONCTION DES CARACTERISTIQUE DU SCORE BOARD
    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
    }

    //FONCTION DES CARACTERISTIQUE DES VIES
    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }

    draw();

//https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field