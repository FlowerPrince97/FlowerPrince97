"use strict";

let wave_colour = []; // Array to store random colours for each line

function setup() {
  createCanvas(400, 400);
  noStroke();

  
  for (let i = 0; i < height; i++) {
    wave_colour.push(color(random(50,250), random(50, 250), random(50, 250))); // Generates random colours for each line and stores them in the array
  } //done outside of draw so that this only gets called once per page load, not fps
}

function draw() {
  background(0);

  // arrays for x and y coordinates
  let x_points = [0, 0, 0, width * 0.2, width * 0.4, width * 0.6, width * 0.8, width, width, width, 0];
  let y_points = [0, -20, height * 0.1, height * 0.1 - 50, height * 0.1 + 50, height * 0.1 - 50, height * 0.1 + 50, height * 0.1 - 50, height / 2, height, height];

  // Loop for drawing the curveVertex
  for (let i = 0; i < height; i += 25) {
    beginShape();
    // sets a random colour from array
    fill(wave_colour[i]);
    // go through arrays and draw curve vertices
    for (let j = 0; j < x_points.length; j++) {
      curveVertex(x_points[j], y_points[j] + i); // changes the location that each line is drawn at
    }
    endShape(CLOSE);
  }
}
