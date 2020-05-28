"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
//return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully

pokemonAPI.then(response => response.json())
    // .then(jsonResponse => console.log(jsonResponse.res)
        .catch(error => console.log(error));
//once you console.log it you cannot chain additional methods

//TODO: add a method that runs if the Promise fails

//TODO: In the callback function of the .then method, parse the response into JSON

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

//WHAT IS THE SHAPE OF YOUR DATA?

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

var starWarsAPI = fetch('https://swapi.dev/');


// TODO: Use Promise chaining to console log the json response

// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
});


//fetch('fromSomeUrl') -> returns a Promise object
// Pending
// Resolve
// Reject

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions



// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.



// Promise.all([pokemonAPI,starWarsAPI])
//
//     .then(data => console.log(data[1].json)
// });

// Promise.race([pokemonAPI,starWarsAPI])

//racing load time

//promise-lecture? for token name
// scopes -- repo, user