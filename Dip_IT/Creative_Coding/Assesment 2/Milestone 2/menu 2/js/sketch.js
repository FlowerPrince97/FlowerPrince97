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

}

function draw() {
    background(120, 120, 120);

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

function menu() {
    background("purple");
    image(menuRobitImg, 20, 0);

    fill(255);

    rect((width / 4) * 2, height / 4, 100, 50); //game button

    rect((width / 4) * 2, height / 4 + 120, 100, 50); //options button

    rect((width / 4) * 2, height / 4 + 240, 100, 50) //leaderboard button
    
    //mouseX is greater than x, mouseX 
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 100 && mouseIsPressed) { //restricts this manually created button to the position of the mouse
        stage = 1;
    }

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