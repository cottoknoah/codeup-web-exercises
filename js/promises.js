"use strict";

// 1. Create js/promises.js and link it in an html file
// 2. Generate a GitHub API personal access token (add to keys.js)
// 3. Create a function that accepts anyone's GitHub username and returns a promise that resolves returning just the date of the last commit that user made.

    // var url = 'https://api.github.com/users';
    // var githubAPI = fetch(url, {
    //     headers: {
    //         'Authorization': `token ${GITHUB_API_KEY}`
    //     }
    // });

// console.log(githubAPI)

// ======================================#1
// Create a function that accepts a GitHub username, and returns a promise that
// resolves returning just the date of the last
// commit that user made.
// Reference the github api documentation to achieve this.

//make a function that takes in GitHube username
//returns a promise
//resolves to date of the most recent commit

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        //turning it into an promise object above
        .then(events => {
           return events.filter(event => event.type ==="PushEvent")[0].created_at;
        });
}

getLastCommitDate('cottoknoah').then(date => {
    console.log(new Date(date).toDateString());
});

// ==================================== #2
// Write a function named wait that accepts a number as a parameter, and
// returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function wait(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log("You'll see this after " + seconds/1000 + " seconds.");
            } else {
                console.log("You'll see this after " + seconds/1000 + " second.");
            }
        },seconds)
    })
}

wait(1);
wait(2);
wait(3);