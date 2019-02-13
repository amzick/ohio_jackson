import Moveable from './moveable';

class Projectile extends Moveable {
  constructor(options) {
    super(options);
    const arrowImg = new Image();
    arrowImg.src = "https://s3.amazonaws.com/letsgoeros-dev/new_arrows.png";
    const arrowFlipped = new Image();
    arrowFlipped.src = "https://s3.amazonaws.com/letsgoeros-dev/new_arrows_flipped.png";

    this.image = options.flipped ? arrowFlipped : arrowImg; 
    // projectiles will originate off the screen and fly across
    // if they are off the left side they will have a positive dX, right side negative
    // if they are off the top side they will have a positive dY, bottom negative
    this.dX = options.dX || (this.startX < 0 ? 1 : -1);
    this.dY = options.dY || (this.startY < 0 ? 1 : -1);
    this.deltaX = options.deltaX;
    this.deltaY = options.deltaY;
  }

  remove() {
    this.game.arrows.delete(this);
  }

  // generate arrows from various positions
  static sides(game) {
    const origin = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
    // true will be left, false will be right
    const validStartY = Math.random() * (game.canvas.height-16 - 16) + 16;
    const speed = Math.random() * (1-0.6) + 0.6;
    if (origin) {
      // left to right
      return new Projectile({
        game,
        canvas: game.canvas,
        flipped: true,
        sX: 69,
        sY: 104,
        sWidth: 29,
        sHeight: 3,
        startX: 8,
        startY: validStartY,
        dX: 1,
        dY: 0,
        deltaX: 2.5,
        deltaY: 0,
        speed,
        width: 14.5,
        height: 1.5
      });
    } else {
      // right to left
      return new Projectile({
        game,
        canvas: game.canvas,
        sX: 7,
        sY: 26,
        sWidth: 29,
        sHeight: 3,
        startX: game.canvas.width - 8,
        startY: validStartY,
        dX: -1,
        dY: 0,
        deltaX: 2.5,
        deltaY: 0,
        speed,
        width: 14.5,
        height: 1.5,
      });
    }
  }

  static topBottom(game) {
    const origin = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
    // top is true, bottom is false
    const validStartX = Math.random() * (game.canvas.width-16 - 16) + 16;
    const speed = Math.random() * (1-0.6) + 0.6;

    if (origin) {
      // top to bottom
      return new Projectile({
        game,
        canvas: game.canvas,
        sX: 102,
        sY: 0,
        sWidth: 3,
        sHeight: 29,
        startX: validStartX,
        startY: 8,
        dX: 0,
        dY: 1,
        deltaX: 0,
        deltaY: 2.5,
        speed,
        width: 1.5,
        height: 14.5
      });
    } else {
      // bottom to top
      return new Projectile({
        game,
        canvas: game.canvas,
        flipped: true,
        sX: 0,
        sY: 104,
        sWidth: 3,
        sHeight: 29,
        startX: validStartX,
        startY: game.canvas.height - 8,
        dX: 0,
        dY: -1,
        deltaX: 0,
        deltaY: 2.5,
        speed,
        width: 1.5,
        height: 14.5
      });
    }
  }

  static random (game) {
    return [Projectile.sides(game), Projectile.topBottom(game)][Math.floor(Math.random() * (2 - 0) + 0)];
  }


  move() {
    // generate a random number between 0 and 5 for the projecticle's x and y direction
    
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);

    // if (this.startX < 0 && this.startY < 0) {
    //   this.dX += this.deltaX;
    //   this.dY += this.deltaY;
    // } else if (this.startX < 0 && this.startY > 0) {
    //   this.dX += this.deltaX;
    //   this.dY -= this.deltaY;
    // } else if (this.startX > 0 && this.startY < 0) {
    //   this.dX -= this.deltaX;
    //   this.dY += this.deltaY;
    // } else if (this.startX > 0 && this.startY > 0) {
    //   this.dX -= this.deltaX;
    //   this.dY -= this.deltaY;
    // }
    this.dX > 0 ? this.dX += this.deltaX : this.dX -= this.deltaX;
    this.dY > 0 ? this.dY += this.deltaY : this.dY -= this.deltaY;

    // remove the object from the game if it goes out of bounds
    if (
      this.posX > this.canvas.width ||
      (this.posX + this.width) < 0 ||
      this.posY > this.canvas.height ||
      (this.posY + this.height) < 0 
    ) {
      this.remove();
    }

  }
}

export default Projectile;