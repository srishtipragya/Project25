
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var ground;
var bin1,bin2,bin3;
var dustbin;
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	trash=new Paper();
	ground=new Ground();

	bin1=new Dustbin(800,530,170,20);
	bin2=new Dustbin(720,470,20,120);
	bin3=new Dustbin(880,470,20,120);

	dustbin=loadImage("dustbin.png");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
	trash.display();
	ground.display();

	bin1.display();
	bin2.display();
	bin3.display();

	image(dustbin,800,465,200,150);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		var option={
			x:75,
			y:-100
		}
		Matter.Body.applyForce(trash.body,trash.body.position,option);
	}
}


