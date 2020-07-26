const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 
var engine,world;
var ground;
var particles=[];
var plinkos=[];
var division=[];



function setup() {
  createCanvas(480,600);
  engine=Engine.create();
  world=engine.world;
  ground= new Division(200,595,600,10);
  
  for(var k=0;k<=width;k=k+80){
    division.push(new Division(k,height-200/2,10,200));
  }
  
  for(var j=45;j<=width;j=j+60){
    plinkos.push(new Plinko(j,50));
  }
  
  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,150));
  }

  for(var j=25;j<=width;j=j+45){
    plinkos.push(new Plinko(j,200));
  }

  for(var j=35;j<=width;j=j+50){
    plinkos.push(new Plinko(j,100));
  }

 

}



function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  if(frameCount%60===0){
  
    particles.push(new Particle (random(width/2-40,width/2+40),10,7));
  
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  
  for(var k=0;k<division.length;k++) {
    division[k].display();
  }

  for(var l=0;l<plinkos.length;l++){
    plinkos[l].display();
  }
}
