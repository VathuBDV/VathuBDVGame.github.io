let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
const backgroundMusic = new Audio("Background_theme.mp3");
//const collisionSound = new Audio("Death_sound.mp3");
const collisionSound = new Audio("ScarySound.mp3");
let scary = document.getElementById("scary");

//Check if the spacebar is pressed
let buttonPressed = false;
let frame = 0;
let score = 0;
let gamespeed = 2;
let hue = 0;
function animate(){
    if(backgroundMusic.paused){
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();
        backgroundMusic.volume = 0.5;
    }
    //Clears canvas every frame
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Character creation
    character.update();
    character.draw();
    handleParticles();
    context.fillStyle = "red";
    context.font = "70px Georgia";
    context.strokeText(score, 10, 70); 
    context.fillText(score, 10, 70);
    obstacleCreation();
    collisionDetection();
    if(collisionDetection()){
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('scary').style.display = "block";
        //context.drawImage(scary, 0, 0);
        setTimeout(() => { gameOveScreen(); }, 6000);
        backgroundMusic.pause();
        return;
    }
    requestAnimationFrame(animate);
    frame++;
    score++;
    hue++;
}

animate();

function restart(){
    document.location='index.html';
}

window.addEventListener('keydown', function(key){
    console.log(key.code);
    if(key.code === 'Space'){
         buttonPressed = true;
    }
});

window.addEventListener('keyup', function(key){
    if(key.code === 'Space'){
        buttonPressed = false;
    }
});

function gameOveScreen(){
    document.getElementById('scary').style.display = "none"
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "50px Georgia";
    context.fillStyle = "red";
    context.fillText('Game Over!!!', 160, canvas.height/2 - 60); 
    context.font = "30px Georgia";
    context.fillStyle = "black";
    context.fillText('Your score:' + score, 210, canvas.height/2 - 20);
    context.font = "25px Georgia";
    context.fillText('Click on Vathi to RESTART!', 157, canvas.height/2 + 20);
    document.getElementById('img').style.display = "block";
}






