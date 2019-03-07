# Ohio Jackson - The Game!
(<a href="https://aaronzick.com/ohio_jackson/" target="_blank">Live</a>)

# Background and Overview
Ohio Jackson (no affiliation with Indiana Jones) is a simple, nostalgic browser video game built in JavaScript and rendered with the HTML5 Canvas API. I built player movement with event listeners and used requestAnimationFrame to render and animate colorful sprites. I leveraged Object Oriented Programming principles to write DRY, modular code, in order to flexibly and easily populate the game with projectiles and items in response to the player's score. By using sets to keep track of game objects I ensure efficient memory usage by quickly removing out of bounds items, allowing for smooth and fast game performance.

The game was originally inspired by Sonic the Hedgehog - you might recognize the rings. The player must dodge arrows that deplete their health, but there are plenty of healing fruits scattered across the playing field if they get into trouble. After the score gets high enough, a boost item will appear which doubles the player's speed and renders them impervious to damage for a limited time.

# Functionality and MVP Features

- Players can use left/right arrow keys to move left and right.
- Projectiles, rings, and other itmes will be part of the level.
- The game ends if the player collides with arrows enough times to delete their health below zero.
- The player's score will be the amount of rings the player has collected; the difficulty increases in correlation to the score.
- Players can pause the game and mute the soundtrack.

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

# Object Oriented Design
Using classes allows me to easily reuse code for different objects.
```javascript
// collectable.js
class Collectable extends Moveable {
  constructor(options) {
    super(options);
    this.range = options.range || 25;
    this.direction = options.direction || "H";
    this.switchDirection = false;
  }
//...
// coin.js
class Coin extends Collectable {
// ...
 ```

# Efficiency
Using sets instead of arrays to keep track of game objects allows for faster performance and easier to read code.
```javascript
// game.js
constructor(options) {
    this.canvas = options.canvas;
    // import default player?
    // this.player = options.player; 
    this.coins = options.coins || new Set();
    this.arrows = options.arrows || new Set();
    this.fruits = options.fruits || new Set();
    this.powerUps = options.powerUps || new Set();
// ...
// player.js
//...
hits(object) {
    object.remove();
  }
// ...
```
