"use strict";

let gameStart = false;
let car;
let carImage;
let carDirection = 0;
let carSpeed = 0;
let carX;
let carY;


function preload() {
    carImage = loadImage("./images/Player_blue.png");
    
    
}

function setup(){
    createCanvas(1000, 650);

    carX = width/10;
    carY = height/10;
    
    car = new Sprite(carX, carY, 50, 50); //first two values are x,y location, second two values are (hitbox) size
    car.img = carImage; //sets the image to the sprite
    console.log (car);
    //carImage.resize(400, 500);//this has to be called in setup or draw funtion to work
    
}

function draw(){
    background(120, 120, 120);

    constrain(car.speed, 0, 4);

    if (kb.pressing('arrowUp')) {

        gameStart = true;

        car.speed += 0.05; //carSpeed++ not working yet IS WORKING NOW, HAD TO SET carSpeed OUTSIDE OF A FUNCTION

    } else if (kb.pressing('arrowDown') && gameStart === true) {

        car.speed -= 0.1;

    }
    
    if (kb.pressing('arrowRight')) {
        
        car.direction = carDirection += 0.5; //car direction and roatation work
        
        car.rotation = car.direction;

    } else if (kb.pressing('arrowLeft')) {

        car.direction = carDirection -= 0.5;

        car.rotation = car.direction;

    }

}
    
    