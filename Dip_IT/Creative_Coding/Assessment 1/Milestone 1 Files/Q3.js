"use strict";
function setup(){
    createCanvas(600, 600);    
}

let centerPlanetSpin = 0; //value controlls starting position within 360 degrees
    // eg. "0" is EAST, "180" is WEST
let orbitLineRed = 0
let moonOrbitWhite = 0
let moonOrbitYellow = 0
let moonOrbitRed = 0

function draw(){
    background(0);
    
    angleMode (DEGREES);
    

let CENTER_PLANET_WIDTH = (width / 9);
let CENTER_PLANET_HEIGHT = (height / 9);

    noStroke ();
    fill (255);
    ellipse (width / 2, height / 2, CENTER_PLANET_WIDTH, CENTER_PLANET_HEIGHT);

    fill (180);
    arc (width / 2, height / 2, CENTER_PLANET_WIDTH, CENTER_PLANET_HEIGHT, centerPlanetSpin, centerPlanetSpin + 180)

    centerPlanetSpin ++;
    
let centerX = width / 2;
let centerY = height / 2;
    //previous 2 fumctions control WHERE the orbit is on the x/y axis

    {
let radiusX = CENTER_PLANET_WIDTH * 1.10; //controls the WIDTH of the orbit
let radiusY = CENTER_PLANET_HEIGHT * 3.5;

    noFill();
    stroke (255, 255, 255);
    ellipse (centerX, centerY, radiusX * 2, radiusY * 2); //"ORBIT_LINE_WHITE"
    //regarding above funtion - always double radius to have the ORBIT_LINE meet the PLANET
    }
    {
let radiusX = CENTER_PLANET_WIDTH * 4;
let radiusY = CENTER_PLANET_HEIGHT * 1.10;
     
        noFill();
        stroke (255, 255, 0);
        ellipse (centerX, centerY, radiusX * 2, radiusY * 2); //"ORBIT_LINE_YELLOW"
    }
    {

let radiusX = CENTER_PLANET_WIDTH * 1.10;
let radiusY = CENTER_PLANET_HEIGHT * 3.5;        
            
let x = radiusX * cos(orbitLineRed);
let y = radiusY * sin(orbitLineRed);
            
    noFill();
    stroke(255, 0, 0);
    ellipse (centerX + x, centerY + y, CENTER_PLANET_WIDTH * 1.55, CENTER_PLANET_HEIGHT * 1.55); //"ORBIT_LINE_RED"
               
    orbitLineRed += 2;
            
    }
    {
let radiusXwhite = CENTER_PLANET_WIDTH * 1.10;
let radiusYwhite = CENTER_PLANET_HEIGHT * 3.5;
    
let xWhite = centerX + radiusXwhite * cos(moonOrbitWhite);
let yWhite = centerY + radiusYwhite * sin(moonOrbitWhite);
    
     
        noStroke();
        fill(255, 255, 255);
        ellipse (xWhite, yWhite, CENTER_PLANET_WIDTH / 2, CENTER_PLANET_HEIGHT / 2); //"MOON_WHITE"
    
        moonOrbitWhite += 2;

let xRed = xWhite + CENTER_PLANET_WIDTH / 1.25 * cos(moonOrbitRed)
let yRed = yWhite + CENTER_PLANET_HEIGHT / 1.25 * sin(moonOrbitRed)
        
        noStroke();
        fill(255, 0, 0);
        ellipse (xRed, yRed, CENTER_PLANET_WIDTH / 4, CENTER_PLANET_HEIGHT / 4); //"MOON_RED"
        
        moonOrbitRed += 3;
    
    
let radiusXyellow = CENTER_PLANET_WIDTH * 4;
let radiusYyellow = CENTER_PLANET_HEIGHT * 1.10;
    
let xYellow = centerX + radiusXyellow * cos(moonOrbitYellow);
let yYellow = centerY + radiusYyellow * sin(moonOrbitYellow);
    
    
        noStroke();
        fill(255, 255, 0);
        ellipse (xYellow, yYellow, CENTER_PLANET_WIDTH / 2, CENTER_PLANET_HEIGHT / 2); //"MOON_YELLOW"
    
        moonOrbitYellow ++;
        

        if ( dist (xWhite, yWhite, width / 2, height / 2) > 
            dist (xYellow, yYellow, width / 2, height / 2)) {
            fill (255);
        } else {
            fill (255, 255, 0);
        }
        ellipse (width / 2, height / 2, CENTER_PLANET_WIDTH / 4, CENTER_PLANET_HEIGHT / 4); //colour changing
  
    }
}