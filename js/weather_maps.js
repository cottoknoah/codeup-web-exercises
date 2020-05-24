(function() {
    //==========Variables Below==========================//
    var address = "http://api.openweathermap.org/data/2.5/forecast/daily"; // Open Weather URL
    var APPID = "7f8e3aa0aad113510e0c1eaafd1c17b8"; // Open Weather APP ID
    var latLong = $("#cords"); // Outputs lat/long to HTML
    var output = $("#output"); // Main DIV for html
    var submitButton = $("#addressSubmit"); // For assigning button click
    var map = document.getElementById("maps"); //For assigning div for google maps to draw on
    var latLongString = ""; // Make lat/long to string
    var outputString = ""; // Make entire HTML structure output to string


    //========================Setup weather API
    var getWeather = function() {
        $.get(address, {
            APPID: APPID,
            lat: lat,
            lon: long,
            cnt: 3,  // days outputed
            units: "imperial"  // if server error change to metric
            //If API fails, alert.
        }).fail(function(data, status) {
            alert("Failed to load:" + status);
           //========= For above if I use .ajax for example it will not load properly
        }).done(function(data) {
            //for each loop for API data and organizes it in an HTML column
            data.list.forEach(function (data, index ,array) {
                outputString += ("<div class='weatherBlock'>");
                outputString += ("<div class='boxBanner'></div>");
                outputString += ("<div class='temps space'>" + parseInt(data.temp.min) + "°/" + parseInt(data.temp.max) + "°</div>");
                outputString += ("<div class='space'><img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></div>");
                outputString += ("<div class='space'>" + "<span class='bold'>" + data.weather[0].main + "</span> " + ": " + data.weather[0].description + "</div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Humidity: </span>" + data.humidity + "%</div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Wind: </span>" + data.speed + "mph </div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Pressure: </span>" + data.pressure + "</div>");
                outputString += ("</div>");
                //Output above
                output.html(outputString);

            });
            //assigning Today, tomorrow and next two days for box banners
            // exercise asks for 5 day forecast
            // why not do the entire week?
            for (i = 0; i < 3; i++) {
                if (i === 0) {
                    document.getElementsByClassName("boxBanner")[i].innerHTML = "Today";
                }else if (i === 1) {
                    document.getElementsByClassName("boxBanner")[i].innerHTML = "Tomorrow";
                }else if (i === 2) {
                    document.getElementsByClassName("boxBanner")[i].innerHTML = "Next Two Days";
                }
            }
        });
    };


    //=========Setting up map API options
    var mapOptions = {
        // Set the zoom level
        zoom: 4,
        // This sets the center of the map at our location
        center: {
            lat:  40.15555,
            lng: -98.489602
        }
    };


    // Setting up map variables

    var mapBox = new google.maps.Map(map, mapOptions);
    var geocoder = new google.maps.Geocoder();
    var myLatlng = new google.maps.LatLng(40.15555,-98.489602);
    var lat = myLatlng.lat();
    var long = myLatlng.lng();
    var newLatLong = "";
    //first lat/long run:
    latLong.html("Lat: " + parseFloat(lat).toFixed(2) + "," + " Long: " + parseFloat(long).toFixed(2));
    //Draggable marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: mapBox,
        draggable:true,
        title:"What a drag!"

    });


    //Updates lot/long based on dragged marker location
    //if under codeAddress function it will duplicate when marker is dragged

    marker.addListener('mouseup', function() {
        myLatlng = marker.getPosition();
        lat = myLatlng.lat();
        long = myLatlng.lng();
        latLongString = "";
        latLongString += "Lat: "+ parseFloat(lat).toFixed(2) + ", Long: " + parseFloat(long).toFixed(2);
        latLong.html(latLongString);
        latLongString = "";
        outputString = "";
        //Reloads new weather data
        getWeather();
    });




    //should I use geocoder from files???
    //allows user input of address for weather lookup


    function codeAddress() {
        var address = document.getElementById('address').value; //Grabs value in address input
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status === 'OK') {
                mapBox.setCenter(results[0].geometry.location);       //Move map center to location
                marker.setPosition(results[0].geometry.location);    //Move marker to position
                lat = results[0].geometry.location.lat();            //Reset lat to new value
                long = results[0].geometry.location.lng();           //Reset long to new value
                latLongString = "";                                  //Ensure latLong string is empty
                latLongString += "Lat: "+ parseFloat(lat).toFixed(2) + ", Long: " + parseFloat(long).toFixed(2); //Cat lat and long and fix them to lower floats
                latLong.html(latLongString); //output fixed string
                latLongString = "";          //reset lat/long string and output string to ensure we do not get repeats on getWeather() call
                outputString = "";
                //Reloads new weather data
                getWeather();  // Call getWeather and render new weather results
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }


    //Calls codeAddress() on click
    submitButton.click(function() {
        codeAddress();
    });




    //First instance of weather load
    getWeather();

})();
