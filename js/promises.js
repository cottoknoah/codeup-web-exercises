"use strict";

var url = 'https://api.github.com/user';

//curl

var githubAPI = fetch(url, {
    headers: {
        'Authorization': `token ${GITHUB_API_KEY}`
    }
});



fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach( userObj => {
            // do something with each username
            console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));



function makeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"

// console.log(githubAPI);


