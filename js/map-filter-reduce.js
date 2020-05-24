const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// console.log(users);

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let threeUserLangs = users.filter((user) => user.languages.length >= 3);
let threeLangs = users.filter((user) => user.languages.length > 2);
// console.log(threeUserLangs);
console.loge(threeLangs);

// 3. Use .map to create an array of strings where each element is a user's email address

const userEmails = users.map((user ) => {
    return users.email;
});

console.log(userEmails);

// 4. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
//this needs two arguments
//sum all --- get average

const totalExp = users.reduce(
    (accumulator, currentValue) => (accumulator + currentValue) / users.length
);

console.log(totalExp);

// 5. Use .reduce to get the longest email from the list of users.

let longestEm = users.reduce((longestEmail, user) => {
    if (longestEm.length > user.email.length) {
        return longestEmail;
 } else {
     return user.email;
    }
}, "");

console.log(longestEm);


// 6. Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
//template literal

// let instructorsString = users.reduce((finalString, instructor) => {
//     return userString + $
// , ""};


// BONUS Use .reduce to get the unique list of languages from the list of users.
