var enemyOne,meteoro;
let astro,imgAstro;
var imgSpace;
var imgGround;

var bgY1;
var bgY2;

var bgHeight;
var bgSpeed = 1;
var bgOffset = -400;

function preload() {

  imgSpace = loadImage("./assets/space3.png");
  imgGround = loadImage("./assets/ground1.png");
  meteoro = loadImage("./assets/meteor.png");
  imgAstro = loadAnimation ("./assets/sprite_0.png","./assets/sprite_1.png","./assets/sprite_2.png",
    "./assets/sprite_3.png","./assets/sprite_4.png");
  
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  adjustBackground();
  astro = createSprite(width/2,height/2+200);
  astro.addAnimation("main",imgAstro);
  astro.scale = 0.50;
  astro.animation.frameDelay = 6;

}

function draw() {

 background(0);
  drawBackground();
  enemys();
  controlAstro();
  drawSprites();
  drawGround();

}
function controlAstro(){
    if(keyDown("d")){
     astro.velocityX = 5;
     astro.mirrorX(1);
    }
   if(keyDown("a")){
     astro.velocityX = -5;
     astro.mirrorX(-1);
    } 
    if(astro.x<=2){
        astro.x = 2
    } 
if(astro.x>=1200){
        astro.x = 1200
    }         
}
function enemys(){
 if(frameCount%60===0){
    enemyOne = createSprite(random(12,width-1200),-50);
    enemyOne.addImage(meteoro);
    enemyOne.velocityY = random(4,8);
    enemyOne.scale = 0.25

 }
}

//CENARIO - BACK AND SPACE
function drawBackground() {

  image(imgSpace, 0, bgY1 + bgOffset, width, bgHeight);
  image(imgSpace, 0, bgY2 + bgOffset, width, bgHeight);

  bgY1 += bgSpeed;
  bgY2 += bgSpeed;

  if (bgY1 >= bgHeight + 400) {
    bgY1 = bgY2 - bgHeight;
  }

  if (bgY2 >= bgHeight + 400) {
    bgY2 = bgY1 - bgHeight;
  }

}

function drawGround() {

  var scale = width / imgGround.width;
  var groundHeight = imgGround.height * scale;

  var groundOffset;

  if (windowWidth > windowHeight) {
    //mexe aqui Pedro pra descer o solo no modo web
    groundOffset = 380;
  } else {
    groundOffset = 20;
  }

  image(
    imgGround,
    0,
    height - groundHeight + groundOffset,
    width,
    groundHeight
  );

}

function adjustBackground() {

  bgHeight = imgSpace.height * (width / imgSpace.width);

  bgY1 = 0;
  bgY2 = -bgHeight;

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  adjustBackground();

}