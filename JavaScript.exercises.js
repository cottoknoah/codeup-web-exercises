// Exercise #1 //

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?

//My answers // Nxt to correct answers

a = 1; // 1;
b = 2; // 2;
c = 3; // 4;

var d = "hello";
var e = false;

d++;
e++;

d = false; // NaN cause it's a string
e = false; // 0 confused here but assuming cause it's a boolean


var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

null; // undefined

var price = 2.7;
price.toFixed(2);

var price = "2.7";
price.toFixed(2);

isNaN(0)

isNaN(1)

isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true

!false

!!true

!!false

!!0

!!-0

!!1

!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"

// Exercise #2 //
//My answers // Nxt to correct answers

var sample = "Hello Codeup";

/*
-Use .length to find the number of characters in the string.
-Try to make the sample string all upper or all lower case.
-Update the variable sample via concatenation so that it contains "Hello Codeup Students".
-Replace "Students" with "Class".
-Find the index of "c" using .indexOf(). What do you observe?
-Find the index of "C" using .indexOf().
-Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

 */

// Exercise #3 //
//My answers // Nxt to correct answers

/*
Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

var days = x;
x = 0;
var littleMermaid = (x + 3);
var brotherBear = (x + 5);
var hercules = (x + 1);
var pricePerDay = (y);
y = 3;

var movieTotalRentedPrice = (littleMermaid + brotherBear + hercules) * (pricePerDay).toFixed(3);


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

console.log(combinedWeeklyPay);

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
 */

var fullClass = 'a';
var notFullClass =  'b';

var schedule = 'c';

var notOkToEnroll = ((fullClass || notFullClass) && schedule ) === true;


/*
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */




// Exercise #4//
//My answers // Nxt to correct answers

var username = 'codeup';
var password = 'notastrongpassword';

function strongPassword = (str); {
 if (str.length > 5 );
} return true;





/*
Create a variable that holds a boolean value for each of the following conditions:
-the password must be at least 5 characters
-the password must not include the username
-the username must be no more than 20 characters
-neither the username or password can start or end with whitespace
 */