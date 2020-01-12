class CShooter extends BaseClass{
  constructor(x, y, width,angle) {
    super(x,y,10,width,angle);  
    var options = {
      isStatic: true
    }
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    fill("red");
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CORNER);
    rotate(angle);
    rect(0, 0, this.width, this.height);
    pop();

  }
}