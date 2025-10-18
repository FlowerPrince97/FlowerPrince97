"use strict";

let rect_width;
let rect_height;
let circle_diameter;

function setup() {
    createCanvas(1530, 690);

}

function draw() {
    background(50, 50, 50);

    let line_increment_increase_x = width / 200; //how far apart the vertical lines are
    let line_increment_increase_y = height / 100; //how far apart the horizontal lines are

    let rect_width = width / 3;
    let rect_height = height / 2;

    let rect_top_y = 0;
    let rect_bottom_y = height / 2;

    let rect_left_x = 0;
    let rect_mid_x = width / 3;
    let rect_right_x = (width / 3) * 2;

    rectMode(CORNER);

    noStroke()
    fill(200, 50, 50);
    rect(rect_left_x, rect_top_y, rect_width, rect_height); //top left rec (red) 

    fill(200, 200, 50);
    rect(rect_mid_x, rect_top_y, rect_width, rect_height); //top middle rec (yellow)

    fill(0, 50, 120);
    rect(rect_right_x, rect_top_y, rect_width, rect_height); //top right rec (blue)

    fill(200, 50, 50);
    rect(rect_left_x, rect_bottom_y, rect_width, rect_height); //bottom left rec (red)

    fill(200, 200, 50);
    rect(rect_mid_x, rect_bottom_y, rect_width, rect_height); //bottom middle rec (yellow)

    fill(0, 50, 120);
    rect(rect_right_x, rect_bottom_y, rect_width, rect_height); //bottom right rect (blue)

    //top lines

    let top_line_start_y = 0;
    let top_line_end_y = height / 2;

    let bottom_line_start_y = top_line_end_y;
    let bottom_line_end_y = height

    stroke(0, 50, 120); //blue

    for (let y = top_line_start_y; y < top_line_end_y; y += line_increment_increase_y) {
        line(rect_left_x, y, rect_mid_x, y);
    }

    stroke(200, 50, 50); //red

    for (let y = top_line_start_y; y < top_line_end_y; y += line_increment_increase_y) {
        line(rect_mid_x, y, rect_right_x, y);
    }

    stroke(200, 200, 50); //yellow

    for (let y = top_line_start_y; y < top_line_end_y; y += line_increment_increase_y) {
        line(rect_right_x, y, width, y);
    }

    //bottom lines

    stroke(200, 200, 50); //yellow

    for (let y = bottom_line_start_y; y < bottom_line_end_y; y += line_increment_increase_y) {
        line(rect_left_x, y, rect_mid_x, y);
    }

    stroke(0, 50, 120); //blue

    for (let y = bottom_line_start_y; y < bottom_line_end_y; y += line_increment_increase_y) {
        line(rect_mid_x, y, rect_right_x, y);
    }

    stroke(200, 50, 50); //red

    for (let y = bottom_line_start_y; y < bottom_line_end_y; y += line_increment_increase_y) {
        line(rect_right_x, y, width, y);
    }


    let shape_size = rect_width / 1.80;
    let shape_pos_x = rect_width / 2;
    let shape_pos_y = rect_height / 2;

    //circle
    noStroke();
    fill(200, 50, 50); //red
    ellipse(shape_pos_x, shape_pos_y, shape_size, shape_size);
    //width / 6, height / 4

    //circle_vert_lines

    stroke(200, 200, 50);
    angleMode(DEGREES);
    let circle_center_y = shape_pos_y / 2;
    for (let i = 0; i < shape_pos_x / 2 * 4; i++) {
    let angle = i * line_increment_increase_x; // Calculate angle
    let circle_x_start = shape_pos_x + cos(angle) * shape_size / 2; // Starting x-coordinate
    let circle_x_end = shape_pos_x + cos(angle) * shape_size / 2; // Ending x-coordinate
    let circle_y_top = circle_center_y - sin(angle) * shape_size / 2; // Top y-coordinate
    let circle_y_bottom = circle_center_y + sin(angle) * shape_size / 2; // Bottom y-coordinate
    
    for (let x = circle_x_start; x < circle_x_end; x += line_increment_increase_x) {
        line (x, circle_y_top, x, circle_y_bottom);
    }

    }

    //square
    noStroke();
    fill(200, 200, 50); //yellow
    rectMode(CENTER);
    rect(shape_pos_x + rect_width, shape_pos_y, shape_size, shape_size);

    //square_vert_lines
    stroke(0, 50, 120); //blue

    let square_x_start = (shape_pos_x / 2) + rect_width - 13;
    let square_x_end = ((shape_pos_x / 2) + rect_width - 13) + shape_size;
    let square_y_top = shape_size / 9;
    let square_y_bottom = shape_size + (shape_size / 9);

    for (let x = square_x_start; x < square_x_end; x += line_increment_increase_x) {
        line(x, square_y_top, x, square_y_bottom);
    }

    //triangle_left_top
    noStroke();
    //stroke(0);
    fill(0, 50, 120); //blue
    triangle(shape_pos_x + rect_width * 2, (shape_pos_y * 2 / 12) + 3,
        1135, shape_size + (312 - 282),
        shape_pos_x + rect_width * 2, shape_size + (312 - 282)); //first xy is top, second xy left, third xy right

    //triangle_left_top vert lines
    stroke(200, 50, 50); //red
    let triLeftTop_left_x_start = 1135;
    let triLeftTop_left_x_end = shape_pos_x + rect_width * 2;
    let triLeftTop_y_start = shape_size + (312 - 282);
    let triLeftTop_y_end = shape_size + (312 - 282);

    for (let x = triLeftTop_left_x_start; x < triLeftTop_left_x_end; x += line_increment_increase_x) {
        line(x, triLeftTop_y_start, x, triLeftTop_y_end);
        triLeftTop_y_end -= 15.4;
    }

    //triangle_right_top
    noStroke();
    //stroke(0);
    fill(0, 50, 120); //blue
    triangle(shape_pos_x + rect_width * 2, (shape_pos_y * 2 / 12) + 3,
        shape_pos_x + rect_width * 2, shape_size + (312 - 282),
        shape_pos_x + rect_width * 2 + (shape_pos_x + rect_width * 2 - 1135), shape_size + (312 - 282)); //first xy is top, second xy is left, third xy is right

    //triangle_right_top vert lines
    stroke(200, 50, 50); //red
    let triRightTop_left_x_start = shape_pos_x + rect_width * 2 + line_increment_increase_x - 2;
    let triRightTop_left_x_end = shape_pos_x + rect_width * 2 + (shape_pos_x + rect_width * 2 - 1135);
    let triRightTop_y_start = (shape_pos_y * 2 / 12) + 14.5;
    let triRightTop_y_end = shape_size + (312 - 282);

    for (let x = triRightTop_left_x_start; x < triRightTop_left_x_end; x += line_increment_increase_x) {
        line(x, triRightTop_y_start, x, triRightTop_y_end);
        triRightTop_y_start += 15.5;
    }

    //rect_bottom_left
    rectMode(CENTER)
    noStroke();
    fill(200, 50, 50); //red
    rect(shape_pos_x, shape_pos_y * 3, shape_size / 2, shape_size);

    //rect_bottom_left vert lines
    stroke(0, 50, 120);
    let rectBotLeft_x_start = shape_pos_x - shape_pos_x / 3.64;
    let rectBotLeft_x_end = rectBotLeft_x_start + shape_pos_x / 1.8;
    let rectBotLeft_y_top = shape_pos_y * 3 - (shape_pos_y - 29);
    let rectBotLeft_y_bottom = shape_pos_y * 3 + (shape_pos_y - 29);

    for (let x = rectBotLeft_x_start; x < rectBotLeft_x_end; x += line_increment_increase_x) {
        line(x, rectBotLeft_y_top, x, rectBotLeft_y_bottom);
    }

    //rect_bottom_mid
    noStroke();
    fill(200, 200, 50); //yellow
    rect(shape_pos_x + rect_width, shape_pos_y * 3, shape_size / 2, shape_size);

    //rect_bottom_mid vert lines
    stroke(200, 50, 50); //red
    let rectBotMid_x_start = shape_pos_x + rect_width - shape_pos_x / 3.64;
    let rectBotMid_x_end = rectBotMid_x_start + shape_pos_x / 1.8;
    let rectBotMid_y_top = shape_pos_y * 3 - (shape_pos_y - 29);
    let rectBotMid_y_bottom = shape_pos_y * 3 + (shape_pos_y - 29);

    for (let x = rectBotMid_x_start; x < rectBotMid_x_end; x += line_increment_increase_x) {
        line(x, rectBotMid_y_top, x, rectBotMid_y_bottom);
    }

    //triangle_left_bottom_mid
    noStroke();
    //stroke(0);
    fill(200, 200, 50); //yellow
    triangle(shape_pos_x / 1.39 + rect_width + 1, shape_pos_y * 2.20 - 3,
        shape_pos_x + rect_width - (rect_width / 3.6), shape_size + rect_height + 33,
        shape_pos_x / 1.39 + rect_width + 1, shape_size + rect_height + 33); //first xy is top, second xy left, third xy right

    //triLeftBotMid vert lines
    stroke(200, 50, 50); //red
    let triLeftBotMid_left_x_start = shape_pos_x + rect_width - (rect_width / 3.6);
    let triLeftBotMid_left_x_end = (shape_pos_x / 1.39 + rect_width + 1) - 3; //- line_increment_increase_x / 2;
    let triLeftBotMid_y_start = shape_size + rect_height + 33;
    let triLeftBotMid_y_end = shape_size + rect_height + 33;

    for (let x = triLeftBotMid_left_x_start; x < triLeftBotMid_left_x_end; x += line_increment_increase_x) {
        line(x, triLeftBotMid_y_start, x, triLeftBotMid_y_end);
        triLeftBotMid_y_end -= 30.5;
    }

    //triangle_right_bottom_mid
    noStroke();
    //stroke(0);
    fill(200, 200, 50); //yellow
    triangle((shape_pos_x * 1.28) + rect_width - 1, shape_pos_y * 2.20 - 3,
        (shape_pos_x * 1.28) + rect_width - 1, shape_size + rect_height + 33,
        shape_pos_x + (rect_width / 3.6) + rect_width, shape_size + rect_height + 33); //first xy is top, second xy left, third xy right

    //triRightBotMid vert lines
    stroke(200, 50, 50); //red
    let triRightBotMid_left_x_start = (shape_pos_x * 1.28) + rect_width - 1;
    let triRightBotMid_left_x_end = shape_pos_x + (rect_width / 3.6) + rect_width;
    let triRightBotMid_y_start = shape_pos_y * 2.20 - 3;
    let triRightBotMid_y_end = shape_size + rect_height + 33;

    for (let x = triRightBotMid_left_x_start; x < triRightBotMid_left_x_end; x += line_increment_increase_x) {
        line(x, triRightBotMid_y_start, x, triRightBotMid_y_end);
        triRightBotMid_y_start += 30;
    }

    //triangle_bottom_right_downside
    noStroke();
    //stroke(0);
    fill(0, 50, 120); //blue
    triangle((shape_pos_x + rect_width * 2) - 40, (shape_pos_y * 2.20), //top point
        (shape_pos_x + rect_width * 2) - 140, shape_size + rect_height + 33, //left point
        (shape_pos_x + rect_width * 2) + 40, shape_size + rect_height + 33); //right point

    //triangle_bottom_right_upside
    noStroke();
    //stroke(0);
    fill(0, 50, 120); //blue
    triangle((shape_pos_x + rect_width * 2) - 40, shape_pos_y * 2.20, //left point
        (shape_pos_x + rect_width * 2) + 140, shape_pos_y * 2.20, //right point
        (shape_pos_x + rect_width * 2) + 40, shape_size + rect_height + 33); //bottom point

}