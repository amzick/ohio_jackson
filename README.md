# sonic_replica
(Live)

# Background and Overview
Phonic the Toad Frog (name pending) is a simple version of Sonic the Hedgehog: an intuitive game that most people would recognize and instinctively. Game play would be moving left and right and jumping. There would be rings that the player can collect. The player must avoid obstacles. Touching an obstacle results in death unless the player has rings, in which case the player loses the rings but may continue playing.

The game is inspired by Sonic the Hedgehog.

I'd like to do Minesweeper but it seems simplisitic board games are discouraged and I'd like to step out of my comfort zone and learn something new, but literally have no idea how to approach this.


# Functionality and MVP Features

- Players can use left/right arrow keys to move left and right.
- Players can use space or up to jump.
- Obstacles and rings will be part of the level.
- The game ends if the player collides with an obstacle and doesn't have any rings. If the player has rings the rings will be lost.
- The player's score will be the amount of rings multiplied by a time multiplier based on the speed of completion.

## MVPS
- Basic visuals and interactive interface.
- Players can move the character.
- Obstacles damage or kill the character. Charter will have a certain amount of lives and can gain more with a certain amount of rings
- Either a few pre-built levels of increasing difficulty or an endless obstacle generator.
- Players can pause the game and mute the soundtrack.

# Wireframes
The app will have a single screen with the gameplay canvas, controls, and links to my LinkedIn, and GitHub.
![img](https://github.com/amzick/sonic_replica/blob/master/Screen%20Shot%202019-02-05%20at%205.02.41%20PM.png?raw=true)


# Architecture and Technologies
The project will be implemented with:
- JavaScript for game logic
- HTML5 Canvas for DOM manipulation and rendering
- Web Audio API for sound generation
- Webpack
- ??? 

Files:
- index.html: to hold everything
- entry.js: for Webpack to consolidate all dependencies
- board.js: script to determine what is on the screen
- wall.js: grid locations the player would be able to stand on and unable to pass through
- player.js: handles input and outputs player position
- obstacle.js: handles obstacles. (various would inherit from this)
- collectable.js: handles collectables (rings would inherit from this)
- game.js: handles game logic
- audio.js: ???


# Implementation Timeline
## Day 1
- Review Canvas
- Board design?

## Day 2
- Player design and functionality?
- Obstacle design and functionality?

## Day 3
- Obstacle / player collision
- Game logic

## Days 4 and 5 (weekend)
- Get through the above because I'm sure I won't get through those in three days

# Bonus Features
- Audio
- Additional collectables (shield, timed invincibility, speed boost, ring clumps worth more rings)
- Additional obstacles, including moving ones
