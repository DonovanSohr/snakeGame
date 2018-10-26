const canvas = document.getElementById('snakeGame');
const context = canvas.getContext('2d');
let grid = 16;
let count = 0;
let score = 1;
let newScore = document.querySelector('.score');

function runGame () {

// let button = document.getElementByTagName('button')
// button.onclick = function() {
// // button.addEventListener('click', ev => {
// //   if (ev.button === true) {
//     let startScreen = querySelector('.startScreen');
//     startScreen.style.animation = 'slideOut'
//   requestAnimationFrame()
// }

let snake = {
  x: 160,
  y: 160,

  hV: 0,
  vV: 0,

  units: [],

  startUnits: 1
}

let food = {
  x: 560,
  y: 560
}

function makeItRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);

  if (++count < 3) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  snake.x += snake.hV;
  snake.y += snake.vV;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }


  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.units.unshift({x: snake.x, y: snake.y});

  if (snake.units.length > snake.startUnits) {
    snake.units.pop();
  }

  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, grid - 1, grid - 1);

  context.fillStyle = 'lightgreen';
  snake.units.forEach(function(cell, index) {
  context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === food.x && cell.y === food.y) {
      snake.startUnits += 5;
      food.x = makeItRandom(0, 80) * grid;
      food.y = makeItRandom(0, 44) * grid;
      score += 5
        newScore.innerText = `Next level in: ${score}/200`;
    }

    for (let i = index + 1; i < snake.units.length; i += 1) {
      if (cell.x === snake.units[i].x && cell.y === snake.units[i].y) {
        // snake.x = 160;
        // snake.y = 160;
        // snake.units = [];
        // snake.startUnits = 1;
        // hV = 0;
        // vV = 0;
        // food.x = makeItRandom(0, 62.50) * grid;
        // food.y = makeItRandom(0, 43.75) * grid;
        // newScore.innerText = `Final Score: ${score}`
        // newScore.innerText = `Final Score: ${score}`
        // let button = document.getElementByTagName('button')
        // button.addEventListener('click', ev => {
        // if (ev.button === true) {
        runGame();
      }
    }
  });
}

document.onkeydown = function (event) {
  keyCode = window.event.keyCode;
  keyCode = event.keyCode;

  if (event.keyCode === 37 && snake.hV === 0) {
    snake.hV = - grid;
    snake.vV = 0;
  }
  else if (event.keyCode === 38 && snake.vV === 0) {
    snake.hV = 0;
    snake.vV = - grid;
  }
  else if (event.keyCode === 39 && snake.hV === 0) {
    snake.hV = grid;
    snake.vV = 0;
  }
  else if (event.keyCode === 40 && snake.vV === 0) {
    snake.vV = grid;
    snake.hV = 0;
  }
}
requestAnimationFrame(loop);
}
runGame();

// let gameSpeed = 60;
// let canvasBorderColor = 'lightgreen';
// let canvasBackgroundColor = "black";
// let snakeColor = 'lightgreen';
// let snakeBorderColor = 'black';
// let foodColor = 'red';
// let foodBorderColor = 'black';
//
// let score = 1;
// let changeDirec = false;
// let foodX;
// let foodY;


// main();
//
// createFood();
//
// document.addEventListener("keydown", changeDirection);
//
// function main() {
//
//   if (didGameEnd()) return;
//   setTimeout(function onEnd() {
//     changeDirec = false;
//     clearCanvas();
//     drawFood();
//     advanceSnake();
//     drawSnake();
//
//     main();
//   }, gameSpeed)
// }
//
// function clearCanvas() {
//   ctx.fillStyle = canvasBackgroundColor;
//   ctx.strokestyle = canvasBorderColor;
//   ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
//   ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
// }
//
// function drawFood() {
//   ctx.fillStyle = foodColor;
//   ctx.strokestyle = foodBorderColor;
//   ctx.fillRect(foodX, foodY, 20, 20);
//   ctx.strokeRect(foodX, foodY, 20, 20);
// }
//
// function advanceSnake() {
//   let head = {x: snake[0].x + dx, y: snake[0].y + dy};
//   snake.unshift(head);
//
//   let didEatFood = snake[0].x === foodX && snake[0].y === foodY;
//   if (didEatFood) {
//     score += 5;
//     document.getElementById('score').innerHTML = score;
//     createFood();
//   }
//   else {
//     snake.pop();
//   }
// }
//
// function didGameEnd() {
//   for (let i = 4; i < snake.length; i++) {
//     if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
//   }
//
//   let hitLeftWall = snake[0].x < 0;
//   let hitRightWall = snake[0].x > gameCanvas.width - 10;
//   let hitToptWall = snake[0].y < 0;
//   let hitBottomWall = snake[0].y > gameCanvas.height - 10;
//   return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
// }
//
// function drawSnake() {
//   snake.forEach(drawSnakePart)
// }
//
// function drawSnakePart(snakePart) {
//   ctx.fillStyle = snakeColor;
//   ctx.strokestyle = snakeBorderColor;
//   ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
//   ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
// }
//
// function randomTen(min, max) {
//   return Math.round((Math.random() * (max-min) + min) / 10) * 10;
// }
//
// function createFood() {
//   foodX = randomTen(0, gameCanvas.width - 10);
//   foodY = randomTen(0, gameCanvas.height - 10);
//   snake.forEach(function isFoodOnSnake(part) {
//     const foodIsoNsnake = part.x === foodX && part.y === foodY;
//     if (foodIsoNsnake) createFood();
//   });
// }
//
//  document.onkeydown = function (event) {
//     keyCode = window.event.keyCode;
//     keyCode = event.keyCode;
//   }
//
// function changeDirection(event) {
//   const left = 37;
//   const right = 39;
//   const up = 38;
//   const down = 40;
//
//   if (changeDirec) return;
//   changeDirec = true;
//
//   let attemptToChange = event.keyCode;
//   let goingUp = dy === -10;
//   let goingDown = dy === 10;
//   let goingRight = dx === 10;
//   let goingLeft = dx === -10;
//
//   if (attemptToChange === left && !goingRight) {
//     dx = -10;
//     dy = 0;
//   }
//   if (attemptToChange === up && !goingDown) {
//     dx = 0;
//     dy = -10;
//   }
//   if (attemptToChange === right && !goingLeft) {
//     dx = 10;
//     dy = 0;
//   }
//   if (attemptToChange === down && !goingUp) {
//     dx = 0;
//     dy = 10;
//   }
// }
