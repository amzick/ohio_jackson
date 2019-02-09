class Player {
  constructor(options) {
    // need a reference to the canvas?
    this.canvas = options.canvas;
    // eventually I'll have a sprite
    this.image = options.image;
    // need to keep track of the objects x and y pos
    this.posX = options.posX;
    this.posY = options.posY;
    // speed in x and y
    this.speed = options.speed;
    this.dX = 0;
    this.dY = 0;
    // width and height
    this.width = options.width;
    this.height = options.height;

    //end of options

    // movement
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    // add the constructors right away
    document.addEventListener("keydown", this.handleKeydown.bind(this), false);
    document.addEventListener("keyup", this.handleKeydown.bind(this), false);

    //bind draw?
    // this.draw = this.draw.bind(this);
    

  }

  draw(ctx) {
    // eventually this will be a sprite
    ctx.fillStyle = "purple";
    ctx.fillRect(this.posX + (this.dX * this.speed), this.posY + (this.dY * this.speed), this.width, this.height);
    // ???
    this.move();
  }

  collides() {
    // ??
  }

  handleKeydown(event) {
    if (event.key === "ArrowRight" || event.key === "Right") {
      console.log(event.key);
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
    // called in draw?
    if (this.leftPressed) {
      this.dX = -5;
    } else if (this.rightPressed) {
      this.dX = 5;
    } else if (!this.leftPressed && !this.rightPressed) {
      this.dX = 0;
    }

    if (this.upPressed) {
      this.dY = -5;
    } else if (this.downPressed) {
      this.dY = 5;
    } else if (!this.upPressed && !this.downPressed) {
      this.dY = 0;
    }
  }
}

export default Player;