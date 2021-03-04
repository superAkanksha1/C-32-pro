const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var score = 0;
function setup() {
  createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  //top layer
  bubble1 = new RedBubble(50,50,50);
  bubble2 = new GreenBubble(150,50,50);
  bubble3 = new PurpleBubble(250,50,50);
  bubble4 = new YellowBubble(350,50,50);
  bubble5 = new GreenBubble(450,50,50);
  bubble6 = new PurpleBubble(550,50,50);
  bubble7 = new YellowBubble(650,50,50);
  bubble8 = new RedBubble(750,50,50);

  //second layer
  bubble9 = new GreenBubble(50,150,50);
  bubble10 = new PurpleBubble(150,150,50);
  bubble11 = new YellowBubble(250,150,50);
  bubble12 = new GreenBubble(350,150,50);
  bubble13 = new PurpleBubble(450,150,50);
  bubble14 = new YellowBubble(550,150,50);
  bubble15 = new RedBubble(650,150,50);
  bubble16 = new YellowBubble(750,150,50);


  shooter = new Arrow(400,600,25);

  slingshot = new SlingShot(shooter.body,{x:400 , y:600});

  Engine.run(engine);

}

function draw() {
  background(0);  

  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  bubble5.display();
  bubble6.display();
  bubble7.display();
  bubble8.display();

  bubble9.display();
  bubble10.display();
  bubble11.display();
  bubble12.display();
  bubble13.display();
  bubble14.display();
  bubble15.display();
  bubble16.display();
  
  shooter.display();

  slingshot.display();

  detectCollision1(shooter, bubble3);
  detectCollision1(shooter, bubble13);
  detectCollision1(shooter, bubble10);

  detectCollision2(shooter, bubble4);
  detectCollision2(shooter, bubble7);
  detectCollision2(shooter, bubble11);
  detectCollision2(shooter, bubble14);
  detectCollision2(shooter, bubble16);

  detectCollision3(shooter, bubble2);
  detectCollision3(shooter, bubble5);
  detectCollision3(shooter, bubble9);
  detectCollision3(shooter, bubble12);

  detectCollision4(shooter, bubble1);
  detectCollision4(shooter, bubble8);
  detectCollision4(shooter, bubble15);
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(shooter.body);
  }
}
function detectCollision1(larrow, lpurple){
  PurpleBubbleBodyPosition = lpurple.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y, PurpleBubbleBodyPosition.x, PurpleBubbleBodyPosition.y)

  if(distance<=lpurple.r+larrow.r)
  {
    Matter.Body.setStatic(lpurple.body, false)
  }
}

function detectCollision2(larrow, lyellow){
  YellowBubbleBodyPosition = lyellow.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , YellowBubbleBodyPosition.x,  YellowBubbleBodyPosition.y)

  if(distance<=lyellow.r+larrow.r)
  {
    Matter.Body.setStatic(lyellow.body, false)
  }
}

function detectCollision3(larrow, lgreen){
  GreenBubbleBodyPosition = lgreen.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , GreenBubbleBodyPosition.x,  GreenBubbleBodyPosition.y)

  if(distance<=lgreen.r+larrow.r)
  {
    Matter.Body.setStatic(lgreen.body, false)
  }
}

function detectCollision4(larrow, lred){
  RedBubbleBodyPosition = lred.body.position
  ArrowBodyPosition = larrow.body.position

  var distance = dist(ArrowBodyPosition.x, ArrowBodyPosition.y , RedBubbleBodyPosition.x,  RedBubbleBodyPosition.y)

  if(distance<=lred.r+larrow.r)
  {
    Matter.Body.setStatic(lred.body, false)
  }
}