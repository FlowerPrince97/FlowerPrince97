"use strict";

let gameStart = false;

let car;
let carImage;
let carDirection = 0;
let carX;
let carY;

let road;
let roadGroup;
let roadImage;
let roadX;
let roadY;

let grass;
let grassGroup;
let grassImage;
let grassX;
let grassY;

function preload() {

    carImage = loadImage('./images/Player_blue.png');
    roadImage = loadImage('./images/Road.png');
    grassImage = loadImage('./images/Grass.png');
}

function setup(){
    createCanvas(600, 600);
    
    carX = width/10;
    carY = height/10;

    roadX = width/2;
    roadY = height/10;

    grassX = width/10;
    grassY = height/2;

    car = new Sprite(carX, carY, 50, 50);
    car.img = carImage;
    car.rotationLock = true;
    
    roadGroup = new Group();

    grassGroup = new Group();

    car.overlaps(roadGroup);
    

}

function draw(){
    background(120, 120, 120);
    
    //car.overlaps(roadGroup);

    constrain(car.speed, 0, 4);

    if (kb.pressing('arrowUp')) {

        gameStart = true;

        car.speed += 0.05; //carSpeed++ not working yet IS WORKING NOW, HAD TO SET carSpeed OUTSIDE OF A FUNCTION

    } else if (kb.pressing('arrowDown') && gameStart === true) {

        car.speed -= 0.1;

    }
    
    if (kb.pressing('arrowRight')) {
        
        car.direction = carDirection += 0.5; //car direction and roatation work
        
        car.rotation = car.direction += 0.5;

    } else if (kb.pressing('arrowLeft')) {

        car.direction = carDirection -= 0.5;

        car.rotation = car.direction -= 0.5;

    }

    if (grassGroup.length < 2) {
        grassGroup.push(makeGrass(grassX, grassY));
        grassGroup.push(makeGrass(grassX + grassX * 8, grassY));
    }

    if (roadGroup.length < 2) {
        roadGroup.push(makeRoad(roadX, roadY));
        roadGroup.push(makeRoad(roadX, roadY + roadY * 8));

    }

    if (car.collides(grassGroup)) {
        restart()
    }

}

function makeGrass(x,y) {
    grass = new Sprite(x, y);
    grassImage.resize(50, 50);
    grass.img = grassImage;
    grass.debug = true;

    grass.collider = 'static';

    return grass;
}

function makeRoad(x,y) {
    road = new Sprite(x, y);
    roadImage.resize(50, 50);
    road.img = roadImage;
    road.collider = 'none';
    road.debug = true;

    return road;
}

function restart() {
        
        gameStart = false;
        
        car.x = carX;

        car.y = carY;

        car.direction = 0;

        car.rotation = car.direction;

        car.speed = 0;
    }

//see flip lecture week 7 p5play sketch for help