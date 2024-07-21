function setup(){
  createCanvas(640, 640);
  background(225, 59, 60);
}

let diam = 150;

function draw() {
  fill(289, 60, 100)
  //the circle will keep on make a stoke as the mouse goes
  circle(mouseX, mouseY, 150);
 // line(width/2, height/2, mouseX, mouseY);
  stroke('royalblue');
  strokeWeight(10);
}
//Click once to refresh the canvas and start over
function mouseClicked() {
  background(225, 59, 60);
}
