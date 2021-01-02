let particles = [];

class Particle{
    constructor(){
        this.positionX = character.positionX;
        this.positionY = character.positionY;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = "hsla(" + hue + ",100%, 50%, 0.8)";
    }

    update(){
        this.positionX -= gamespeed;
        this.positionY += this.speedY;
    } 
    draw(){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.positionX,this.positionY,this.size,0,Math.PI * 2);
        context.fill();
    }
}

function handleParticles(){
    particles.unshift(new Particle);
    for(let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
    if(particles.length > 200){
        for(let i = 0; i < 20; i++){
            particles.pop(particles[i]);
        }
    }
}