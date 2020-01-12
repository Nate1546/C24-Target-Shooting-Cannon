class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.angle=angle;
     //   this.image = loadImage("Images/base.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.angle;
        var pos=this.body.position;
        fill("brown");
        
        rotate(angle);
        rectMode(CENTER);
      //  image(this.image, 0, 0, this.width, this.height);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}