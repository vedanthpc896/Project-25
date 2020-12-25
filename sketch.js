const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var redbox,redbox1,redbox2;

function preload()
{
	dustbinImage = loadImage("Dustbin.png")
	paperImage = loadImage("paper.png")
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	redbox=createSprite(680,670,200,20);
	redbox.addImage("dustbinImage",dustbinImage)

	
	ball = createSprite(100,600,30);
    ball.addImage("paperImage",paperImage)

	ground = new Ground(450,680,900,10);
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
  background("yellow");
  ground.display();
 


  //ball.collide(redbox1);
  //ball.collide(redbox1);
  //redbox.collide(ball);
  //redbox1.collide(ball);
  //redbox2.collide(ball);

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
  
	}
}


