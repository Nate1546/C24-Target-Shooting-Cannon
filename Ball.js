class Ball extends BaseBall{
    constructor(x,y,radius){
      super(x,y,radius);
      
    }
    display() {
      var pos=this.body.position;
    // imageMode(CENTER);
    //  image(this.image,pos.x,pos.y,);
      fill ("red");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
    }
}