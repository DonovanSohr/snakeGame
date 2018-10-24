let score = 0;
let vV = 0; //vertical velocity
let hV = 10; //horizontal velocity
let foodHoriz;
let foodVert;
let changeDirec = false;

let snake = [
  {x: 100, y: 100},
];

function snakeOnwards () {
  let head = {x: snake[0].x + hV, y: snake[0].y + vV};
    snake.unshift(head);

  // let checkForEat = snake[0].x === foodHoriz && snake[0].y === foodVert;
  // if (checkForEat) {
  //   score += 5;
  //
  //   generateFood();
  // }
  // else {
  //   snake.pop();
  // }
}

function changeThatDirec (event) {
    let left = 37;
    let right = 39;
    let up = 38;
    let down = 40;

     if (changeDirec) return;
     changeDirec = true;
     const keyPressed = event.keyCode;
     const goingUp = dy === -10;
     const goingDown = dy === 10;
     const goingRight = dx === 10;
     const goingLeft = dx === -10;
     if (keyPressed === left && !goingRight) {
       dx = -10;
       dy = 0;
     }
     if (keyPressed === up && !goingDown) {
       dx = 0;
       dy = -10;
     }
     if (keyPressed === right && !goingLeft) {
       dx = 10;
       dy = 0;
     }
     if (keyPressed === down && !goingUp) {
       dx = 0;
       dy = 10;
     }
   }
