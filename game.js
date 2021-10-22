class Game{
    constructor(){
        this.storyButton = createSprite(displayWidth/2,50,20,10);
        this.startButton = createSprite(displayWidth/2,displayHeight/2,20,10); 
    }
start(){
    
    
    if(mousePressedOver(this.startButton)){
        gameState=1;
        this.coins(0);
    }
    if(mousePressedOver(this.storyButton)){
        text("gamestory",displayWidth/2,displayHeight/2);
    }
    
    
       
    

}
play(){
    this.storyButton.visible=false;
    this.startButton.visible=false;
    king.player.visible=true;
    
    if(keyDown("a")){
        king.moveLeft();
    }
    if(keyDown("d")){
        king.moveRight();
    }
    if(keyDown("space")){
        king.Jump();
    }
    king.gravity();
    king.player.collide(ground);
    camera.position.x=king.player.x;

    if(king.player.isTouching(coinsGrp,removeCoin)){
        score+=20;
        
    }

    if(king.player.isTouching(guardGrp)){
        
        
        console.log(count);

        if(score>=100){
            score-=100;
            count+=1;
            this.coins(count);
            
        }
        else{
            king.player.collide(guardGrp);
        }
        
        
    }
    
}




coins(b){
    for(var a=1;a<=7;a++){
        var coins = createSprite(random(guardGrp[b].x,guardGrp[b+1].x),ground.y-random(50,displayHeight-200),15,15);
        coinsGrp.add(coins);
        coins.addImage(coinImg);
        coins.scale=0.25;
    }
}

weapon(){
    var weapons = createSprite(random(displayWidth,ground.y-100,50,50));
    
}

}