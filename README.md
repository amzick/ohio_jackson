# Ohio Jackson - The Game!
(<a href="https://aaronzick.com/ohio_jackson/" target="_blank">Live</a>)

# Background and Overview
Ohio Jackson (no affiliation with Indiana Jones) is a simple, nostolgic browser video game built in JavaScript and rendered with the HTML5 Canvas API. I built player movement with event listeners and used requestAnimationFrame to render and animate colorful sprites. I leveraged Object Oriented Programming principles to write DRY, modular code, in order to flexibly and easily populate the game with projectiles and items in response to the player's score. By using sets to keep track of game objects I ensure efficient memory usage by quickly removing out of bounds items, allowing for smooth and fast game performance.

The game was originally inspired by Sonic the Hedgehog - you might recognize the rings. The player must dodge arrows that deplete their health, but there are plenty of healing fruits scattered across the playing field if they get into trouble. After the score gets high enough, a boost item will appear which doubles the player's speed and renders them impervious to damage for a limited time.

# Functionality and MVP Features

- Players can use left/right arrow keys to move left and right.
- Projectiles, rings, and other itmes will be part of the level.
- The game ends if the player collides with arrows enough times to delete their health below zero.
- The player's score will be the amount of rings the player has collected; the difficulty increases in correlation to the score.

## MVPS
- Basic visuals and interactive interface.
- Players can move the character.
- Projectiles damage or kill the character.
- Either a few pre-built levels of increasing difficulty or an endless projectile generator.
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

Files:
- index.html: to hold everything
- entry.js: for Webpack to consolidate all dependencies
- board.js: script to determine what is on the screen
- wall.js: grid locations the player would be able to stand on and unable to pass through
- player.js: handles input and outputs player position
- obstacle.js: handles obstacles. (various would inherit from this)
- collectable.js: handles collectables (rings would inherit from this)
- game.js: handles game logic
- audio.js:


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
