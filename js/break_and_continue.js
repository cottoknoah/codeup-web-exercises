"use strict";

var userInput = prompt("Choose an odd number between 1-50!");
console.log("Number to skip: " + userInput);
console.log("");

for(var i = 1; i < 50; i++) {

    if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
        continue;
    }
    if ( typeof i === userInput){
        console.log("Yikes! Skipping number: " + userInput)
    }
}

// both of these output is the same

var userInput = prompt("Choose an odd number between 1-50!");
console.log("Number to skip: " + userInput);
console.log("");

for(var i = 1; i < 50; i += 2) {
    if ( i === userInput){
        console.log("Yikes! Skipping number: " + userInput)
        continue;
    }
        console.log("Here is an odd number: " + i);
}