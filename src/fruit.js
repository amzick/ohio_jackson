import Collectable from './collectable';

class Fruit extends Collectable {

  constructor(options) {
    super(options);
    const fruitImg = new Image();
    fruitImg.src = "https://s3.amazonaws.com/letsgoeros-dev/fruit_alpha.png";
    this.image = fruitImg;
  }

  update() {
    this.tickCount++;
    if (this.tickCount > (14 * this.ticksPerFrame)) {
      this.tickCount = 0;
    }
    const frame = Math.floor(this.tickCount / this.ticksPerFrame);
    this.sX = (frame * 16) + 2;
  }

  remove() {
    this.game.fruits.delete(this);
  }

  static fresh(game) {
    const range = Math.random() * (25 - 7) + 7;
    const validStartX = Math.random() * (game.canvas.width - 15 - 16 - (range * 2)) + (16 + range);
    const validStartY = Math.random() * (game.canvas.height - 15 - 16 - (range * 2)) + (16 + range);

    const direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
    const switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];

    return new Fruit({
      game,
      sX: 2,
      sY: 0,
      sWidth: 13,
      sHeight: 15,
      startX: validStartX,
      startY: validStartY,
      speed: 0.3,
      dX: 1,
      width: 9,
      height: 10,
      range,
      direction,
      switchDirection
    });
  }
}

export default Fruit;