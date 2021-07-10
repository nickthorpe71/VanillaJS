const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// load images
const images = {};
images.player = new Image();
images.player.src = 'assets/necro-run.jpg';

const playerWidth = 83;
const playerheight = 87.875;
let playerFrameX = 3;
let playerFrameY = 3;
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;

function drawSprite(image, sX, sY, sW, sW, dX, dY, dW, dH) {
    ctx.drawImage(image, sX, sY, sW, sW, dX, dY, dW, dH)
}

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX, )
}