// define the function
// argument names from here
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function Moveable(xPos, yPos, width, height) {
  // default values will be ground I guess
  xPos = xPos || 0;
  xPos = xPos || 187;
  width = width || 13;
  height = height || 10;
}

//protype will have:

// hits

// draw - takes context arg
Moveable.prototype.draw = function(ctx,img,sX,xY,sWidth,sHeight) {
  ctx.drawImage(img,sX,sY,sWidth,sHeight);
};


// move