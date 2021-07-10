// Canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';

// Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();

const mouse =  {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown', (event) => {
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
})
canvas.addEventListener('mouseup', (event) => {
    mouse.click = false;
})

// Player
const player = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 50,
    angle: 0,
    frameX: 0,
    frameY: 0,
    frame: 0,
    spriteWidth: 498,
    spriteHeight: 327,
}

function update(entity) {
    const dx = entity.x - mouse.x;
    const dy = entity.y - mouse.y;
    if (mouse.x != entity.x)
        entity.x -= dx/30;
    if (mouse.y != entity.y)
        entity.y -= dy/30;
}

function draw(entity) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(entity.x, entity.y, entity.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}


// Bubbles

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update(player);
    draw(player);
    requestAnimationFrame(animate);
}

animate();