const canvas = document.getElementById('snakeGame');
const context = canvas.getContext('2d');
let grid = 16;
let count = 0;
let score = 1;

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

  if (++count < 4) {
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
      score += 5
//ADD SCORE
      food.x = makeItRandom(0, 62.5) * grid;
      food.y = makeItRandom(0, 43.75) * grid;
    }

    for (let i = index + 1; i < snake.units.length; i += 1) {
      if (cell.x === snake.units[i].x && cell.y === snake.units[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.units = [];
        snake.startUnits = 1;
        snake.hV = grid;
        snake.vV = 0;
        food.x = makeItRandom(0, 62.50) * grid;
        food.y = makeItRandom(0, 43.75) * grid;
      }
    }
  });
}

// function didGameEnd () {
//
// }


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
