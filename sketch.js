var car;
var dummy, dummyImg;
var speed, weight;
var testingState;
var start, wait, finished;
var deformation;
var invSprite;
/*
1. create inv sprite.
2. make it visible during finished state
3. change the colour of this sprite based on the deformation.
4. Along with this, you can add a text. for each condition of deformation.(eg: high deformation/okay/fine/good)
5. make this sprite inv in start state.
*/
function preload(){

  dummyImg = loadImage("dummy.jpg");

}

function setup() {
  createCanvas(1300,400);

  car = createSprite(20, 200, 50, 50);

  dummy = createSprite(1000, 200, 10, 10);
  dummy.addImage("dummy", dummyImg);
  dummy.scale = 0.15;
  //spritename.addImage("nick name",variable in which we loaded the image)

  invSprite = createSprite(400, 200, 30, 30);

  speed = random(55, 90);
  weight = random(400, 1500);

  start = 0;
  wait = 1;
  finished = 2;

  testingState = start;

  deformation = 0.5*speed*weight*speed/2250;
  
}

function draw() {
  
  background(175, 238, 238);
  
  if(testingState === start){

    invSprite.visible = false;

    if(keyDown("space")){
      car.velocityX = speed;
      testingState = wait;
      //console.log(testingState);
    }

  } else if(testingState === wait){
    //console.log("Entered wait state");

    invSprite.visible = false;

    text("Kindly Wait for your Result", 800, 20);

    //xposition of dummy - xposition of car <= sum of half of their widths

    if(dummy.x - car.x <= car.width/2 + dummy.width/2
      && car.x - dummy.x <= car.width/2 + dummy.width/2){
        //console.log("Entered if statement");
      testingState = finished;
    }

  } else if(testingState === finished){

    text("Press Space to try another Car", 800, 200);

    text("Your Result: "+deformation, 600, 200); 
    console.log(testingState);

    invSprite.visible = true;

    if(deformation>180){
      invSprite.shapeColor = color(225,0,0);
    }

    if(deformation<80){
      invSprite.shapeColor = color(25, 225, 25);
    }

    if(deformation>100 && deformation<180){
      invSprite.shapeColor = color(225, 225, 25);
    }

    
    dummy.visible = false;
    car.visible = false; 

  }
  
  drawSprites();

}