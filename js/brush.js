function Brush(color){
  this.x = mouseX;
  this.prevX = pmouseX;
  this.y = mouseY;
  this.prevY = pmouseY;
  this.weight = 5;
  this.color = color;
}

Brush.prototype.draw = function(){
  strokeWeight(weight);
  stroke(this.color);
  line(this.x, this.y, this.prevX, this.prevY);
}
