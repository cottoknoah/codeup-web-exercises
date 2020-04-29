"use strict";

//not the answer below but concept

// for (var i = 2; i <= 128; i++) {
//     if ( i % 2 === 0)
//         console.log(i);
//     continue;
//     if (i * i) {
//         break;
//     }
//     console.log(i);
// }


// while loop answer

var num = 2;

while (num <= 65536) {
    console.log(num);
    num = num * 2;
}


//
// //do while syntax for reference
// var text = "";
// var i = 0;
// do {
//     text += "The number is " + i;
//     i++;
// }
// while (i < 5);
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// var result = "";
// var i = 1;
//
// do {
//     var allCones = Math.random() * (100 - 50) + 50;
//     allCones = Math.trunc(allCones);
// }
// while (Math.floor(Math.random(allCones) * 5) + 1);
// console.log(result)