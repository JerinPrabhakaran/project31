var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var particle1;
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);
  ground2 = new Ground(0,400,20,800);
  ground3 = new Ground(800,400,20,800);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  for (var p = 0; p < 1000; p++) {
 // if(frameCount % 50 === 0){
    particles.push(new Particle(random(width/2-300 ,width/2+300),50,20 ,20));
 // }
  }
    Engine.run(engine);
}
 


function draw() {
  background("black");
 // textSize(20)
 
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the paricles   
  for (var p = 0; p < particles.length; p++) {
      particles[p].display();
  }
  console.log(frameCount);
}