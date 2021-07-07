var bodyX = 220;
var bodyY = 246;
var bodyW = 69;
var bodyH = 104;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(117, 183, 214);
  fill(88, 120, 20);
  rect(0, 321, 405, 78);
  fill(245, 231, 231);
  ellipse(3, 109, 96, 48);
  ellipse(399, 110, 106, 52);
  ellipse(351, 111, 99, 50);

  noStroke();
  fill(240, 235, 211);
  ellipse(bodyX, bodyY, bodyW, bodyH); // body

  fill(66, 57, 57);
  ellipse(bodyX, bodyY - (bodyH * 17) / 24, (bodyW * 2) / 3, (bodyH * 4) / 5); // face

  fill(240, 235, 211); //headtop
  rect(
    bodyX - (bodyW * 21) / 100,
    bodyY - (bodyH * 137) / 120,
    (bodyW * 19) / 50,
    (bodyH * 11) / 60,
    (bodyW * 9) / 100
  );

  ellipse(
    bodyX - (bodyW * 1) / 10,
    bodyY - (bodyH * 3) / 4,
    (bodyW * 1) / 5,
    (bodyH * 1) / 6
  ); //eyes.
  ellipse(
    bodyX + (bodyW * 1) / 10,
    bodyY - (bodyH * 3) / 4,
    (bodyW * 1) / 5,
    (bodyH * 1) / 6
  );

  fill(66, 57, 57); //eyeballs
  ellipse(
    bodyX - (bodyW * 1) / 10,
    bodyY - (bodyH * 3) / 4,
    (bodyW * 1) / 10,
    (bodyH * 1) / 12
  );
  ellipse(
    bodyX + (bodyW * 1) / 10,
    bodyY - (bodyH * 3) / 4,
    (bodyW * 1) / 10,
    (bodyH * 1) / 12
  );

  strokeWeight(12); //ears
  stroke(66, 59, 59);
  line(
    bodyX - (bodyW * 1) / 4,
    bodyY - (bodyH * 11) / 12,
    bodyX - (bodyW * 41) / 100,
    bodyY - (bodyH * 77) / 120
  );
  line(
    bodyX + (bodyW * 1) / 4,
    bodyY - (bodyH * 11) / 12,
    bodyX + (bodyW * 41) / 100,
    bodyY - (bodyH * 77) / 120
  );

  noStroke();
  rect(
    bodyX - (bodyW * 21) / 100,
    bodyY + (bodyH * 5) / 12,
    (bodyW * 3) / 20,
    (bodyH * 5) / 12,
    (bodyW * 1) / 20
  ); //legs
  rect(
    bodyX + (bodyW * 1) / 20,
    bodyY + (bodyH * 5) / 12,
    (bodyW * 3) / 20,
    (bodyH * 5) / 12,
    (bodyW * 1) / 20
  );

  noStroke();
  rect(
    bodyX - (bodyW * 22) / 50,
    bodyY - (bodyH * 3) / 20,
    (bodyW * 3) / 20,
    (bodyH * 5) / 12,
    (bodyW * 1) / 20
  ); //arms
  rect(
    bodyX + (bodyW * 29) / 100,
    bodyY - (bodyH * 3) / 20,
    (bodyW * 3) / 20,
    (bodyH * 5) / 12,
    (bodyW * 1) / 20
  );

  ellipse(
    bodyX - (bodyW * 1) / 5,
    bodyY + (bodyH * 97) / 120,
    (bodyW * 7) / 25,
    (bodyH * 1) / 6
  ); //feet
  ellipse(
    bodyX + (bodyW * 1) / 5,
    bodyY + (bodyH * 97) / 120,
    (bodyW * 7) / 25,
    (bodyH * 1) / 6
  );

  ellipse(
    bodyX - (bodyW * 9) / 25,
    bodyY + (bodyH * 37) / 120,
    (bodyW * 7) / 25,
    (bodyH * 1) / 6
  ); //hands
  ellipse(
    bodyX + (bodyW * 9) / 25,
    bodyY + (bodyH * 37) / 120,
    (bodyW * 7) / 25,
    (bodyH * 1) / 6
  );

  if (bodyW > 90) {
    bodyY -= 2;
  }
  bodyW += 0.2;
}
