const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies;
   var myEngine, myWorld;
    //JSON- javascript object notation 
    function setup() {
  createCanvas(400,400);
   myEngine = Engine.create();
    myWorld=myEngine.world; 
    var option={ isStatic:true } 
    ground=Bodies.rectangle(200,380,400,20,option); 
    World.add(myWorld,ground); 
    console.log(ground);
    
    var option1 = {restitution : 1.0} 
    ball = Bodies.rectangle(200,200,20,20,option1); 
    World.add(myWorld,ball); 
   }
     function draw() {
        background("black");
         Engine.update(myEngine);
          rectMode(CENTER);
           
            rect(ground.position.x,ground.position.y,400,20); 
            ellipse(ball.position.x, ball.position.y, 20, 20);
          }