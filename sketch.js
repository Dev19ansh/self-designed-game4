var king,guard;
var game;
var coinsGrp,guardGrp;
var score=100;
var ground;
var gameState=0;
var bgImg,coinImg,playerImg;
var count=0;

function preload(){

  bgImg = loadImage("bg4sdgame.png");
  coinImg = loadImage("coin-removebg-preview.png");
  playerImg = loadImage("st1.PNG");
}

function setup() {
 createCanvas(4*displayWidth,displayHeight);
 game = new Game();
 king = new Player();

 ground = createSprite(displayWidth*2,displayHeight-50,displayWidth*10,20);
 
 guardGrp = new Group();
 guard = new Guards();

 coinsGrp = new Group(); 

 bgImg.scale=0.1;

}

function draw() {
  background(bgImg);
  if(gameState===1){
    game.play();
  }
  if(gameState===0){
    game.start();
  } 


  drawSprites();

  textSize(60);
  textFont("Impact");
  fill("yellow"); 
  stroke("red");
  strokeWeight(5);
  text("Score: " + score,camera.position.x,250);

}

function removeCoin(sprite,coins){
  coins.remove();
}