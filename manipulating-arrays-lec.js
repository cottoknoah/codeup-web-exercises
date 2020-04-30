"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array
// they do not take in () parameters
var numStrings = ['three','four','five','six','seven'];


// TO DO TOGETHER: Use the .push method to add the next String in the sequence.

numString.push('eight');

// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.

numString.unshift('two');

// TO DO: Use the .push method to add 'nine' and 'ten'.
numString.push('nine', 'ten');
//this returns the new length of the array index
console.log(numStrings);

// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?

numString.unshift('zero','one');

// Console log your results.

/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
var bayes = activeCohorts.pop();
console.log(activeCohorts);

// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
var deimos = activeCohorts.shift();
console.log(activeCohorts);

// What do we get when we log the return of these methods?

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.
//no need to add the var before ?
var ada = activeCohorts.pop();
var europa = activeCohorts.shift();
console.log(activeCohorts);


/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// these methods return a numnber representing the index of the element
// indexOf - lastIndexOf
var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
console.log(fruit.indexOf('apples'));
// TO DO TOGETHER: Find the last index of 'apples' in the array
console.log(fruit.lastIndexOf('apples'));

// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.

if(fruit.lastIndexOf('grapes') === fruit.length -1){
    fruit.pop();
}
console.log(fruit);


// Console log your new array.


/* ***************************************************************
* 							SLICING
*************************************************************** */

// Allows us to copy a portion of our array
// DOES NOT modify the original array, instead returns a new array
// stops right before

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.

var ganymedeInstructors = instructors.slice(0,3);
console.log(ganymedeInstructors);

// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.

var fortunaInstructors = instructors.slice(3);

console.log(fortunaInstructors);
console.log(instructors);

/* ***************************************************************
* 							REVERSING
*************************************************************** */

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display
console.log(instructors);
instructors.reverse();


/* ***************************************************************
* 							SORTING
*************************************************************** */
// Converts anything that isn't a string into a string equivalent
// Numbers always come first, than alphabetically with words

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.

var myString = [5,6,'one',1,2,'3','4'];
console.log(myString.sort());


console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
//delimter is what you use to seperate strings
// backward slash \n seperates into a new line
// <br> would also work in working with an HTML


var submarine = "We all live in a yellow submarine.";
var submarineArray = submarine.split(' ');
console.log(submarineArray);

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?
console.log(submarine);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.

var newSubmarine = submarineArray.join('\n');
console.log(newSubmarine);






