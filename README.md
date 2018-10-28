#Snake Game

http://earthy-underwear.surge.sh/

## SNAKE MVP:

  - A single player uses arrow keys to direct a constantly moving snake around a grid
  - The snake gets bigger and the player gains points once he/she picks up randomly generated pieces (food) on the grid
  - If the player runs the snake into itself, he/she loses
  - Every 50 points will increase speed of game

Specifications:

  - Render a 40x80 unit grid (start much smaller to begin, probably 10x10)
  - Begin with a snake as big as one unit on the grid
  - Randomly generate another unit (food) also, and always, as big as one unit on the grid
  - Snake begins moving and moves constantly, directed by arrow keys
  - Must direct head of snake into food to gain points (gain 5 points each time food is eaten)
  - Snake will grow by five units each time it (eats) food, and those units will follow in line with the head
  - Once food is eaten, another unit randomly generates on the grid
  - If the head of the snake hits the walls (either greater than 40 units in Y direction or greater than 80 in X), game ends
  - Additionally, if the head of the snake collides with any unit trailing it, the game ends
  - Once the player gains 200 points, game progresses to the next level
  - Next level resets game and randomly generates a single unit (bomb)
  - If bomb is hit by the snake at any point the game ends
  - As levels continue, the number of bombs increase

  Game Components:
    - Begin with a screen explaining rules that fades away
    - When the player eats the first food, a countdown will begin
    - The countdown will increase each time food is eaten
    - When countdown is complete the game speed increases and a new countdown begins
    - When game ends, the players final score will be displayed and the snake will reset

  Functional Specifications:

    - Form the grid
    - Create the snake
    - Get the snake to move horizontally: unshift each unit to the snake then pop it once passed
    - Get the snake to move vertically: unshift each unit to the snake then pop it once passed
    - Write function to keep the snake moving constantly
    - Bind arrow keys to change snakes direction (add or subtract from the x or y coordinates)
    - Write function to generate food
    - Write a collision function for food
    - Write a function to make the snake grow
    - Keep track of points and display them as well as levels on the banner
    - Wrap snake so it can go through walls  
    - Increase game speed when snake gains x number of points
    - Need a reset function for when the player loses
