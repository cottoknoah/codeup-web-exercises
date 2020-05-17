$(document).ready (function() {
	"use strict";

    //Numeric variables
    var output = "";
    var bucket = [];

    //switch case
    $(document).keyup(function(event){
        var keycode = event.keyCode;


        switch (keycode) {
            case 38:
                output += "Up, ";
                break;
            case 40:
                output += "Down, ";
                break;
            case 37:
                output += "Left, ";
                break;
            case 39:
                output += "Right, ";
                break;
            case 66:
                output += "B, ";
                break;
            case 65:
                output += "A, ";
                break;
            case 13:
                console.log(output);
                check();
                break;
            default:
    
            }
        $("#display").html(output);
    });
    //Resets everything to original
    $("#reset").click(function() {
    	output = "";
        $("#display").html(output);
        $("#secret").html('');
        $("#landing").css("display", "block");
        $("#unlocked").css("display", "none");
    });
    ////Resets everything to original state, just like reset. Plan to merge with class button
    $("#lockButton").click(function() {
    	output = "";
        $("#display").html(output);
        $("#secret").html('');
        $("#landing").css("display", "block");
        $("#unlocked").css("display", "none");
    });
    //Gives buttons hover styling
    $("button").hover(function() {
		$(this).css("border", "3px solid black");
	}, 
	function() {
		$(this).css("border", "2px solid red");
	});
    //checks string for correct konami code
    var check = function() {
    	console.log(bucket);
    	console.log(output);
    	if (output === "Up, Up, Down, Down, Left, Right, Left, Right, B, A, ") {
            $("#secret").html('<h1>You won!</h1>');
            $("#titleUnlocked").html("Winner, winner! Chicken dinner!");
            $("#landing").css("height", "");
            $("#landing").css("display", "none");
            $("#unlocked").css("display", "block");
    	} else ( output === [""] );
    };
    //Runs check on submit button click
    $("#submit").click(check);

});

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }
//
// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
//
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
//
// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }