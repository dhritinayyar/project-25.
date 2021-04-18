
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobj,paperobj,groundobj,engine;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperobj = new paper (40,40,20);
	dustbinobj =new dustbin(600,450);
	groundobj=new ground(600,400);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  paperobj.display();
  dustbinobj.display();
  groundobj.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:60,y:-60});


}



}

