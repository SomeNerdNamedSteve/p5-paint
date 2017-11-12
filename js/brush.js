function Brush(){
  this.x = mouseX;
  this.prevX = pmouseX;
  this.y = mouseY;
  this.prevY = pmouseY;
}

Brush.prototype.show = function(){
  line(this.x, this.y, this.prevX, this.prevY);
}
