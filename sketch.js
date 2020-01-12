// You could have multiple flags like: start, launch to indicate the state of the game.
/*
const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
Body=Matter.Body;
Mouse=Matter.Mouse;
MouseConstraint=Matter.MouseConstraint;
Constraints=Matter.Constraints;
Composite=Matter.Composite;
Composites=Matter.Composites;
Detector=Matter.Detector;

var engine, world;
var rect1,dome,cir1;
var backgroundImg;
//var bird, slingshot;
var gamestate = "load";
var ground, platform;

function preload() {
   backgroundImg = loadImage("Images/bg.png");
}

// Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,canvas.height-10,800,20);
    platform = new Ground(150, canvas.height-70, 300, 100);

    rect1 = new BaseClass(200,265,100,30);
    rect2 = new BaseClass(200,234,75,30);
    dome = new BaseBall(200,220,30);
    
    gun=new CShooter(310,160,100,PI/3);
    ball1 = new Ball(400,200,10);
    
    
     
 
}

// Remember to update the Matter Engine and set the background.
function draw() {
   background(backgroundImg);
   Engine.update(engine);
   
   ground.display();
   platform.display();
   
   rect1.display();
   dome.display();
   rect2.display();
   
   gun.display();
   ball1.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}

function mouseReleased(){
   // slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{x:200,y:50});
       gamestate="onSling";
        slingshot.attach(bird.body);
    }
}


    