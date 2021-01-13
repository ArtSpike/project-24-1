
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperSprite;
var paperBody,ground
var Box1, Box1Body;
var Box2, Box2Body;
var Box3, Box3Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paperSprite=createSprite(width/2, 80, 10,10);
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	//Box1=createSprite(width/2-100, height-100,30,120);
	//Box2=createSprite(width/2+100,height-100,30,120);
	//Box3=createSprite(width/2,height-55,200,30)
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);

	paperBody = Bodies.circle(100 , 600 , 20 , {restitution:0.4, isStatic:false, fricton: 0.5,density: 1.2});
	World.add(world, paperBody);
	Box1Body=Bodies.rectangle(width/2-100, height-100,30,120,{restitution:0.1,isStatic:true});
	Box2Body=Bodies.rectangle(width/2+100,height-100,30,120,{restitution:0.1,isStatic:true});
	Box3Body=Bodies.rectangle(width/2,height-55,200,30,{restitution:0.1,isStatic:true});
	World.add(world,Box1Body);
	World.add(world,Box2Body);
	World.add(world,Box3Body);

	
	 Engine.run(engine);
  
}


function draw() {
  
  background(0);
  //paperSprite.x= paperBody.position.x 
  //paperSprite.y= paperBody.position.y 

  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x, ground.position.y,width,20);


  fill("yellow")
  rect(Box1Body.position.x, Box1Body.position.y,30,120);
  rect(Box2Body.position.x, Box2Body.position.y,30,120);
  rect(Box3Body.position.x, Box3Body.position.y,200,30);



  fill("purple");
  ellipseMode(RADIUS);
  ellipse(paperBody.position.x,paperBody.position.y,20,20);

  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		//Matter.Body.setStatic(paperBody, false);
		Matter.Body.applyForce(paperBody,paperBody.position,{x:80,y:148});

		console.log(paperBody.position);

	}
}



