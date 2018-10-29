const canvas = document.getElementById('snakeGame');
const context = canvas.getContext('2d');
let count = 0;
let score = 1;
let grid = 16;
let newScore = document.querySelector('.score');

function runGame () {

let snake = {
  x: 160,
  y: 160,

  units: [],

  hV: 0,
  vV: 0,

  startUnits: 1
}

let food = {
  x: 560,
  y: 560
}

function makeItRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loopTiloop() {
  requestAnimationFrame(loopTiloop);

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
        newScore.innerText = `Faster in: ${score}/50`;
    }

    for (let i = index + 1; i < snake.units.length; i += 1) {
      if (cell.x === snake.units[i].x && cell.y === snake.units[i].y) {
        newScore.innerText = `Final Score: ${score}`
        runGame();
    }
  }
  if (score >= 50 && score < 101) {
  count = 1;
  newScore.innerText = `Faster in: ${score}/100`
}

 if (score >= 101 && score < 151) {
  count = 2;
  newScore.innerText = `Faster in: ${score}/150`
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
requestAnimationFrame(loopTiloop);
}
runGame();
