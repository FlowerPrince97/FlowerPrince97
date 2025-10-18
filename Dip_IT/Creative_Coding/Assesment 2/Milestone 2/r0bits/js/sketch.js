"use strict";

let gameStart = false;

let stage = 0;
let playButton;
let settingsButton;
let scoreboardButton;

let player;
let playerBullets;

let asteroid;
let asteroidGroup;
let asteroidSpawnChance;
let asteroidCap;

let weakEnemy;
let weakEnemyGroup;
let weakEnemySpawnChance;
let weakEnemyCap;

let weakBullets;
let weakBulletsGroup;

let strongEnemy;
let strongEnemyGroup;
let strongEnemySpawnChance;
let strongEnemyCap;

let strongBullets;
let strongBulletsGroup;

let BOSS;
let BOSSbullets;
let BOSSbulletsGroup;

let titleImage;
let menuRobitImage;
let gameOverImage;

let robitShipImage;
let playerBulletImage;

let asteroidImage;

let weakEyeImage;
let weakBulletImage;

let strongEyeImage;
let strongBulletImage;

let BOSSimage;
let BOSSbulletImage;

let menuBackground;
let tempGameBackground;
let backgroundY;
let backgroundY2;
let scrollspeed;

let menuSound;
let gameSound;

let introVideo;
let introImage;
let settingsImage;
let scoreboardImage;
let menuImage;

let musicSlider;
let gameSlider;

let score = 0;
let scoreData;
let playerName = "";
let playerNameInput;
let nameButton;
let name;
let newScore;



function preload() {

    introImage = loadImage('images/introimage.png')
    settingsImage = loadImage('images/settingsscreen.png');
    scoreboardImage = loadImage('images/scoreboard.png');
    menuImage = loadImage('images/menuimage.png')
    titleImage = loadImage('images/TITLE.png');
    menuRobitImage = loadImage('images/robit lady.png');
    menuBackground = loadImage('images/Starset.png');
    gameOverImage = loadImage('images/game over.png');

    tempGameBackground = loadImage('images/tempPurpleSpace.png');

    robitShipImage = loadImage('images/robit ship.png');
    playerBulletImage = loadImage('images/player bullet.png');

    asteroidImage = loadImage('images/asteroid.png');

    weakEyeImage = loadImage('images/weak eye.png');
    weakBulletImage = loadImage('images/weak bullet.png');

    strongEyeImage = loadImage('images/strong eye.png');
    strongBulletImage = loadImage("images/strong bullet.png");

    BOSSimage = loadImage('images/THEODORE OF THE TWISTING VIOLENCE.png');
    BOSSbulletImage = loadImage('images/boss bullet.png');

    soundFormats('mp3');

    menuSound = loadSound('audio/space_game.mp3');
    gameSound = loadSound('audio/Fly.mp3')

    scoreData = loadJSON('scores/score.json');

    introVideo = createVideo('video/introvideo.mp4');
    introVideo.hide();

}

function setup() {
    createCanvas(1000, 650);

    playerNameInput = createInput();
    playerNameInput.position(180, 500);
    playerNameInput.style("font-size", "20px");

    nameButton = createButton("SUBMIT");
    nameButton.position(450, 500);
    nameButton.style("background-color", "purple");
    nameButton.style("color", "yellow");
    nameButton.style("border-radius", "10px");
    nameButton.style("font-size", "20px");
    nameButton.style("font-weight", "bold");
    nameButton.mousePressed(setPlayerName);

    playButton = createButton("PLAY");
    playButton.position((width / 4) * 2, height / 4 + 20);
    playButton.style("background-color", "purple");
    playButton.style("color", "yellow");
    playButton.style("border-radius", "10px");
    playButton.style("font-size", "40px");
    playButton.style("font-weight", "bold");
    playButton.style("padding", "30px");
    playButton.mousePressed(() => {
        if (playerName) {
            stage = 3;
            initialise();
        } else {
            alert("Please enter your name before starting the game.");
        }
    });
    playButton.hide(); //() => functions are a syntactical event handler

    settingsButton = createButton("SETTINGS");
    settingsButton.position((width / 4) * 2, height / 4 + 140);
    settingsButton.style("background-color", "purple");
    settingsButton.style("color", "yellow");
    settingsButton.style("border-radius", "10px");
    settingsButton.style("font-size", "40px");
    settingsButton.style("font-weight", "bold");
    settingsButton.style("padding", "30px");
    settingsButton.mousePressed(() => stage = 4);
    settingsButton.hide();

    scoreboardButton = createButton("SCOREBOARD");
    scoreboardButton.position((width / 4) * 2, height / 4 + 260);
    scoreboardButton.style("background-color", "purple");
    scoreboardButton.style("color", "yellow");
    scoreboardButton.style("border-radius", "10px");
    scoreboardButton.style("font-size", "40px");
    scoreboardButton.style("font-weight", "bold");
    scoreboardButton.style("padding", "30px");
    scoreboardButton.mousePressed(() => stage = 5);
    scoreboardButton.hide();

    menuSound.setVolume(0.1);
    //menuSound.play();

    gameSound.setVolume(0.1);

    backgroundY = 0;
    backgroundY2 = -height;
    scrollspeed = 5;

    //menu music
    musicSlider = createSlider(0, 1, 0.5, 0);
    musicSlider.position(180, 180);
    musicSlider.size(350, 10)
    musicSlider.hide();

    //game music
    gameSlider = createSlider(0, 1, 0.5, 0);
    gameSlider.position(180, 325);
    gameSlider.size(350, 10)
    gameSlider.hide();



}

function draw() {

    if (stage === 0) {
        introScreen();
        playButton.hide();
        settingsButton.hide();
        scoreboardButton.hide();
        musicSlider.hide();
        nameButton.hide();
        gameSound.stop();
        playerNameInput.hide();
        gameSlider.hide();
    }
    if (stage === 1) {
        videoScreen();
        introVideo.play();

        playButton.hide();
        settingsButton.hide();
        scoreboardButton.hide();
        musicSlider.hide();
        nameButton.hide();
        gameSound.stop();
        playerNameInput.hide();
        gameSlider.hide();
    }
    if (stage === 2) {
        menu();
        introVideo.hide();
        playButton.show();
        settingsButton.show();
        scoreboardButton.show();
        musicSlider.hide();
        nameButton.hide();
        gameSound.stop();
        playerNameInput.hide();
        gameSlider.hide();
    }
    if (stage === 3) {

        if (!player) {
            initialise();
        }
        game();
        menuSound.stop();
        introVideo.hide();
        scoreboardButton.hide();
        settingsButton.hide();
        playButton.hide();
        musicSlider.hide();
        gameSlider.hide();
    }
    if (stage === 4) {
        settings();

        menuSound.setVolume(musicSlider.value());
        gameSound.setVolume(gameSlider.value());

        introVideo.hide();
        scoreboardButton.hide();
        settingsButton.hide();
        playButton.hide();
        musicSlider.show();
        gameSlider.show();
        gameSound.stop();
        nameButton.show();
        playerNameInput.show();
    }
    if (stage === 5) {
        scoreboard();
        introVideo.hide();
        scoreboardButton.hide();
        settingsButton.hide();
        playButton.hide();
        musicSlider.hide();
        gameSound.stop();
        nameButton.hide();
        playerNameInput.hide();
        gameSlider.hide();
    }
    if (stage === 6) {
        gameOver();
        menuSound.stop();
        introVideo.hide();
        scoreboardButton.hide();
        settingsButton.hide();
        playButton.hide();
        musicSlider.hide();
        gameSound.stop();
        nameButton.hide();
        playerNameInput.hide();
        gameSlider.hide();
    }

}


function introScreen() {
    background(introImage);

    menuSound.stop();
    if (keyIsPressed == true) {
        stage = 1;
        introVideo.show();
        menuSound.play();
    }
}

function videoScreen() {
    background('purple');

    introVideo.position(0, 0);
    introVideo.size(1000, 650);
    introVideo.show();
    introVideo.loop();

    if (kb.pressed('z')) {
        stage = 2;
        introVideo.hide();
    }
}


function menu() {
    background(menuBackground);
    image(titleImage, (width / 4) * 2, height / 4 - 120);
    image(menuRobitImage, 20, 0);
}

function initialise() {

    gameStart = true;

    if (gameStart === true) {
        player = new Sprite();
        player.img = robitShipImage;
        player.x = width / 2;
        player.y = height - 50;
        player.w = 50;//changes hitbox width
        player.h = 60;//changes hitbox height
        //player.debug = true;

        playerBullets = new Group();

        asteroidGroup = new Group();
        asteroidSpawnChance = 0.001;

        weakEnemyGroup = new Group();
        weakEnemySpawnChance = 0.001
        weakBulletsGroup = new Group();

        strongEnemyGroup = new Group();
        strongBulletsGroup = new Group();

        BOSSbulletsGroup = new Group();
    }
}

function game() {
    background(tempGameBackground);
    if (!gameSound.isPlaying()) {
        gameSound.play();
    }

    image(tempGameBackground, 0, backgroundY, width, height);
    image(tempGameBackground, 0, backgroundY2, width, height);
    backgroundY += scrollspeed;
    backgroundY2 += scrollspeed;

    if (backgroundY >= height) {
        backgroundY = -height;
    }
    if (backgroundY2 >= height) {
        backgroundY2 = -height;
    }

    if (kb.presses('z') && gameStart === true) {
        let playerBullet = new playerBullets.Sprite();
        playerBullet.img = playerBulletImage;
        playerBulletImage.resize(40, 80);

        playerBullets.overlaps(player);
        playerBullets.overlaps(playerBullets);

        playerBullet.w = 30;
        playerBullet.h = 70;
        playerBullet.y = player.y - 35;
        playerBullet.x = player.x
        playerBullet.vel.y = -10;
        //playerBullet.debug = true; 
    }

    if (kb.pressing('arrowLeft') && gameStart === true) {
        player.vel.x = -5;
    } else if (kb.pressing('arrowRight') && gameStart === true) {
        player.vel.x = 5;
    } else {
        player.vel.x = 0;
    }

    if (kb.pressing('arrowUp') && gameStart === true) {
        player.vel.y = -5;
    } else if (kb.pressing('arrowDown') && gameStart === true) {
        player.vel.y = 5;
    } else {
        player.vel.y = 0;
    }

    //second attempt at asteroids. might have to use for loop to limit spawn to certain amout
    //or another way to cap the spawn at a certain amount of sprites, or a cetain number in spawn chance.
    asteroidSpawnChance += 0.00001;
    asteroidCap = 10;
    if (random() < asteroidSpawnChance && asteroidGroup.length < asteroidCap) {
        asteroid = new asteroidGroup.Sprite();
        asteroid.img = asteroidImage;
        asteroidImage.resize(40, 40);
        asteroid.w = 40;
        asteroid.h = 40;
        asteroidGroup.overlaps(asteroidGroup);
        //asteroid.debug = true;

        let edge = int(random(3));

        if (edge === 0) { //top
            asteroid.position.x = random(1, width - 1);
            asteroid.position.y = 1;
        }
        else if (edge === 1) {//right
            asteroid.position.x = width - 1;
            asteroid.position.y = random(1, height - 1);
        }
        else if (edge === 2) {//left
            asteroid.position.x = 1;
            asteroid.position.y = random(1, height - 1);
        }
        asteroid.direction = asteroid.angleTo(player);
        asteroid.speed = 4.5;
    }

    // Handle collisions
    playerBullets.collides(asteroidGroup, impact);
    if (player.overlaps(asteroidGroup)) {
        stage = 6;
    }

    weakEnemySpawnChance += 0.00001;
    weakEnemyCap = 5;
    if (random() < weakEnemySpawnChance && weakEnemyGroup.length < weakEnemyCap) {
        weakEnemy = new weakEnemyGroup.Sprite();
        weakEnemy.img = weakEyeImage;
        weakEyeImage.resize(40, 40);
        weakEnemy.w = 40;
        weakEnemy.h = 40;
        weakEnemyGroup.overlaps(weakEnemyGroup);
        weakEnemyGroup.overlaps(asteroidGroup);
        //weakEnemy.debug = true;

        let edge = int(random(3));

        if (edge === 0) { //top
            weakEnemy.position.x = random(1, width - 1);
            weakEnemy.position.y = 1;
        }
        else if (edge === 1) {//right
            weakEnemy.position.x = width - 1;
            weakEnemy.position.y = random(1, height - 1);
        }
        else if (edge === 2) {//left
            weakEnemy.position.x = 1;
            weakEnemy.position.y = random(1, height - 1);
        }
        weakEnemy.direction = weakEnemy.angleTo(player);
        weakEnemy.speed = 4.5;
    }

    // Handle collisions
    playerBullets.collides(weakEnemyGroup, impact);
    if (player.overlaps(weakEnemyGroup)) {
        stage = 6;
    }

    //score
    fill(255);
    textSize(25);
    text("Score:", 50, 35);
    text(score, 150, 35);
    text("Player:", 50, 70);
    text(playerName, 150, 70);


}

function impact(playerBullets, asteroid) {
    playerBullets.remove();
    asteroid.remove();
    score += 1;
}

function settings() {
    background(settingsImage)

    image(menuImage, 50, 50, 50, 50);
    if (mouseX >= 50 && mouseX <= 100 && mouseY >= 50 && mouseY <= 100 && mouseIsPressed) {
        stage = 2;
        musicSlider.hide();
    }

    textSize(22);
    stroke(2);
    fill(255);
    text("Menu Music", 180, 155);

    text("Game Music", 180, 305);

    textSize(18);
    text("Please enter name below & press submit", 180, 480);
}

function setPlayerName() {
    playerName = playerNameInput.value();
    if (playerName) {
    } else {
        alert("Please enter a name in settings before starting!! :3");
    }
}

function scoreboard() {
    background(scoreboardImage);

    textAlign(CENTER);
    textSize(30);
    stroke(2);
    fill(0);

    let posY = 200;
    for (let i = 0; i < scoreData.scores.length; i++) {
        let score = scoreData.scores[i];
        text(score.name + ':' + score.score, width / 2, posY);
        posY += 30;
    }

    image(menuImage, 50, 50, 50, 50);
    if (mouseX >= 50 && mouseX <= 100 && mouseY >= 50 && mouseY <= 100 && mouseIsPressed) {
        stage = 2;
        //musicSlider.hide();
    }
    updateScores(playerName, score);

}

function updateScores(playerName, score) {

    let playerIndex = scoreData.scores.findIndex(entry => entry.name === playerName);

    if (playerIndex !== -1) {

        scoreData.scores[playerIndex].score = score;
    } else {
        scoreData.scores.push({ name: playerName, score: score });
    }
}


function gameOver() {

    gameStart = false;
    if (gameStart === false) {
        // Stop the gameSound when the game ends
        gameSound.stop();
        menuSound.play();
    }
    if (gameStart === false) {
        background(0);

        image(gameOverImage, width / 8, height / 3);

        if (kb.presses('z') && stage === 6) {
            stage = 2;
        }

        player.remove();
        playerBullets.remove();
        asteroidGroup.remove();

        weakEnemyGroup.remove();
        weakBulletsGroup.remove();
    }
}
