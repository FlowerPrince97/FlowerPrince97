"use strict";

let problemName;
let totalCities;
let cityIDs = [];
let cityXpos = [];
let cityYpos = [];

function preload() {    

    //let berlin = loadTSP('./data/TSP_EUC_Problems/berlin52.tsp')

    //let berlin = loadStrings('./data/TSP_EUC_Problems/berlin52.tsp');

    console.log(loadTSP('./data/TSP_EUC_Problems/berlin52.tsp'));




}

function setup(){
    createCanvas(600, 600);

}

function draw(){
    background(120, 120, 120);
    
}

function loadTSP(filename) {
    let TSPdata = loadStrings(filename);
    for (let i = 0; i < TSPdata.length; i ++ ) {
        let sections = splitTokens(TSPdata[i], ' ' && '.0');

        if (sections[0] === 'NAME:') {
            problemName = sections[1];
        } else if (sections[0] === 'DIMENSION:') {
            totalCities = int(sections[1]);
        } else if (sections[0] === "NODE_COORD_SECTION") {
            for (let j = 0; j < TSPdata.length; j++) {
                let data = splitTokens(TSPdata[j], ' ' && '.0');

                cityIDs = int(data[0]);
                cityXpos = int(data[1]);
                cityYpos = int(data[2]);

            }
        }
    }
}

