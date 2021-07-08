


function setup() {
  createCanvas(400, 400);
}


var drawFish = function (
  centerX,
  centerY,
  eyeSize,
  tailWidth,
  tailHeight,
  bodyColor,
  bodyLength,
  bodyHeight
) {
  noStroke();
  fill(bodyColor);
  // body
  ellipse(centerX, centerY, bodyLength, bodyHeight);
  // tail

  triangle(
    centerX - bodyLength / 2,
    centerY,
    centerX - bodyLength / 2 - tailWidth,
    centerY - tailHeight,
    centerX - bodyLength / 2 - tailWidth,
    centerY + tailHeight
  );
  // eye
  fill(33, 33, 33);
  ellipse(centerX + bodyLength / 4, centerY, eyeSize, eyeSize);
};

var weed = function (x1, x2, y) {
  beginShape();
  noStroke();
  fill(44, 89, 31);
  curveVertex(300, y);
  curveVertex(x1, 399);
  curveVertex(x2, 406);
  curveVertex(242, 848);
  endShape();
};

var bubbles = function (xbubble, ybubble, bubbleSize) {
  strokeWeight(2);
  stroke(220, 242, 242);
  noFill();
  ellipse(xbubble, ybubble, bubbleSize, bubbleSize);
  strokeWeight(1.5);
  arc(xbubble, ybubble, bubbleSize * 0.7, bubbleSize * 0.7, 189, 284);
};
let mouseClick = false;
let mClickedX = 0;
let mClickedY = 0;

let n = 10;

function draw() {
  background(220);

draw = function () {
  background(89, 216, 255);
  if (n < 670) {
    n += 1;
  } else {
    n = -300;
  }

  drawFish(n - 100, 50, 10, 53, 38, color(118, 30, 148), 149, 54);
  drawFish(n, 163, 18, 10, 19, color(140, 137, 38), 124, 54);
  drawFish(n + 200, 106, 25, 10, 71, color(150, 30, 30), 128, 74);
  drawFish(n + 91, 290, 10, 10, 19, color(30, 81, 148), 135, 27);

  if (mouseIsPressed) {
    mouseClick = true;
    mClickedX = mouseX;
    mClickedY = mouseY;
  }
  mClickedX++;
  if (mouseClick) {
    drawFish(mClickedX, mClickedY, 10, 20, 20, color(230, 217, 20), 57, 20);
  } //draw a fish when you click the mouse

  bubbles(200, 300 - n, 20);
  bubbles(300, 20 - n, 24);
  bubbles(160, 150 - n, 20);
  bubbles(157, 402 - n, 16);
  bubbles(89, 535 - n, 26);
  bubbles(347, 500 - n, 9);
  bubbles(171, 735 - n, 26);

  weed(200, 230, 2000);
  weed(257, 234, 2500);
  weed(327, 293, 1800);
  weed(72, 97, 1400);
  weed(152, 131, 1400);
  weed(354, 362, 1566);
  weed(48, 36, 1920);
};




}
