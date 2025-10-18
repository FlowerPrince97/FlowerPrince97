"use strict";
//global variables

//game control
    let stage = 0;
    let playButton;
    let optionsButton;
    let leaderboardButton;
    let NASAfont;

function preload(){
   NASAfont = loadFont("data/nasa.otf");
}

function setup(){
    createCanvas(400,400);

    playButton = createButton("PLAY");
    playButton.style("background-color", "pink");
    playButton.style("color", "black");
    playButton.style("border-radius", "10px");
    playButton.style("font-size", "40px");
    playButton.style("font-weight", "bold");

    
    //RECIEVED CHATGPT ASSISTANCE HERE
    // To use the loaded font, we need to create a CSS rule for it
    playButton.style("font-family", "nasa-font");

    // Create a style element to add the font-face rule to the document
    const style = document.createElement('style');
    
    style.innerHTML = `
      @font-face {
        font-family: 'nasa-font';
        src: url('data/nasa.otf') format('opentype');
      }
    `;
    document.head.appendChild(style);
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