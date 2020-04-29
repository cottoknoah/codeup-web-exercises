"use strict";

let userInput = prompt("Choose an odd number between 1-50!");
console.log("Number to skip: " + userInput);

for(var i = 1; i < 50; i++) {

    if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
    if ( i === userInput) {
        break;
    }
    console.log("Yikes! Skipping number: " + userInput)
}