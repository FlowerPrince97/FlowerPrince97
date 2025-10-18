"use strict";

let gameStart = false;

let player;

let playerBullets;

let enemySmall;
let enemyMedium;
let enemyBig;

let Boss;

function preload() {
    
}

function setup(){
    createCanvas(1000, 650);
    
    player = new Sprite();
    player.color = 'pink';
    player.w = 50;

    playerBullets = new Group();
}

function draw(){
    background(120, 120, 120);

    if (kb.pressing('z')) {
        let playerBullet = new playerBullets.Sprite();
        playerBullet.diameter = 10;
        playerBullet.overlaps(player);
        playerBullet.color = 'yellow';
        playerBullet.y = player.y - 35;
        playerBullet.x = player.x
        playerBullet.vel.y = -10;
    }

    if (kb.pressing('arrowLeft')) {
        player.vel.x = -5;
    } else if (kb.pressing('arrowRight')) {
        player.vel.x = 5;
    } else {
        player.vel.x = 0;
    }
    
    if (kb.pressing('arrowUp')) {
        player.vel.y = -5;
    } else if (kb.pressing('arrowDown')) {
        player.vel.y = 5;
    } else {
        player.vel.y = 0;
    }
}

//function GAMETIME() {}