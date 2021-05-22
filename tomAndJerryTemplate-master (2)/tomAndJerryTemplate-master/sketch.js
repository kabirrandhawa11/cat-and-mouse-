var canvas,tom,jerry,i,i1,i2,i3,i4,i5,i6;
var bg;

function preload() {
  i = loadAnimation("cat1.png");
  i1 = loadAnimation("mouse1.png");
  i3 = loadAnimation("mouse2.png","mouse3.png");
  i4 = loadAnimation("cat2.png","cat3.png");
  i5 = loadAnimation("mouse4.png");
  i6 = loadAnimation("caat4.png");
  bg = loadAnimation("garden.png")
}

function setup(){
    createCanvas(1000,800);
    tom=createSprites(870,600);
    tom.addAnimation(i);
    tom.scale=0.2;

    mouse=createSprites(200,600);
    mouse.addAnimation(i1);
    mouse.scale=0.15;

}

function draw() {

    background(255);
    if(tom.x = jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0; 
        tom.addAnimation("tomlastimage",i6);
        tom.x = 300;
        tom.scale=0.2;
        tom.changeAnimation("tomlastimage",i6);

        jerry.addAnimation("jerrylastimage",i5);
        jerry.scale=0.15;
        jerry.changeAnimation("jerrylastimage",i5);



    }
    tom.display();
    jerry.display();

    drawSprites();
}


function keyPressed(){
    if(keycode === LEFT_ARROW){
     tom.velocityX= -5;
     tom.addImage("tomRunning",i4);
     
     jerry.addImage("jerryrunning",i3);
     jerry.frameDelay = 25;
     jerry.changeAnimation("jerryrunning");
        }


}
