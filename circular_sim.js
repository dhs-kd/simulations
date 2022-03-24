var r = 200;
var velocity = 30;
var theta = 0;
var acc = 0;
var dt = 1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}


function draw() {
  background(220);
  translate(width/2,height/2)
  
  //draw central circle
  fill('black')
  noStroke()
  circle(0,0,15)
  
  //draw circle
  noFill()
  stroke('blue')
  strokeWeight(3)
  circle(0,0,r * 2)
  
  
  theta += velocity * dt
  velocity += acc * dt
  


  let pos = createVector(r * cos(theta), r * sin(theta))
  
  //draw line
  stroke(2)
  line(0,0,(pos.x),(pos.y))
  
  //draw object
  noStroke()
  fill('red')
  circle(pos.x,pos.y,15)
  
}