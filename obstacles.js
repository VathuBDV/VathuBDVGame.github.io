let obstacleArray = [];
let obstacleFrequency = 40;

class Obstacle{
    constructor(){
        //Height of the obstacle
        this.topObstacle = (Math.random() * (canvas.height/3)) + 20;
        this.bottomObstacle = (Math.random() * (canvas.height/3)) + 20;
        //Width of the obstacle
        this.width = 20; 
        //Spawn position of the obstacle 
        this.positionX = canvas.width;
        //Obstacle color
        this.color = this.generateRandomColor(); 
    }

    draw(){
        context.fillStyle = this.color;
        //Creates top obstacle
        context.fillRect(this.positionX, 0, this.width, this.topObstacle);
        //Create bottom obstacle
        context.fillRect(this.positionX, canvas.height - this.bottomObstacle, this.width, this.bottomObstacle)
    }

    update(){
        this.positionX -= gamespeed;
        this.draw();
    }
    generateRandomColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}

function obstacleCreation(){
    //Creates a obstacle every 50 frames
    if(frame%obstacleFrequency === 0){
        obstacleArray.unshift(new Obstacle);
    }
    //Update every item in the array
    for(let i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].update();
    }
    //limit the array lenght
    if(obstacleArray.length > 20){
        obstacleArray.pop(obstacleArray[0]);
    }
}

function collisionDetection(){
    for(let i = 0; i < obstacleArray.length; i++){
        if(//If the character is not in the same X position of the obstacles and vice-versa
            character.positionX < obstacleArray[i].positionX + obstacleArray[i].width &&
            character.positionX + character.width > obstacleArray[i].positionX &&
            //If the character is also not at the same position Y of top obstacle
            ((character.positionY < 0 + obstacleArray[i].topObstacle && 
            character.positionY + character.height > 0)||
            //If the character is also not at the same position Y of top obstacle
            (character.positionY > canvas.height - obstacleArray[i].bottomObstacle &&
            character.positionY < canvas.height))){
                collisionSound.play();
                return true;
            }
    }
}