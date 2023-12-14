//캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas); //body에 canvas를 자식으로 세팅
//이미지 세팅
let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;
//우주선 좌표찍기
let spaceshipX = canvas.width/2-32
let spaceshipY = canvas.height-64

//이미지 불러오기 
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/space2.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/icon_spaceship.png"

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";
}
//UI 그리기
function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width , canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main(){
    render(); //계속 호출해야함(한번보여주고 사라지는게 아니라)
    //console.log("animation calls main function");
    requestAnimationFrame(main); //main(자기자신) 계속 호출    
}
//함수호출
loadImage();
main();