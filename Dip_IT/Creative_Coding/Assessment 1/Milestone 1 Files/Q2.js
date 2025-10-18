"use strict";
function setup () {
    createCanvas (400, 400);    
}
function draw () {
    background (150, 150, 150);


        let comedy = 4;
        let action = 5;
        let romance = 6;
        let drama = 1;
        let scifi = 4;
        
        const THE_WHOLE = comedy + action + romance + drama + scifi;
        
        const COMEDY_PERCENTAGE = (comedy/THE_WHOLE);
        const ACTION_PERCENTAGE = (action/THE_WHOLE);
        const ROMANCE_PERCENTAGE = (romance/THE_WHOLE);
        const DRAMA_PERCENTAGE = (drama/THE_WHOLE);
        const SCIFI_PERCENTAGE = (scifi/THE_WHOLE);

        const COMEDY_SLICE = (comedy/THE_WHOLE)*360;
        const ACTION_SLICE = (action/THE_WHOLE)*360;
        const ROMANCE_SLICE = (romance/THE_WHOLE)*360;
        const DRAMA_SLICE = (drama/THE_WHOLE)*360;
        const SCIFI_SLICE = (scifi/THE_WHOLE)*360;
        
    stroke (255, 255, 255);
        fill (0, 0, 0);
            rect (1, 1, 150, 85, 10, 10, 10, 10);

    noStroke ();
        fill (180, 5, 5);
            text ("COMEDY: " + comedy + ", (" + COMEDY_PERCENTAGE*100 + "%)", 10, 15);
        fill (5, 150, 5)
            text ("ACTION: " + action + ", (" + ACTION_PERCENTAGE*100 + "%)", 10, 30);
        fill (100, 100, 200);
            text ("ROMANCE: " + romance + ", (" + ROMANCE_PERCENTAGE*100 + "%)", 10, 45);
        fill (180, 100, 5);
            text ("DRAMA: " + drama + ", (" + DRAMA_PERCENTAGE*100 + "%)", 10, 60);
        fill (255, 255, 255);
            text ("SCIFI: " + scifi + ", (" + SCIFI_PERCENTAGE*100 + "%)", 10, 75);

angleMode(DEGREES);
    strokeWeight (1);
    stroke(255, 255, 255);
        fill (100, 5, 5);    
            arc (width / 2, height / 2 + 30, width / 2 + 100, height / 2 + 100, 0, COMEDY_SLICE, PIE);
        fill (5, 100, 5);
            arc (width / 2, height / 2 + 30, width / 2 + 100, height / 2 + 100, COMEDY_SLICE, COMEDY_SLICE + ACTION_SLICE, PIE);
        fill (5, 5, 100);
            arc (width / 2, height / 2 + 30, width / 2 + 100, height / 2 + 100, ACTION_SLICE + COMEDY_SLICE, ROMANCE_SLICE + ACTION_SLICE + COMEDY_SLICE, PIE);
        fill (180, 100, 5);
            arc (width / 2, height / 2 + 30, width / 2 + 100, height / 2 + 100, ROMANCE_SLICE + ACTION_SLICE + COMEDY_SLICE, DRAMA_SLICE + ROMANCE_SLICE + ACTION_SLICE + COMEDY_SLICE, PIE);
        fill (0, 0, 0);
            arc (width / 2, height / 2 + 30, width / 2 + 100, height / 2 + 100, DRAMA_SLICE + ROMANCE_SLICE + ACTION_SLICE + COMEDY_SLICE, SCIFI_SLICE + DRAMA_SLICE + ROMANCE_SLICE + ACTION_SLICE + COMEDY_SLICE, PIE);
}