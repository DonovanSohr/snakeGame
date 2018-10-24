let gameSpeed = 40;
let canvasBorderColour = 'lightgreen';
let canvasBackgroundColour = "black";
let snakeColour = 'lightgreen';
let snakeBorderColour = 'black';
let foodColour = 'red';
let foodBorderColour = 'black';

let score = 1;
let changeDirec = false;
let foodX;
let foodY;
let dx = 0;
let dy = 0;

let snake = [
  {x: 100, y: 130},
];

const gameCanvas = document.getElementById("gameCanvas");

const ctx = gameCanvas.getContext("2d");

main();

createFood();

document.addEventListener("keydown", changeDirection);



function clearCanvas() {
  ctx.fillStyle = canvasBackgroundColour;
  ctx.strokestyle = canvasBorderColour;
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawFood() {
  ctx.fillStyle = foodColour;
  ctx.strokestyle = foodBorderColour;
  ctx.fillRect(foodX, foodY, 20, 20);
  ctx.strokeRect(foodX, foodY, 20, 20);
}

function advanceSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);

  const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
  if (didEatFood) {
    score += 5;
    document.getElementById('score').innerHTML = score;
    createFood();
  }
  else {
    snake.pop();
  }
}


function drawSnake() {
  snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = snakeColour;
  ctx.strokestyle = snakeBorderColour;
  ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
  ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
}
