"use strict";

let gameStart = false;

let track;
let rows;
let columns;

let car;
let carImage;
let carDirection = 0;
let carSpeed = 0.05;

let start;
let startImage;

let grass;
let grassGroup;
let grassImage;

let road;
let roadGroup;
let roadImage;

let spriteSize;

let trackX; //james
let trackY; //james

function preload() {
    
    track = loadStrings("./data/track.txt");

    carImage = loadImage('./images/Player_blue.png');

    startImage = loadImage('./images/Road.png');
    roadImage = loadImage('./images/Road.png');
    grassImage = loadImage('./images/Grass.png');
}

function setup(){
    createCanvas(680, 680);

    spriteSize = width/track.length;

    rows = track.length;
    columns = track[0].split(' ').length;

    roadGroup = new Group();

    grassGroup = new Group();

    


    for (let i = 0; i < rows; i++) {
        let spritePosition = track[i].split(' ');
        
        for (let j = 0; j < columns; j++) {
            let number = int(spritePosition[j]);//int() turns the output into a integer - a useable numerical value
            let xPos = j * spriteSize + spriteSize / 2;
            let yPos = i * spriteSize + spriteSize / 2;
            let xPosStart = j * spriteSize + spriteSize / 2;
            let yPosStart = i * spriteSize + spriteSize / 2;
            //allows for positioning sprites according to txt file

            if (number === 0) {
                grassGroup.push(makeGrass(xPos, yPos));
            } else if (number === 1) {
                makeRoad(xPos, yPos);
            } else if (number === 2) {
                makeStart(xPosStart, yPosStart);
                trackX = xPosStart; //james
                trackY = yPosStart; //james
                car = new Sprite(xPosStart, yPosStart, spriteSize / 1.5, spriteSize / 1.5 - 15);//last two vaules dictate hitbox size
                car.img = carImage;
                carImage.resize (spriteSize / 1.5, spriteSize / 1.5 - 10);//size of sprite image
                car.rotationLock = true;
                //car.debug = true;
                car.layer = 2;

            }
        }
    }
}   

function draw(){
    background(120, 120, 120);

    car.overlaps(roadGroup);
    //car.overlaps(grassGroup);

    if (kb.pressing('arrowUp')) {

        gameStart = true;

        car.speed += carSpeed;

        constrain(carSpeed, 0, 5);

    } else if (kb.pressing('arrowDown') && gameStart === true) {

        car.speed -= carSpeed;

        constrain(carSpeed, 0, 5);

    }
    
    if (kb.pressing('arrowRight')) {
        
        car.direction = carDirection += 1;
        
        car.rotation = car.direction += 1;

    } else if (kb.pressing('arrowLeft')) {

        car.direction = carDirection -= 1;

        car.rotation = car.direction -= 1;

    }

    //console.log('collision');
    if (car.collides(grassGroup)) {
        restart()
        //console.log('BOOM')
    }
}

function makeGrass(x,y) {
    grass = new Sprite(x, y);
    grassImage.resize(spriteSize, spriteSize);
    grass.img = grassImage;
    grass.layer = 2;
    //grass.debug = true;
    grass.collider = 'static';

    return grass;
}

function makeRoad(x,y) {
    road = new Sprite(x, y);
    roadImage.resize(spriteSize, spriteSize);
    road.img = roadImage;
    road.collider = 'none';
    road.layer = 1;
    //road.debug = true;

    return road;
}

function makeStart(x,y) {
    start = new Sprite(x, y);
    startImage.resize(spriteSize, spriteSize);
    start.img = roadImage;
    start.collider = 'none';
    start.layer = 1;
    //start.debug = true;

    return start;
}

function restart() {
    gameStart = false;
    car.x = trackX;//james
    car.y = trackY;//james
    car.direction = 0;
    car.rotation = car.direction;
    car.speed = 0;

    //console.log('RESTART')
}