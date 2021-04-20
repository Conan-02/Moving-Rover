canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverW = 100;
roverH = 90;

backImg = ["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg","mars6.jpg"];
backNo = Math.floor(Math.random()*6);
console.log(backNo);

roverImg = "rover.png";

roverX = 400;
roverY = 300;

function add() {
    backImg_tag = new Image();
    backImg_tag.onload = uploadBack;
    backImg_tag.src = backImg[backNo];

    roverImg_tag = new Image();
    roverImg_tag.onload = uploadRover;
    roverImg_tag.src = roverImg;
}

function uploadBack() {
    ctx.drawImage(backImg_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImg_tag, roverX, roverY, roverW, roverH);
}

window.addEventListener("keydown", kDown);

function kDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == 37) {
        left();
        console.log("left");
    }

    if (keyPressed == 38) {
        up();
        console.log("up");
    }

    if (keyPressed == 39) {
        right();
        console.log("right");
    }

    if (keyPressed == 40) {
        down();
        console.log("down");
    }
}

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log("Rover moved left")
        console.log("Rover x and y:")
        console.log("x = " + roverX + ", y = " + roverY);
        uploadBack();
        uploadRover();
    }
}

function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        console.log("Rover moved right")
        console.log("Rover x and y:")
        console.log("x = " + roverX + ", y = " + roverY);
        uploadBack();
        uploadRover();
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log("Rover moved up")
        console.log("Rover x and y:")
        console.log("x = " + roverX + ", y = " + roverY);
        uploadBack();
        uploadRover();
    }
}

function down() {
    if (roverX <= 510) {
        roverY = roverY + 10;
        console.log("Rover moved down")
        console.log("Rover x and y:")
        console.log("x = " + roverX + ", y = " + roverY);
        uploadBack();
        uploadRover();
    }
}