
document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 640;
  gameCanvas.height = 448;
  const ctx = gameCanvas.getContext('2d');

  // ctx.fillStyle = "red";
  // ctx.fillRect(0,0,250,250);

  const toad = new Image();
  // toad.src = '../images/fez_toad.png';
  toad.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
  console.log(toad);
  // drawImage(img,pxlsLeft,pxlsTop,spriteWidth,spriteHeight, canvasPosx, y, spriteWidth, spriteHeight)
  // img, scaleX, scaleY, sWidth, sHeight, dx, dy, dWidth, dHeight
  ctx.drawImage(toad, 24, 21, 13, 10, 0, 418, 39, 30);
  document.addEventListener("keydown", handleKeydown, false);

});


const handleKeydown = event => {
  console.log(event);
  switch (event.code) {
    case 39:
      console.log("right");
      break;
    case 37:
      console.log("left");
      break;
    case 32:
      console.log("space");
    default:
      break;
  }
}