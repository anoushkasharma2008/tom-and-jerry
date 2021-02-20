var tom, jerry;
var bg;
function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,650);
    tom.addAnimation("tomsitting",catImg1);
    tom.scale = 0.2;
    
    jerry = createSprite(200,650);
    jerry.addAnimation("jerrysitting",mouseImg1);
    jerry.scale = 0.2;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomlast",catImg3);
        tom.changeAnimation("tomlast");
        jerry.addAnimation("jerrylast",mouseImg3);
        jerry.changeAnimation("jerrylast");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -2;
      tom.addAnimation("tomrunning",catImg2);
      tom.changeAnimation("tomrunning");

      jerry.addAnimation("jerryteasing",mouseImg2);
      jerry.changeAnimation("jerryteasing");
  }


}
