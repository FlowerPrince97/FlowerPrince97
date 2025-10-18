"use strict";
//global variables

//game control
    let stage = 0;
    let playButton;
    let optionsButton;
    let leaderboardButton;
    let NASAfont;

function setup(){
    createCanvas(400,400);

    playButton = createButton("PLAY");
    playButton.x = (width/5)*4;
    playButton.y = height/3;
    playButton.style("background-color", "pink");
    playButton.style("color", "black");
    playButton.style("border-radius", "10px");
    playButton.style("font-size", "40px");
    playButton.style("font-weight", "bold");

}

/*function draw(){
    background(120,120,120);

    //stage setup
    if (stage == 0) {
        menu();
    } else if (stage == 1) {
        game();
    } else if (stage == 2) {
       options(); 
    } else if (stage == 3) {
        leaderboard();
    }

}

function menu(){
    background (34,139,34);
}

function game() {
    background (255,0,0);
}

function options() {

}

function leaderboard() {
    
}*/