
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground,handle;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(400,690,800,5,{isStatic:true})
	World.add(world,ground)
	
	handle = Bodies.rectangle(400,350,600,20,{isStatic:true})
	World.add(world,handle)

    bob1 = new Ball(300,450)
	bob2 = new Ball(350,450)
	bob3 = new Ball(400,450)
	bob4 = new Ball(450,450)
	bob5 = new Ball(500,450)

	chain1 = new SlingShot(bob1.body,this.handle,-80,0)
	chain2 = new SlingShot(bob2.body,this.handle,-40,0)
	chain3 = new SlingShot(bob3.body,this.handle,0,0)
	chain4 = new SlingShot(bob4.body,this.handle,40,0)
	chain5 = new SlingShot(bob5.body,this.handle,80,0)

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

rectMode(CENTER);
   fill("green")
	rect(ground.position.x,ground.position.y,800,5)
	rectMode(CENTER);
	rect(handle.position.x,handle.position.y,600,20)
}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.1,y:-0.1})
}
}