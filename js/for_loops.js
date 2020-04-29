// "use strict"
//
// // ======================== 2
//
// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (i * num));
//         //concat to have the output read num x i = answer
//     }
// }
// showMultiplicationTable(7);
// //need to CALL the function is order to run
//
// ======================= 3
//
// for (var i = 1; i <= 10; i++) {
//     var retVal = Math.random() * (200 - 20) + 20;
//     //this line generates a random number max: 200 - min: 20
//     retVal = Math.trunc(retVal);
//     //this line takes away decimals
//     if (retVal % 2 === 0) {
//     //this line checks if it's even
//         console.log(retVal + " is even");
//     } else {
//         console.log(retVal + " is odd");
//     }
// }
//
// // ====================== 4
//
// for (var i = 1; i <= 9; i++) {
//     var retVal = "";
//     //this line goes verticaly 1-9
//     for (var j = 1; j <= i; j++) {
//         retVal += i;
//         //this line goes horizontally the number of i times
//     }
//     console.log(retVal);
// }
//
// //NOTE: This one goes backwards!
//
// // for (var i = 9; i >= 1; i--) {
// //     var retVal = "";
// //
// //     for (var j = 1; j <= i; j++) {
// //         retVal += i;
// //     }
// //     console.log(retVal);
// // }
//
//
// // ======================= 5
//
// for (var i = 100; i >= 5; i--) {
//     if ( i % 5 === 0)
//         console.log(i);
// }
//
//
