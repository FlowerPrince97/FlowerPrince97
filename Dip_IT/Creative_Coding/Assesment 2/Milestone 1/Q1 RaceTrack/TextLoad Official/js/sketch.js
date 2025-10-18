"use strict";

let track;
let rows;
let columns;

let start;
let startImage;
let startX;
let startY;

let grass;
let grassGroup;
let grassImage;
let grassX;
let grassY;

let road;
let roadGroup;
let roadImage;
let roadX;
let roadY;

let spriteSize;

function preload() {
    
    track = loadStrings("./data/track.txt");

    startImage = loadImage('./images/Road.png');

    roadImage = loadImage('./images/Road.png');
    grassImage = loadImage('./images/Grass.png');
}

function setup(){
    createCanvas(600, 600);

    spriteSize = width/track.length;

    rows = track.length;
    columns = track[0].split(' ').length;//split works the same as splitToken, but it can be used to split here and then get the length of the line after the split

    /*let NO_SPACE = splitTokens(track, " ");
    console.log(NO_SPACE);*/ //does not work at all, just broken code
    //left it here to remind self that it does not work

    //let noSpace0 = splitTokens(track[0], " "); //[0] here means we are accessing the first line of the file
    //because we used splitTokens on " " (a space), if we console log this, it reads back the characters on the line that are not " " (space)
    //console.log(noSpace0);

    //let noSpace1 = splitTokens(track[1], " ");
    //console.log(noSpace1);

    //let noSpace2 = splitTokens(track[2], " ");
    //console.log(noSpace2);

    roadGroup = new Group();

    grassGroup = new Group();
}   

function draw(){
    background(120, 120, 120);

    for (let i = 0; i < rows; i++) {
        let spritePosition = track[i].split(' ');
        
        for (let j = 0; j < columns; j++) {
            let number = int(spritePosition[j]);
            let xPos = j * spriteSize + spriteSize/2;
            let yPos = i * spriteSize + spriteSize/2;

            if (number === 0) {
                makeGrass(xPos, yPos);
            } else if (number === 1) {
                makeRoad(xPos, yPos);
            } else if (number === 2) {
                makeStart(xPos, yPos);
            }
        }
    }
}

function makeGrass(x,y) {
    grass = new Sprite(x, y);
    grassImage.resize(spriteSize, spriteSize);
    grass.img = grassImage;
    grass.debug = true;

    grass.collider = 'static';

    return grass;
}

function makeRoad(x,y) {
    road = new Sprite(x, y);
    roadImage.resize(spriteSize, spriteSize);
    road.img = roadImage;
    road.collider = 'none';
    road.debug = true;

    return road;
}

function makeStart(x,y) {
    start = new Sprite(x, y);
    startImage.resize(spriteSize, spriteSize);
    start.img = roadImage;
    start.collider = 'none';
    start.debug = true;

    return start;
}