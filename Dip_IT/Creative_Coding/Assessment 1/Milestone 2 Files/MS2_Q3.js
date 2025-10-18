"use strict";
let HELLDIVER;
let BUG;
let hell_yellow;
let gunmetal_grey;
let frames_per_flash_hell_yellow = 30;
let frames_per_flash_gunmetal_grey = 30;
let flash_hell_yellow = true;
let flash_gunmetal_grey = false;
let frame_count_since_last_switch = 0;

function preload() {
  HELLDIVER = loadImage("images/HELLDIVER_no_background.png");
  BUG = loadImage("images/Bug.png");
}

function setup() {
  createCanvas(1530, 690);
  frameRate(60);
}

function draw() {
  background(120, 120, 120);

  hell_yellow = color(200, 200, 0);
  gunmetal_grey = color(50, 50, 50)
  
  frame_count_since_last_switch++; //increases frame count since last switch

  // the following checks if it is time for the colours to alternate
  if (frame_count_since_last_switch >= frames_per_flash_hell_yellow && flash_hell_yellow) {
    flash_hell_yellow = false;
    flash_gunmetal_grey = true;
    frame_count_since_last_switch = 0;
  } else if (frame_count_since_last_switch >= frames_per_flash_gunmetal_grey && flash_gunmetal_grey) {
    flash_hell_yellow = true;
    flash_gunmetal_grey = false;
    frame_count_since_last_switch = 0;
  }

  // Set fill and stroke colors based on flash mode
  if (flash_hell_yellow) {
    strokeWeight(10);
    stroke(gunmetal_grey);
    fill(hell_yellow); //yellow
  } else {
    strokeWeight(10);
    stroke(hell_yellow);
    fill(gunmetal_grey); //grey
  }

  let rect_size_x = width - 200;
  let rect_size_y = height - 200;
  let rect_pos_x = 10;
  let rect_pos_y = 10;


  rect(rect_pos_x, rect_pos_y, rect_size_x, rect_size_y, 45, 45, 45, 45);
  
  
  // Set text colors based on flash mode
  if (flash_hell_yellow) {
    fill(gunmetal_grey);
  } else {
    fill(hell_yellow);
  }
  noStroke();

  textSize(100);
  textStyle(ITALIC);
  text("PICK UP P5.JS AND JOIN", rect_pos_x + 60, rect_pos_y + 180);

  textSize(140);
  textStyle(BOLD);
  text("CREATIVE CODING", rect_pos_x + 15, rect_pos_y + 350);

  textSize(50);
  textStyle(NORMAL);
  text("FOR DEMOCRACY", rect_pos_x + 450, rect_pos_y + 450);

  imageMode(CENTER);
  image(HELLDIVER, width - 180, height - 250, 1300, 800);

  //function bugTakeOver() {
    //let x = -50;
    //let y = height / 2;
    //let bug_size = 600;
    //image(BUG, x, y, bug_size,  bug_size);
    //if (x <= width / 2) {
      //x += 10
    //}
  //}
    //if (frameCount > 200) {
      //function bugTakeOver();
    //}
  }