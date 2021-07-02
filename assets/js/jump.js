    //VARIABLE BASE DU CANAS 
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //VARIABLE BASE DES BLOCS
    var blocHeight = 30;
    var blocWidth = 100;
    var blocX1 = ((canvas.width-blocWidth)/2);
    var blocY1 = canvas.height-blocHeight ;

    //FUNCTION DRAW BLOC
    function drawBloc(){
        ctx.beginPath();
        ctx.rect(blocX1,blocY1, blocWidth, blocHeight);
        ctx.fillStyle = "#52DCEA";
        ctx.fill();
        ctx.closePath();
    }

    //FUNCTION DRAW ALL
    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBloc();

    }

    draw();