"use strict";
function setup(){
    createCanvas(400, 400);    
}

function draw(){
    background(120, 120, 120);
        stroke(0,0,0);//black
            line(0,mouseY,400,mouseY);//x axis line
        stroke(0,0,0);
            line(mouseX,0,mouseX,400);//y axis line
            noStroke();
            fill(255,0,0);//red
                ellipse(mouseX,mouseY,50,50);
            fill(255,255,255);//white
                ellipse(mouseX,mouseY,35,35);
            fill(255,0,0);
                ellipse(mouseX,mouseY,20,20); 
            fill(255,255,255);
                ellipse(mouseX,mouseY,10,10);
            fill(255,0,0);
                ellipse(mouseX,mouseY,1,1);
                           
} 