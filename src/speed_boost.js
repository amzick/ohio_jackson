import Collectable from './collectable';

class SpeedBoost extends Collectable {

  constructor(options) {
    super(options);
    const img = new Image();
    img.src = "https://s3.amazonaws.com/letsgoeros-dev/powerups_alpha.png";
    this.image = img;
    this.frameIndicies = [
      [359,63,15,15],
      [371,50,11,15],
      [386,61,11,15],
      [396,50,7,10],
      [409,63,7,10],
      [412,77,11,15],
      [387,77,15,15],
      [365,79,11,12]
    ];
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > (7 * this.ticksPerFrame)) {
      this.tickCount = 0;
    }
    const index = Math.floor(this.tickCount / this.ticksPerFrame);
    this.sX = this.frameIndicies[index][0];
    this.sY = this.frameIndicies[index][1];
    this.sWidth = this.frameIndicies[index][2];
    this.sHeight = this.frameIndicies[index][3];
    this.width = this.sWidth * (2/3);
    this.height = this.sHeight * (2 / 3);
  }

  remove() {
    this.game.powerUps.delete(this);
  }

  static generate(game) {
    const range = Math.random() * (25 - 7) + 7;
    const validStartX = Math.random() * (game.canvas.width - 15 - 16 - range) + (16 + range);
    const validStartY = Math.random() * (game.canvas.height - 15 - 16 - range) + (16 + range);

    const direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
    const switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];

    return new SpeedBoost({
      game,
      sX: 359,
      sY: 63,
      sWidth: 15,
      sHeight: 15,
      startX: validStartX,
      startY: validStartY,
      speed: 0.3,
      dX: 1.5,
      width: 10,
      height: 10,
      range,
      direction,
      switchDirection
    });
  }
}

export default SpeedBoost;