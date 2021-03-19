var cat, catImage;
var background1, backgroundImage, invisibleGround;
var mouse, mouseImage;
var catRunning;
var catEndImage
var mouse2

function preload() {
    backgroundImage = loadImage("images/garden.png");
    
    catImage = loadAnimation("images/cat1.png");
    
    mouseImage = loadAnimation("images/mouse1.png");    
    
    catEndImage = loadAnimation("images/cat4.png")
    catRunning = loadAnimation("images/cat2.png", "images/cat3.png")
    
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse3 = loadAnimation("images/mouse4.png")
}

function setup() {     
    cat = createSprite(800,70,20,20);     
    cat.addAnimation("Stillcat", catImage);
    cat.addAnimation("catRunning", catRunning);  
    cat.addAnimation("catDone", catEndImage)   
    cat.scale = 0.1;     
    
    mouse = createSprite(400, 650, 20, 20);     
    mouse.addAnimation("stillMouse", mouseImage);     
    mouse.addAnimation("mouseIntimadating",mouse2);
    mouse.addAnimation("mouseDone", mouse3)
    mouse.scale = 0.1;
    
    background1 = createSprite(500,400,1100,900);
    background1.addImage(backgroundImage);
    
    invisibleGround = createSprite(500,740, 950, 50);  

}     
function draw() {     
    createCanvas(1000,800);     
    background(255);     

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.changeAnimation("catDone", catEndImage)
        cat.velocityX = 0
        mouse.changeAnimation("mouseDone")
}
    else if(keyDown(LEFT_ARROW)){
    mouse.changeAnimation("mouseIntimadating", mouse2)
    cat.x = cat.x -20;
    cat.changeAnimation("catRunning", catRunning)}    
    cat.collide(invisibleGround)     
    
    if(frameCount/60) {     
    cat.velocityY = cat.velocityY + 2;
}     
    
    mouse.depth = background1.depth + 1;
    cat.depth = background1.depth + 1;
    invisibleGround.depth = background1.depth - 1;
    drawSprites();     
}         
     
  