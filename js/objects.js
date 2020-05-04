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

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180,
            totalAmount: "discount",
            discount: function() {
                if (this.totalAmount === "more than $200") {
                    this.totalAmount = "discount";
                } else if ( this.totalAmount === "less than $200"){
                    this.totalAmount = "no dsicount";
                }
            }
            // return this.totalAmount;

},
    {
        name: 'Ryan',
            amount: 250,
        totalAmount: "discount",
        discount: function() {
        if (this.totalAmount === "more than $200") {
            this.totalAmount = "discount";
        } else if ( this.totalAmount === "less than $200"){
            this.totalAmount = "no dsicount";
        }
    }

    },
    {
        name: 'George',
            amount: 320,
        totalAmount: "discount",
        discount: function() {
        if (this.totalAmount === "more than $200") {
            this.totalAmount = "discount";
        } else if ( this.totalAmount === "less than $200"){
            this.totalAmount = "no dsicount";
        }
    }
    },
];

    console.log(discount());

    //   for (var i = 0; i > 200; i++) {
    //     if (shoppers[i].amount === "You get a discount!")
    //};

//  shoppers.forEach(function(shop) {
    //  console.log(shoppers.amount);


    shoppers.forEach(function(shop) {
        var str = "";
        if (shoppers.amount.length > 200) {
            shoppers.amount.forEach(functio

            n (amount, i, arr) {
                if (i === arr.length - 1) {
                    str += amount + " is your total."
                } else {
                    str += amount + ", "
                }
            });
        } else {
            str = shoppers.amount + ".";
        }
        console.log(shoppers.name + " has a 12% discount of " + str);
    });
    // Your program will have to:
    // - display a line with the name of the person
    // - amount before the discount, the discount
    // - the discount, if any, and the amount after the discount
    // - Use a foreach loop to iterate through the array
    // -  console.log the relevant messages for each person

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

    / var books = [ {book1, book2, book3];

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


    books.forEach(function(book) {
        console.log("\n" + book.title);
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

})();
