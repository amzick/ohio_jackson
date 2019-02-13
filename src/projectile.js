import Moveable from './moveable';

class Projectile extends Moveable {
  constructor(options) {
    super(options);
    // projectiles will originate off the screen and fly across
    // if they are off the left side they will have a positive dX, right side negative
    // if they are off the top side they will have a positive dY, bottom negative
    this.dX = (this.startX < 0 ? 1 : -1);
    this.dY = (this.startY < 0 ? 1 : -1);
    this.deltaX = Math.floor(Math.random() * (1000 - 500)) / 100;
    this.deltaY = Math.floor(Math.random() * (1000 - 500)) / 100;

    this.move = this.move.bind(this);
  }


  move() {
    // generate a random number between 0 and 5 for the projecticle's x and y direction
    
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);

    if (this.startX < 0 && this.startY < 0) {
      this.dX += this.deltaX;
      this.dY += this.deltaY;
    } else if (this.startX < 0 && this.startY > 0) {
      this.dX += this.deltaX;
      this.dY -= this.deltaY;
    } else if (this.startX > 0 && this.startY < 0) {
      this.dX -= this.deltaX;
      this.dY += this.deltaY;
    } else if (this.startX > 0 && this.startY > 0) {
      this.dX -= this.deltaX;
      this.dY -= this.deltaY;
    }

  }
}

export default Projectile;