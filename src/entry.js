
document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');
  setInterval(drawSquare,10);
  var deltaX = 0;
  var deltaY = 0;
  function drawSquare() {
    ctx.clearRect(0,0,320,224)
    ctx.fillStyle = "green";
    ctx.fillRect(0 + deltaX, 187 - deltaY, 13, 10);
  };


  // const toad = new Image();
  // toad.src = '../images/fez_toad.png';
  // toad.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
  // toad.src = '../images/88720.png';

  // drawImage(img,pxlsLeft,pxlsTop,spriteWidth,spriteHeight, canvasPosx, y, spriteWidth, spriteHeight)
  // img, scaleX, scaleY, sWidth, sHeight, dx, dy, dWidth, dHeight
  // toad


  // const ground = new Image();
  document.addEventListener("keydown", handleKeydown, false);
  
  // ground.src = "https://www.spriters-resource.com/resources/sheets/1/269.png";
  // ctx.drawImage(toad, 24, 21, 13, 10, 0, 187, 13, 10);
  // ctx.drawImage(ground,139,250,121,24,-10,200,121,24);
  let jumpInterval;
  function handleKeydown(event) {
    // console.log(event);
    switch (event.which) {
      case 39:
        deltaX += 2;
        console.log(deltaX);
        break;
      case 37:
        console.log(deltaX);
        deltaX -= 2;
        break;
      case 32:
        // jump function. set interval, jump function clears interval
        jumpInterval = setInterval(jump, 500);        
        break;
      default:
        break;
    }
    drawSquare();
  };

  function jump() {
    
  }

  

});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

