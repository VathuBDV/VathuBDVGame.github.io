class Character{
    constructor(){
        //Postion of character
        this.positionX = 100;
        this.positionY = 200;
        //Movement
        this.velocityY = 0;
        //Shape of Character
        this.width = 20;
        this.height = 20;
        //Character drop when button not pressed
        this.gravity = 1;
        //Color of the Character  
        this.color = this.generateRandomColor();
    }

    update(){
        this.velocityY += this.gravity;
        this.positionY += this.velocityY;
        //Drop limitation (doesn't fall off the canvas)
        if(this.positionY > canvas.height - this.height){
            this.positionY = canvas.height - this.height;
            this.velocityY = 0;
            //console.log("at the bottom " + " " + this.positionY + " " + this.velocityY);
        }
        //Flying limitation(doesn't fly off the canvas)
        if(this.positionY < 0 + this.height){
            this.positionY = 0 + this.height;
            //console.log("at top");
            this.velocityY = 0
        }
        //Fly when the spacebar is pressed
        if(buttonPressed){
            this.fly();
        }
    }

    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.positionX,this.positionY, this.width,this.height);
        
    }
    //Everytime Character flies
    fly(){
        this.velocityY -= 2;
    }

    generateRandomColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}
//Create the character object
let character = new Character();
