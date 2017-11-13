function Brush(){
  this.x = mouseX;
  this.prevX = pmouseX;
  this.y = mouseY;
  this.prevY = pmouseY;
  this.weight = 5;
}

Brush.prototype.draw = function(){

  strokeWeight(weight);
  line(this.x, this.y, this.prevX, this.prevY);
}
