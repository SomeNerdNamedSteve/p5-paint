let prevPositions = [];
let weight;
let white, red, green, blue;
var currColor;

function setup(){
  createCanvas(1280,720);
  white = color(255,255,255);
  red = color(128,0,0);
  green = color(0,128,0);
  blue = color(0,0,128);
  weight = 5;
  noCursor();
  currColor = white;
}

function draw(){
  background(0);
  fill(currColor);
  stroke(currColor);
  ellipse(mouseX, mouseY, weight, weight);

  if(mouseIsPressed){
    prevPositions.push(new Brush(currColor));
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

function setColor(str){
  if(str === "red"){
    currColor = red;
  }else if (str === "blue"){
    currColor = blue;
  }else if(str === "green"){
    currColor = green;
  }else if(str === "white"){
    currColor = white;
  }
}
