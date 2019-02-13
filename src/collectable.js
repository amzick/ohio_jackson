import Moveable from './moveable';

class Collectable extends Moveable {
  constructor(options) {
    super(options);
    this.range = options.range || 25;
    this.direction = options.direction || "H";
    this.switchDirection = false;
  }

  remove() {
    console.log("Removing collectable");
  }

  move() {
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);

    if (this.direction === "H") {
      let positiveX = (this.dX > 0);

      if (positiveX && this.posX < (this.startX + this.range) && !this.switchDirection) {
        this.switchDirection = false;
        this.dX++;
      } else if (positiveX && this.posX >= this.startX + this.range) {
        this.switchDirection = true;
        this.dX--;
      } else if (positiveX && this.posX < (this.startX + this.range) && this.switchDirection) {
        this.dX--;
      } else if (!positiveX && this.posX > (this.startX - this.range) && this.switchDirection) {
        this.dX--;
      } else if (!positiveX && this.posX > (this.startX - this.range) && !this.switchDirection) {
        this.dX++;
      } else if (!positiveX && this.posX <= (this.startX - this.range)) {
        this.switchDirection = false;
        this.dX++;
      }
    }

    if (this.direction === "V") {
      let positiveY = (this.dY > 0);

      if (positiveY && this.posY < (this.startY + this.range) && !this.switchDirection) {
        this.switchDirection = false;
        this.dY++;
      } else if (positiveY && this.posY >= this.startY + this.range) {
        this.switchDirection = true;
        this.dY--;
      } else if (positiveY && this.posY < (this.startY + this.range) && this.switchDirection) {
        this.dY--;
      } else if (!positiveY && this.posY > (this.startY - this.range) && this.switchDirection) {
        this.dY--;
      } else if (!positiveY && this.posY > (this.startY - this.range) && !this.switchDirection) {
        this.dY++;
      } else if (!positiveY && this.posY <= (this.startY - this.range)) {
        this.switchDirection = false;
        this.dY++;
      }
    }
  }

}

export default Collectable;