let prevPositions = [];
let weight;
let white, red, green, blue;

function setup(){
  createCanvas(1280,720);
  white = color(255,255,255);
  red = color(128,0,0);
  green = color(0,128,0);
  blue = color(0,0,128);
  weight = 5;
  noCursor();
}

function draw(){
  background(0);
  fill(white);
  stroke(white);

  ellipse(mouseX, mouseY, weight, weight);

  if(mouseIsPressed){
    prevPositions.push(new Brush());
  }

  if(prevPositions.length != 0){
    prevPositions.forEach(position => {
      position.draw();
    });
  }
}

function downloadCanvas(){
  let dateStr = "Canvas at " +  new Date().getTime() + ".png"
  saveCanvas(dateStr);
}

function eraseCanvas(){
  prevPositions = [];
}
