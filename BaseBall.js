class BaseBall {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0.1,
        friction: 0.1,
        frictionStatic: 1,
        inertia: 1,
        restitution: 0.5,
        isStatic :true
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
  //  this.image=loadImage("Images/CanonBall.png");
    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
   // imageMode(CENTER);
  //  image(this.image,pos.x,pos.y,);
  fill ("black");
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,this.radius);
  
  }
}
