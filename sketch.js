var diver, ground
var enemy, coin
var enemyGroup, coinGroup
var score= 0;
var money=0;
var gameState=1;



function preload(){
    diver_img= loadImage("player.png");

    fish1= loadImage("fish.png");
    fish2= loadImage("puffer.png");
    fish3= loadImage("shark1.png");
    fish4= loadImage("shark2.png");

    coin_img= loadImage("coin.png");

    ground_img= loadImage("ground2.png");
    back_img=loadImage("background.png");

    move_sound=loadSound("jump.mp3");
    losing_s=loadSound("losing.mp3");
    coin_s=loadSound("coin.mp3")

}


function setup(){
    createCanvas(windowWidth,windowHeight);

    space= createSprite(windowWidth/2,windowHeight/2);
    space.addImage(back_img);
    space.scale= 4.5
    space.setVelocity(-5,0)

    diver= createSprite(width/4-200,height/2,40,40);
    diver.addImage(diver_img);
    diver.scale= 0.3;
    diver.setCollider("rectangle",0,-30,500,200);

    sky= createSprite(500,30,2000,10);
    sky.visible=false;   

    ground= createSprite(500,470,2000,10);
    ground.addImage(ground_img);
    ground.visible=false
   
    coinGroup = createGroup();
    coinsGroup = createGroup();
    coin2Group = createGroup();
    coin3Group = createGroup();
    coin4Group = createGroup();
    enemyGroup= createGroup();

   
}


function draw(){

    background("white");
    
    drawSprites();

    fill(0);
    textSize(20);
    text("Score="+score,width-100,height/2-200);
    text("coins="+money,width-100,height/2-250);

   
    if(gameState===1){
        spawnEnemy();
        spawnCoin();
        score= score+Math.round(getFrameRate()/60);
        
        diver.velocityY= diver.velocityY+0.005;
        diver.collide(sky);
    ground.setVelocity(-5,0);
    if(keyDown("up")){
        diver.y=diver.y-10;
        move_sound.play();
    }

    if(keyDown("down")){
        diver.y=diver.y+10;
        move_sound.play();
    }    

    if(space.x<0){
        space.x=ground.width/2;
    }
    if(ground.x<0){
        ground.x=ground.width/2;
    }
       
    if(coinGroup.isTouching(diver)){
       coinGroup.destroyEach();
       coin_s.play();
       money+=10
    }
    if(coin2Group.isTouching(diver)){
        coin2Group.destroyEach();
        coin_s.play();
        money+=10
     }
     if(coin3Group.isTouching(diver)){
        coin3Group.destroyEach();
        coin_s.play();
        money+=10
     }
     if(coin4Group.isTouching(diver)){
        coin4Group.destroyEach();
        coin_s.play();
        money+=10
     }
    if(coinsGroup.isTouching(diver)){
        coinsGroup.destroyEach();
        coin_s.play();
        money+=10
     }
    if(enemyGroup.isTouching(diver)||diver.y>height){
        losing_s.play();
        gameState=2;  
      }
     
    }
    if(gameState===2){
       
        fill("red");
        textSize(30);
        text("GAME OVER",width/2,height/2);
        coinGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
        diver.setVelocityX(0);
        ground.setVelocityX(0);
         
    }//diver.setCollider(0,0,5,10,10diver.debug=false;

     
    
}

function spawnEnemy(){
    if(frameCount%100===0){

        enemy = createSprite(width+10,100,20,50);
        enemy.scale= 0.3;
        enemy.setVelocity(-5,0);
        enemyGroup.add(enemy);

        enemy.lifetime= width+20

        enemy.debug=false;
        enemy.setCollider("rectangle",0,0,300,150)

        enemy_p = Math.round(random(1,6));
        switch(enemy_p){
            case 1:enemy.y= ground.y-90
            break
            case 2:enemy.y= ground.y- 190
            break
            case 3:enemy.y= ground.y-290
            break
            case 4:enemy.y= ground.y-250
            break
            case 5:enemy.y= ground.y-150
            break
            case 6:enemy.y= ground.y-350
            break
            default:break
        
    }       

        enemyImg= Math.round(random(1,4));
        switch(enemyImg){
            case 1:enemy.addImage(fish1);
            break
            case 2:enemy.addImage(fish2);
            break
            case 3:enemy.addImage(fish3);
            break
            case 4:enemy.addImage(fish4);
            break
            default:break
            }
            

    }}



function spawnCoin(){
    if(frameCount%200===0){

        coin= createSprite(width+10,100,20,50);
        coin.setVelocity(-5,0);
        coin.addImage(coin_img);
        coin.scale= 0.3;

        coin_p = Math.round(random(1,6));

        coinGroup.add(coin)

        switch(coin_p){
            case 1:coin.y= ground.y-90
            break
            case 2:coin.y= ground.y-190
            break
            case 3:coin.y= ground.y-290
            break
            case 4:coin.y= ground.y-250
            break
            case 5:coin.y= ground.y-150
            break
            case 6:coin.y= ground.y-350
            break
            default:break
        }
}}  
function spawnCoin(){
    if(frameCount%150===0){

        coins= createSprite(width+10,100,20,50);
        coins.setVelocity(-5,0);
        coins.addImage(coin_img);
        coins.scale= 0.3;

        coin_p = Math.round(random(1,6));

        coinsGroup.add(coins)

        switch(coin_p){
            case 1:coins.y= ground.y-90
            break
            case 2:coins.y= ground.y-190
            break
            case 3:coins.y= ground.y-290
            break
            case 4:coins.y= ground.y-250
            break
            case 5:coins.y= ground.y-150
            break
            case 6:coins.y= ground.y-350
            break
            default:break
        }
}}  
function spawnCoin(){
    if(frameCount%250===0){

        coin2= createSprite(width+10,100,20,50);
        coin2.setVelocity(-5,0);
        coin2.addImage(coin_img);
        coin2.scale= 0.3;

        coin_p = Math.round(random(1,6));

        coin2Group.add(coin2)

        switch(coin_p){
            case 1:coin2.y= ground.y-90
            break
            case 2:coin2.y= ground.y-190
            break
            case 3:coin2.y= ground.y-290
            break
            case 4:coin2.y= ground.y-250
            break
            case 5:coin2.y= ground.y-150
            break
            case 6:coin2.y= ground.y-350
            break
            default:break
        }
}}  
function spawnCoin(){
    if(frameCount%300===0){

        coin3= createSprite(width+10,100,20,50);
        coin3.setVelocity(-5,0);
        coin3.addImage(coin_img);
        coin3.scale= 0.3;

        coin_p = Math.round(random(1,6));

        coin3Group.add(coin3)

        switch(coin_p){
            case 1:coin3.y= ground.y-90
            break
            case 2:coin3.y= ground.y-190
            break
            case 3:coin3.y= ground.y-290
            break
            case 4:coin3.y= ground.y-250
            break
            case 5:coin3.y= ground.y-150
            break
            case 6:coin3.y= ground.y-350
            break
            default:break
        }
}}  
function spawnCoin(){
    if(frameCount%220===0){

        coin4= createSprite(width+10,100,20,50);
        coin4.setVelocity(-5,0);
        coin4.addImage(coin_img);
        coin4.scale= 0.3;

        coin_p = Math.round(random(1,6));

        coin4Group.add(coin4)

        switch(coin_p){
            case 1:coin4.y= ground.y-90
            break
            case 2:coin4.y= ground.y-190
            break
            case 3:coin4.y= ground.y-290
            break
            case 4:coin4.y= ground.y-250
            break
            case 5:coin4.y= ground.y-150
            break
            case 6:coin4.y= ground.y-350
            break
            default:break
        }
}}  