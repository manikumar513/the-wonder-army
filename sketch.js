var hero,hero_running,hero_runningb
var heroimg2
var box,boximg
var box2
var ground
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,fire
var enemyimg,enemy2img,enemy3img,enemy4img,enemy5img,enemy6img,enemy7img,fireimg
var ecamp,ecamp2,ecamp3
var ecampimg,ecamp2img,ecamp3img
var nurses,nursesimg
var health=null;
var health2=null;
var health3=null;
var stone,stoneimg
var gameState=Play
var Play=1;
var End=0;
var bulletsGroup;
var score=0;
var grass,grassImg,grass2,grass2Img
var tree,treeImg,tree2
var grass3
var jungle,jungleimg
var jungle2
var jungle3
var flame,flameImg
var gameState=Play
var Play=1
var End
var bomb,bombImg
var rib,ribimg
var enemys
var gate
var computer
var medkit,medkitImg
var inf,infImg
var scope,scopeimg
var comet,cometimg
var go,goimg
var over,overimg
var score=0
var reset,resetimg
var box3
var box4
var jullu,julluimg,winimg
var win
var audio=new Audio('')
var gameOver
var gui,guiimg

function preload(){
  //bgImg=loadImage("sachin.png")
  fireimg=loadImage("cook0.png")
  hero_running=loadAnimation("armyimg/army0.png","armyimg/army1.png","armyimg/army2.png","armyimg/army3.png","armyimg/army4.png","armyimg/army5.png")
  ecampimg=loadImage("camp0.png")
  boximg=loadImage("kila.png0.png")
  stoneimg=loadImage("stone0.png")
  //jungleimg=loadImage("jungle.png")
  enemyimg=loadImage("sprite_0.png")
  grassImg=loadImage("sprite_enemy0.png")
  treeImg=loadImage("tree.png")
  hero_runningb=loadAnimation("backarmy0.png","backarmy1.png","backarmy2.png","backarmy3.png","backarmy4.png","backarmy5.png")
  nursesimg=loadImage("nurse0.png")
  jungleimg=loadImage("jungle870.png")
  flameImg=loadImage("flame0.png")
 // bombImg=loadImage("bomb0.png")
  ribimg=loadImage("rib30.png")
  enemys=loadImage("shoot0.png")
  comimg=loadImage("comp0.png")
  medkitImg=loadImage("med0.png")
  infImg=loadImage("m0.png")
  heroimg2=loadImage("die0.png")
  scopeimg=loadImage("scope0.png")
  cometimg=loadImage("untitled.png")
  goimg=loadImage("go0.png")
  //overimg=loadImage("gameover.png")
  resetimg=loadImage("reset0.png")
  box3img=loadImage("rdx0.png")
  julluimg=loadImage("score00.png")
  julluimg2=loadImage("score200.png")
  julluimg3=loadImage("score400.png")
  julluimg4=loadImage("score600.png")
  julluimg5=loadImage("score800.png")
  julluimg6=loadImage("score100.png")
  julluimg7=loadImage("score120.png")
  winimg=loadImage("over.png")
  dieimg=loadImage("die0.png")
  guiimg=loadImage("process.png")
}


function setup(){
  
  createCanvas(800,400)
  
 jungle=createSprite(400,200,4000,400)
 jungle.addImage(jungleimg)
 jungle.scale=4
 jungle2=createSprite(2214,200,400,400)
 jungle2.addImage(jungleimg)
 jungle2.scale=4
 jungle3=createSprite(4000,200,200,400)
 jungle3.addImage(jungleimg)
 jungle3.scale=4

 win=createSprite(3700,200,200,400)
 win.addImage(winimg)
 win.scale=4
 win.visible=false

 //bomb=createSprite()
 rib=createSprite(3896,360,10,120)
 rib.addImage(ribimg)
 rib.scale=3
 gate=createSprite(3747,310,10,150)
 gate.shapeColor="brown"
 computer=createSprite(3630,320,20,20)
 computer.addImage(comimg)
 computer.scale=2

  ground=createSprite(300,380,10000,20)
 //bg=createSprite(400,200,800,400)
  ground.shapeColor="black"
  ground.visible=false
  enemy=createSprite(550,330,20,90)
  enemy.shapeColor="red"
  enemy.setCollider("rectangle",0,0,70,60)
  enemy.debug=false
  enemy.addImage(enemyimg)
  enemy.scale=2.2
 // enemy.scale=0.5
  enemy2=createSprite(1365,330,20,90)
  //laser=createSprite(1400,150,10,300)
  //enemy3=createSprite(1818,330,20,90)
  //health=createSprite(1908,330,40,40)
  ecamp2=createSprite(1665,270,300,90)
  ecamp2.addImage(ecampimg)
  box=createSprite(1995,320,40,40)
  box.addImage(boximg)
  stone=createSprite(2700,383,40,40)
  stone.scale=0.9
  stone.addImage(stoneimg)
  box.scale=3.5
  box2=createSprite(1990,290,5,5)
  box2.visible=true
  box3=createSprite(1905,380,50,50)
 // box3.shapeColor="black"
  box3.addImage(box3img)
  box3.scale=2.9
  box4=createSprite(2030,380,50,50)
  box4.addImage(box3img)
  box4.scale=2.9
  enemy3=createSprite(2385,330,20,90)
  enemy3.setCollider("rectangle",0,0,70,90)
  enemy3.debug=false
  enemy3.addImage(enemyimg)
  enemy3.scale=2.2
  enemy4=createSprite(3042,330,20,90)
  enemy4.addImage(enemyimg)
  enemy4.scale=2.2
  enemy4.setCollider("rectangle",0,0,70,90)
  enemy4.debug=false
  enemy5=createSprite(3510,330,20,90)
  enemy5.scale=2.2
  enemy5.addImage(enemyimg)
  enemy5.setCollider("rectangle",0,0,70,90)
  enemy5.debug=false
  enemy2.addImage(enemyimg)
  enemy2.setCollider("rectangle",0,0,70,90)
  enemy2.debug=false
  enemy2.scale=2.2
  hero=createSprite(-90,350,40,90)
  health=createSprite(-120,100,10,10)
  health.shapeColor="red"
  health2=createSprite(-100,100,10,10)
  health2.shapeColor="yellow"
  health3=createSprite(-80,100,10,10)
  health3.shapeColor="green"
  flame=createSprite(-90,350,5,5)
  flame.visible=false
  enemy6=createSprite(1962.2,220.45,20,90)
  enemy6.addImage(enemyimg)
  enemy6.scale=2.2
  enemy6.setCollider("rectangle",0,0,70,30)
  enemy6.debug=false
  medkit=createSprite(1638,370,40,40)
  medkit.addImage(medkitImg)
  hero.addAnimation("running",hero_running)
  hero.scale=0.8
  hero.setCollider("rectangle",0,0,430,80)
  hero.debug=false;
  fire=createSprite(1017,300,40,40)
  fire.addImage(fireimg)
  fire.scale=0.9
  ecamp=createSprite(800,270,300,150)
  ecamp.addImage(ecampimg)
  go=createSprite(9,300,20,20)
  go.addImage(goimg)
  go.scale=0.9

  bulletsGroup=new Group
 //jungle=createSprite(400,200,4000,400)
 //jungle.addImage(jungleimg)

grass=createSprite(63,350,20,20)
grass.addImage(grassImg)
grass.scale=2
grass2=createSprite(-261,360,20,20)
grass2.addImage(grassImg)
grass2.scale=2
tree=createSprite(360,300,10,120)
tree.addImage(treeImg)
tree.scale=2.5
tree2=createSprite(1512,300,10,120)
tree2.addImage(treeImg)
tree2.scale=2.5
grass3=createSprite(1194,350,10,120)
grass3.addImage(grassImg)
grass3.scale=2
nurses=createSprite(3800,330,10,90)
nurses.addImage(nursesimg)
nurses.scale=1.5

nurses2=createSprite(3906,330,10,90)
nurses2.addImage(nursesimg)
nurses2.scale=1.5
inf=createSprite(1638,330,5,5)
scope=createSprite(hero.x+150,305,40,40)
scope.addImage(scopeimg)
scope.scale=0.6
score=0
reset=createSprite(3800,200,40,40)
reset.addImage(resetimg)
jullu=createSprite(-420,40,120,60)
jullu.addImage(julluimg)
jullu.scale=1.9
gui=createSprite(-140,200,60,60)
gui.addImage("loda",guiimg)
gui.scale=0.2

}
function draw (){
 // text("score"+score,500,50);
//background("jungle.png")
  

  

  
  if(gameState===Play){
   // score=score+Math.round(getFrameRate()/60)
   text("score"+score,500,50);
  if(hero.isTouching(computer)){
    textSize(15)
    text("C",3600,300)
  }
  if(keyDown("ENTER")){
    gate.velocityY=-9
  }

  hero.collide(ground)
  //fire.collide(ground)
  hero.collide(box2)
  hero.collide(gate)
  enemy.collide(box2)
  jungle3.depth+4
  health.x=hero.x+20-10
  health2.x=hero.x+40-20
  health3.x=hero.x+60-30
  scope.x=hero.x+200
  scope.y=hero.y-15
  go.depth=+3
  console.log(enemy6.x)
  jullu.x=hero.x-300
  reset.visible=false
 // console.log(enemy3.x)
  
 console.log(hero.x)
 //console.log(hero.y)
 
if(hero.isTouching(enemy)){
  enemy.addImage(enemys)
  bullets1()
}else{
  enemy.addImage(enemyimg)
}
if(hero.isTouching(enemy2)){
  enemy2.addImage(enemys)
  bullets2()
}else{
  enemy2.addImage(enemyimg)
  
}


if(hero.isTouching(enemy3)){
  enemy3.addImage(enemys)
  bullets3()
}else{
  enemy3.addImage(enemyimg)
}

if(hero.isTouching(enemy4)){
  enemy4.addImage(enemys)
  bullets4()
}else{
  enemy4.addImage(enemyimg)
}
if(hero.isTouching(enemy5)){
  enemy5.addImage(enemys)
  bullets5()
  
}else{
  enemy5.addImage(enemyimg)
}
if(hero.isTouching(enemy6)){
  enemy6.addImage(enemys)
  bullets6()
}else{
  enemy6.addImage(enemyimg)
}



  if(keyDown(RIGHT_ARROW)){
    hero.x=hero.x+20-11
    //hero.shapeColor="red"
    //hero.addAnimation("running",hero_running)
  }else{
    hero.addAnimation("running",hero_running)
}
  if(keyDown(LEFT_ARROW)){
    hero.x=hero.x-9
    hero.addAnimation("runningb",hero_runningb)
   // hero_running=changeAnimation("backarmy0.png","backarmy1.png","backarmy2.png","backarmy3.png","backarmy4.png","backarmy5.png")
    //hero.shapeColor="blue"
  }else{
   // hero_running=loadAnimation("armyimg/army0.png","armyimg/army1.png","armyimg/army2.png","armyimg/army3.png","armyimg/army4.png","armyimg/army5.png")
   //hero.addAnimation("runningb",hero_runningb)
  }
  if(keyDown("UP_ARROW")&&hero.y>120){
   hero.y=hero.y- 34    
}
  if(hero.isTouching(enemy)){
    
    enemy.x=enemy.x+2
    enemy.depth=hero.depth
  }
  if(hero.isTouching(enemy2)){
    //jullu.addImage(julluimg3)
    enemy2.x=enemy2.x+2
    enemy2.depth=hero.depth
  }
  if(hero.isTouching(enemy3)){
   // jullu.addImage(julluimg4)
    enemy3.x=enemy3.x+2
    enemy3.depth=hero.depth
  }
  if(hero.isTouching(enemy4)){
    //jullu.addImage(julluimg5)
    enemy4.x=enemy4.x+2
    enemy4.depth=hero.depth
  }
  if(hero.isTouching(enemy5)){
    //jullu.addImage(julluimg6)
    enemy5.x=enemy5.x+2
    enemy5.depth=hero.depth
  }
  fire.depth=ecamp.depth+2
  ecamp.depth=hero.depth-3
  //hero.depth=jungle3.depth+3
  //score.y=hero.y+300
  score.x=hero.x
  hero.velocityY=hero.velocityY+0.9
  camera.x=hero.x
 // console.log(hero.x)
  //hero.depth=jungle.depth+4
  if(keyDown(DOWN_ARROW)){
    hero.scale=0.2
    scope.scale=0.4
  }else{
    hero.scale=0.8
    scope.scale=0.6
  }
  if(hero.x>2073){
    inf.addImage(infImg)
  }
  if(hero.x>=1638){
    if(keyDown("m")){
      health2=createSprite(-100,100,10,10)
      
  health2.shapeColor="yellow"
  health3=createSprite(-80,100,10,10)
  health3.shapeColor="green"

     

      medkit.destroy()
    }
  }
  
  bullets()
   drawSprites()
  
  gameOver()
  //score()
}
  }
if(gameState===End){
 reset.visible=true
 
}



function bullets(){
if(keyDown("space")){
  if(frameCount%7===0){
  var bullets=createSprite(30,360,6,3)
  bullets.velocityX=20+5
  bullets.shapeColor="yellow"
  
  //bullets.playSound("we_ak47s_lb_04_hpx.mp3")
  bullets.x=hero.x+200
  bullets.y=hero.y-18
  bullets.lifetime=100
  //flame.addImage(flameImg)
  //flame.visible=true
  //flame.x=hero.x+60
  //flame.y=hero.y-10
  bullets.depth=enemy.depth
  if(hero.isTouching(enemy)){
    jullu.addImage(julluimg2)
    bullets.destroy()
    enemy.destroy()
//enemy.addImage(dieimg)
    score=score+50
    
   // hero.loadImage("shoot0.png")
   
  }
  if(hero.isTouching(enemy2)){
    jullu.addImage(julluimg3)
    bullets.destroy()
    enemy2.destroy()
    
   
  }
  if(hero.isTouching(enemy3)){
    jullu.addImage(julluimg5)
    bullets.destroy()
    enemy3.destroy()
    score++
   
  }
  if(hero.isTouching(enemy4)){
    bullets.destroy()
    enemy4.destroy()
    jullu.addImage(julluimg6)
   
  }
  if(hero.isTouching(enemy5)){
    jullu.addImage(julluimg2)
    bullets.destroy()
    enemy5.destroy()
    jullu.addImage(julluimg7)
    
   
  }
  if(hero.isTouching(enemy6)){
    bullets.destroy()
    enemy6.destroy()
    jullu.addImage(julluimg4)
   
  }
  

  bulletsGroup.add(bullets)
  bullets.setCollider("rectangle",0,0,10,10)
}
}
}
  function bullets1(){
    if(frameCount%20===0){
    var bullets1=createSprite(550,320,5,3)
    bullets1.velocityX=-9
    bullets1.lifetime=10+7
    bullets1.shapeColor="yellow" 
  if(bullets1.isTouching(hero)){
    if(health3!==null&&health!==null&&health2!==null){
      health3.destroy()
    }
    else if(health2!==null&&health!==null){
      health2.destroy()
    }
    else if(health!==null){
      health.destroy()
    }
  }


}
  }
function bullets2(){
  if(frameCount%20===0){
  var bullets2=createSprite(1365,320,5,3)
  bullets2.velocityX=-9
  bullets2.lifetime=10+7
  bullets2.shapeColor="yellow"
  if(bullets2.isTouching(hero)){
    if(health3!==null&&health2!==null){
      health2.destroy()
    }
    else if(health!==null){
      health2.destroy()
    }
    else{
      health.destroy
    }
  }

}
}
function bullets3(){
  if(frameCount%20===0){
  var bullets3=createSprite(2385,320,5,3)
  bullets3.velocityX=-9
  bullets3.lifetime=10+7
  bullets3.shapeColor="yellow"
  if(bullets3.isTouching(hero)){
    if(health!==null&&health2!==null){
      health2.destroy()
    }
    else if(health!==null){
      health2.destroy()
    }
    else{
      health.destroy
    }
  }
  
}
  }


function bullets4(){
  var bullets4=createSprite(3042,320,5,3)
  bullets4.velocityX=-9
  bullets4.lifetime=10+7
  bullets4.shapeColor="yellow"
  if(bullets4.isTouching(hero)){
    if(health!==null&&health2!==null){
      health3.destroy()
      
    }
    else if(health2!==null){
      health2.destroy()
    }
    else{
      health.destroy
    }
  }
  
 
 
 
}
  
function bullets5(){
  var bullets5=createSprite(3510,320,5,3)
  bullets5.velocityX=-9
  bullets5.shapeColor="yellow"
  bullets5.lifetime=10+7
  if(bullets5.isTouching(hero)){
    if(health!==null&&health2!==null){
      health.destroy()
      health2.destroy()
      health3.destroy()
      //hero.addImage(dieimg)
      hero.destroy()
    }
    else if(health3){
      health2.destroy()
    }
    else{
      health.destroy
    }
  }
 

}  
  



function bullets6(){
  var bullets6=createSprite(1962,210,5,3)
  bullets6.shapeColor="yellow"
  bullets6.velocityX=-9
  bullets6.lifetime=10+7
  if(bullets6.isTouching(hero)){
    if(health!==null&&health2!==null){
      health3.destroy()
     
    }
    else if(health3){
      health2.destroy()
    }
    else{
      health.destroy
    }
  }
 
 
 
}
  
function youlose(){
  
}

function gameOver(){
  if(hero.isTouching(nurses)){
   // gameState=End
     jungle3.visible=false 
     win.visible=true
     win.scale=1.5
    win.depth=hero.depth+4
    nurses.depth=win.depth-4
    nurses2.depth=win.depth-4
    scope.depth=hero.depth-4
    health.depth=hero.depth-3
    health2.depth=hero.depth-3
    health3.depth=hero.depth-3
    // win.visible=true
    textSize(30)
    fill("black")
  
  text("press space to shoot"-170,190)
    //text("ye to mera farj tha ",3490,280)
    //fill("red")
   // text("score",score++,300,220)
    text.depth=+3
    //reset.visible=true
   
  }
}

function reset(){
   if(keyDown("r")){
      gameState==Play
    }
}  
 

