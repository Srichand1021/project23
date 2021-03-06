const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

  
	

	Engine.run(engine);
	ellipseMode(RADIUS);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1=new rope(bob1,roof,-80,0)
  rope2=new rope(bob2,roof,-70,0)
  rope3=new rope(bob3,roof,-60,0)
  rope4=new rope(bob4,roof,-50,0)
  rope5=new rope(bob5,roof,-40,0)

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,10);
  ellipse(bob2.position.x,bob2.position.y,10);
  ellipse(bob3.position.x,bob3.position.y,10);
  ellipse(bob4.position.x,bob4.position.y,10);
  ellipse(bob5.position.x,bob5.position.y,10);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
  if keyCode(up_arrow){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
  }
}