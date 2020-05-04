(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person = {};

    person.firstName = "Knoah";

    person.lastName = "Cotto";

    console.log(person.firstName); // "Knoah"
    console.log(person.lastName); // "Cotto"


    // function sayHello() {
    //     return "Hello from " + firstName + lastName;
    // }

    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName + " !" ;
    };

    console.log(person.sayHello());

// ============================================================================
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

// 12% after 200
// print out person, amount before, amount after discount



// This is an array of shopper objects
    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    shoppers.forEach(function (shopperItem) {
        // object is shoperItem
        var amount = shopperItem.amount;
        if (amount >= 200) {
            // get 12% of total and reassign total to the new value
            amount = amount - (amount * .12);
        }
        if (amount !== shopperItem.amount) {
            var discount = shopperItem.amount - amount;
            console.log("Congratulations " + shopperItem.name + ". " + "You spent $" + shopperItem.amount +
                " and got a discount of $" + discount.toFixed(2) + " and paid $" + amount.toFixed(2) +
                " total.");
        } else {
            console.log("Sorry, " + shopperItem.name + ". " + "You spent $" + shopperItem.amount + " and did not get a discount.");
        }
    });


    //=======================================================================

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [ {book1, book2, book3];

    var books = [
        {
            title: "Eragon",
            author: {
                firstName: "Christopher",
                lastName: "Paolini",
            }
        },
        {
            title: "Balls",
            author: {
                firstName: "Chris",
                lastName: "Edwards",
            }
        },
        {
            title: "Impulse",
            author: {
                firstName: "Ellen",
                lastName: "Hopkins",
            }
        },
        {
            title: "Time Traveler's Wife",
            author: {
                firstName: "Audrey",
                lastName: "Niffenegger",
            }
        },
        {
            title: "Harry Potter and the Philosepher's Stone",
            author: {
                firstName: "J. K.",
                lastName: "Rowling",
            }
        },
        {
            title: "Gathering Blue",
            author: {
                firstName: "Lois",
                lastName: "Lowry",
            }
        },
    ];


    console.log("The title of the first book is " + books[0].title + "!");
    console.log("\n" + "The author's first name of the third book is " + books[2].author.firstName + ".");
    console.log("\n" + "The final book's author's last name is " + books[5].author.lastName + ".");
    console.log("\n");

    //use of a for each loop
    books.forEach(function(book) {
        console.log(book.title);
    });



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("\n");

    for (var i = 0; i < books.length; i++) {
        var bookNum = i + 1;
        console.log("---");
        console.log("Book # " + bookNum);
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // function createBook (title, authorFirstName, authorLastName) {
    //     var newBook = {};
    //     title = title;
    //     author = {
    //         firstName: authorFirstName,
    //         lastName: authorLastName
    //     }
    //     return newBook;
    // }
    // console.log(createBook());
    //
    // function showBookInfo(books) {
    //
    // }

})();
