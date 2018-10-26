#Snake Game

## SNAKE MVP:

  - A single player uses arrow keys to direct a constantly moving snake around a grid
  - The snake gets bigger and the player gains points once he/she picks up randomly generated pieces (food) on the grid
  - If the player runs the snake into the walls or into itself, he/she loses
  - Acquiring 200 points will move player to the next level

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

  Problems:

    - I need to make sure the food doesn't spawn in the same place as the bombs
      - write a condition making sure food location is never equal to the bombs

    - I need to be able to progress to the next level and add more and more bombs each time
      - call the bomb function and correlate number of bombs to the level

    - Getting the game to end when the snake hits itself is going to take some thinking

  Functional Specifications:

    - Form the grid (I think similar to the way blerf grid was formed is best)
    - Create the snake
    - Get the snake to move horizontally (increase or decrease its x coordinate by however much)
    - Get the snake to move vertically (increase or decrease the y coordinate)
    - Write function to keep the snake moving constantly (call that with each keypress)
    - Bind arrow keys to change snakes direction (add or subtract from the x or y coordinates)
    - Write function to generate food
    - Write a collision function for food
    - Write a function to make the snake grow
    - Keep track of points and display them as well as levels on the banner
    - Write a function to make the walls end the game  
    - Combine aspects of wall function and food function to generate bombs
    - Need a game reset function for when the player loses and also a different reset function for when the player goes to the next level
