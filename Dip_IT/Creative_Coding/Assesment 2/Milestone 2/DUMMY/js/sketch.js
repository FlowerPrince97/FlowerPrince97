"use strict";

let gameStart = false;

let stage = 0;
let playButton;
let optionsButton;
let leaderboardButton;

let player;
let playerBullets;

let enemySmall;
let enemyMedium;
let enemyBig;

let Boss;

let menuRobitImg;

function preload() {
    menuRobitImg = loadImage('images/robit lady.png');
}

function setup() {
    createCanvas(1000, 650);

    //if (stage === 0) {
        playButton = createButton("PLAY");
        playButton.position((width / 4) * 2, height / 4);
        playButton.style("background-color", "yellow");
        playButton.style("color", "black");
        playButton.style("border-radius", "10px");
        playButton.style("font-size", "40px");
        playButton.style("font-weight", "bold");
        playButton.style("padding", "30px")
        //playButton.style("font-family", "Biome")

        playButton.hide();        

        optionsButton = createButton("OPTIONS");
        optionsButton.position((width / 4) * 2, height / 4 + 120);
        optionsButton.style("background-color", "yellow");
        optionsButton.style("color", "black");
        optionsButton.style("border-radius", "10px");
        optionsButton.style("font-size", "40px");
        optionsButton.style("font-weight", "bold");
        optionsButton.style("padding", "30px")

        optionsButton.hide();        

        leaderboardButton = createButton("LEADERBOARD");
        leaderboardButton.position((width / 4) * 2, height / 4 + 240);
        leaderboardButton.style("background-color", "yellow");
        leaderboardButton.style("color", "black");
        leaderboardButton.style("border-radius", "10px");
        leaderboardButton.style("font-size", "40px");
        leaderboardButton.style("font-weight", "bold");
        leaderboardButton.style("padding", "30px")

        leaderboardButton.hide();
        
}

function draw() {
    //stage setup
    if (stage == 0) {
        menu();
        playButton.show();
    } else if (stage == 1) {
        game();
        playButton.hide();
    } else if (stage == 2) {
        options();
        playButton.hide();
    } else if (stage == 3) {
        leaderboard();
        playButton.hide();
    }

    /*if (stage === 0 && playButton.mousePressed()) {
        stage = 1;
    }
    if (stage === 0 && optionsButton.mousePressed()) {
        stage = 2;
    }
    if (stage === 0 && leaderboardButton.mousePressed()) {
        stage = 3
    }*/

    playButton.mousePressed(game());
    

}


function menu() {
    background("purple");
    image(menuRobitImg, 20, 0);

}

function game() {
    background(255, 0, 0);
}

function options() {
    background(0, 255, 0)
}

function leaderboard() {
    background(0, 0, 255);
}