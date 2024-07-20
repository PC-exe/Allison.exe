function setup(){
  createCanvas(640, 640);
  background(225, 59, 60);
}

let diam = 150;

function draw() {
  fill(289, 60, 100)
  circle(mouseX, mouseY, 150);
 // line(width/2, height/2, mouseX, mouseY);
  stroke('royalblue');
  strokeWeight(10);
}

function mouseClicked() {
  background(225, 59, 60);
}