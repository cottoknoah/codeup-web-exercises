// console.log('Hello from external JavaScript');
//
// alert("Welcome to my Website!");
//
// var userFavoriteColor = prompt('What is your favorite color?');
// console.log('The user entered: ' + userFavoriteColor);
//
// alert("'That is my favorite color also!");

// Exercise #3 //
//My answers // Nxt to correct answers

/*
Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

var dailyRentalRateDollars;
var littleMermaidDaysRented;
var brotherBearDaysRented;
var herculesDaysRented;

var totalRentalCost;

totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * (dailyRentalRateDollars);

var userInput = prompt('What is your answer?');
console.log('The user entered: ' + userInput);
console.log(totalRentalCost);

alert(totalRentalCost);

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

a = 400;
b = 380;
c = 350;

d = 6;
e = 4;
f = 10;


var googleHourlyDollars = a;
var amazonHourlyDollars = b;
var facebookHourlyDollars = c;

var hoursWorkedAtGoogle = d;
var hoursWorkedAtAmazon = e;
var hoursWorkedAtFacebook = f;

// var daysWorkedPerWeek = x;

var googlePaidDollars = (googleHourlyDollars) * (hoursWorkedAtGoogle);
var amazonPaidDollars = (amazonHourlyDollars) * (hoursWorkedAtAmazon);
var facebookPaidDollars = (facebookHourlyDollars) * (hoursWorkedAtFacebook);

var combinedWeeklyPay = (googlePaidDollars) + (amazonPaidDollars) + (facebookPaidDollars);

var userInput = prompt('Please type your answer here:');
console.log('The user entered: ' + userInput);
console.log(combinedWeeklyPay);

alert(combinedWeeklyPay);

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
 */

var classIsNotFull; // boolean
var classScheduleDoesNotConflict; // boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

var userInput = prompt('Ok to enroll?');
console.log('The user entered: ' + userInput);
console.log(studentEnrolled);

alert("Not this time!");
/*
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */



