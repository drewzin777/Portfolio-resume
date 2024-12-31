let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

canvas.width = 800; 
canvas.height = 600; 

class Player {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.size = 20; 
        this.speed = 5;
    }

    moveLeft() {
        this.x -= 5; 
    }

    moveRight() {
        this.x += 5;
    }

    moveUp() {
        this.y -= this.speed; 
    }
    moveDown() {
        this.x += this.speed;
    }
}

class Enemy {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.size = 20; 
        this.speed = 2;
    }

    move() {
        this.x -= 2;
    }
}

let player = new Player(canvas.width / 2, canvas.height - 50); 
let enemies = [
    new Enemy(100, 50),
    new Enemy(200, 100),
    new Enemy(300, 150),
];

//render game state
function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);


//render player
context.fillStyle = "blue"; 
context.fillRect(player.x, player.y, player.size, player.size);

//render enemies
context.fillStyle = "red"; 
enemies.forEach((enemy) => {
    context.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    });
}

//handle user input
document.onkeydown = function (event) {
    if (event.code === "ArrowLeft") {
        player.moveLeft();
    }
    if (event.code === "ArrowRight") {
        player.moveRight();
    }
    if (event.code === "ArrowUp") {
        player.moveUp();
    }
    if (event.code === "ArrowDown") {
        player.moveDown();
    }
};

//loop

function gameLoop() {
    render();
    enemies.forEach(enemy => enemy.move()); 
    requestAnimationFrame(gameLoop);
}

gameLoop();