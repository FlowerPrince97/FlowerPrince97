"use strict";

let x, y;
let circle_size = 50;
let circle_speed_y = 0;
let circle_speed_x = 0;
let move_up = false; // conditions for circle movement
let move_down = false;
let move_left = false;
let move_right = false;
let play_game = false;

function setup() {
  createCanvas(400, 400);
  x = width / 2; // Start at the center horizontally
  y = height + circle_size; // Starts below bottom of canvas vertically
}

function draw() {
  background(0);

  noStroke();
  fill(250, 100, 250)
  ellipse(x, y, circle_size, circle_size);

  if (move_up) {
    // Move the circle upwards
    y -= circle_speed_y;

    // Wrap around the canvas if the circle goes beyond the top
    if (y < - circle_size / 2) {
      y = height + circle_size / 2;
    }
  }

  if (move_down) {
    // Move the circle downwards
    y += circle_speed_y;

    // Wrap around the canvas if the circle goes beyond the bottom
    if (y > height + circle_size / 2) {
      y = -circle_size / 2;
    }
  }

  if (move_left) {
    x -= circle_speed_x;

    if (x < - circle_size / 2) {
      x = width + circle_size / 2;
    }
  }

  if (move_right) {
    x += circle_speed_x;

    if (x > width + circle_size / 2) {
      x = -circle_size / 2;
    }
  }

}

function keyPressed() {
  if (keyCode === UP_ARROW && !move_up) {
    play_game = true;
    
    move_up = true;
    move_down = false;
    move_left = false;
    move_right = false;
    circle_speed_y = 5; // speed
    circle_speed_x = 0; 
  } 
  else if (keyCode === DOWN_ARROW && !move_down && play_game === true) {
    move_up = false;
    move_down = true;
    move_left = false;
    move_right = false;
    circle_speed_y = 5;
    circle_speed_x = 0;
  } 
  else if (keyCode === LEFT_ARROW && !move_left && play_game === true) {
    move_up = false;
    move_down = false;
    move_left = true;
    move_right = false;
    circle_speed_y = 0;
    circle_speed_x = 5;
  }
  else if (keyCode === RIGHT_ARROW && !move_right && play_game === true) {
    move_up = false;
    move_down = false;
    move_left = false;
    move_right = true;
    circle_speed_y = 0;
    circle_speed_x = 5;
  }
}

function mousePressed() {
  // Stop the circle's movement if it's currently moving
  if (mouseButton === LEFT && move_up || move_down || move_left || move_right) {
    play_game = false;
    move_up = false;
    move_down = false;
    move_left = false;
    move_right = false;
  }
}
