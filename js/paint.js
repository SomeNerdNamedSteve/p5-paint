var prevPositions = [];

var stroke = 15;

var red;

function setup(){
  createCanvas(1280,720);
  red = color(128,0,0);
  noCursor();
  strokeWeight(stroke);
  stroke(red);
}

function draw(){
  background(0);
  fill(red);
  if(mouseIsPressed){
    prevPositions.push(new Brush());
  }else{
    ellipse(mouseX, mouseY, stroke, stroke);
  }

  if(prevPositions.length != 0){
    prevPositions.forEach(position => {
      position.show();
    });
  }
}
