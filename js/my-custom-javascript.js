"use strict";

$(document).ready(function() {
    alert('The DOM has finished loading!');
});

//Add jQuery code that will change the background color of an h1 element when clicked.

$('h1').click(function(){
    $(this).css('background-color', 'aqua');
});


//Make all paragraphs have a font size of 18px when they are double clicked.
$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});


//Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);


//Remove your custom jQuery code from previous exercises.


//========NOTES=======//
//===(*) equals all===//
//=====(.) class selector=====//
//====do not have IDs & Classes that are exactly the same====//
// $('.important, p').css('background-color', '#FF0');
// $("selector1, selector2, ...")

// $(document). ready(function(){
//     var welcomeHeading = $('#book-welcome').html();
//     alert(welcomeHeading);
// });
// $('li').css('font-size', '20px');
// $('*').css('background-color', 'yellow');
// $('paragraph').css('border', 'red');
// var title = $('#title').html();
// var paragraph = $('#paragraph').html();
// var list = $('li').html();
// alert(title);
// alert(paragraph)
// $('.codeup').css('border', '1px solid red');
// var everything = $('#title, #paragraph, li');
// everything.css('background-color', 'yellow')


//=======SOPHIE'S BONUS===========//
// var myHeadings = $('h1');
//
// for (var i = 0; i < myHeadings.length; i++) {
//     console.log(myHeadings[i],innerHTML);
// }
// alert(myHeadings);
//=============BONUS=============//




