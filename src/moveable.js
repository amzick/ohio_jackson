// define the function
// argument names from here
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images

class Moveable {
  constructor(options) {
    // need a reference to the canvas?
    this.canvas = options.canvas;
    // eventually I'll have a sprite
    this.image = options.image;
    this.sX = options.sX;
    this.sY = options.sY;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    // need to keep track of the objects x and y pos
    this.startX = options.startX;
    this.startY = options.startY;
    // speed in x and y
    this.speed = options.speed;
    this.dX = 0;
    this.dY = 0;
    // width and height
    this.width = options.width;
    this.height = options.height;

    this.move = this.move.bind(this);
  }


  draw(ctx) {
    ctx.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    this.move();
  }

  collides() {
    // will I call super collides and then have rules depending on the object?
    // and just define what happens here?
  }

  move() {
    // redefined in each child class since they'll have unique patterns
  }
}

export default Moveable;