import Moveable from './moveable';
import Collectable from './collectable';
import Coin from './coin';

class Player extends Moveable {
  constructor(options) {
    super(options);
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    // add the constructors right away
    document.addEventListener("keydown", this.handleKeydown.bind(this), false);
    document.addEventListener("keyup", this.handleKeyup.bind(this), false);

    this.health = 1;
  }

  hits(object) {
    object.remove();
  }

  handleKeydown(event) {
    if (event.key === "ArrowRight" || event.key === "Right") {
      this.rightPressed = true;
    } else if (event.key === "ArrowLeft" || event.key === "Left") {
      this.leftPressed = true;
    }

    // the up and down are in seperate 
    if (event.key === "ArrowUp" || event.key === "Up") {
      this.upPressed = true;
    } else if (event.key === "ArrowDown" || event.key === "Down") {
      this.downPressed = true;
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowRight" || event.key === "Right") {
      this.rightPressed = false;
    } else if (event.key === "ArrowLeft" || event.key === "Left") {
      this.leftPressed = false;
    }

    // the up and down are in seperate 
    if (event.key === "ArrowUp" || event.key === "Up") {
      this.upPressed = false;
    } else if (event.key === "ArrowDown" || event.key === "Down") {
      this.downPressed = false;
    }
  }

  // add in can't go through edge of canvas
  move() {
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);
    if (this.leftPressed && this.posX > 16) {
      this.dX -= 1;
      // console.log("left!");
      // this.posX -= 1;
    } else if (this.rightPressed && this.posX < (this.canvas.width - 16 - this.width)) {

      this.dX += 1;
      // this.posX += 1;

    }

    if (this.upPressed && this.posY > 16) {
      this.dY -= 1;
    } else if (this.downPressed && this.posY < (this.canvas.height - 16 - this.height)) {
      this.dY += 1;
    }
  }
}

export default Player;