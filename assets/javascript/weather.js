var APIKey = "5162b18d07ba2ad18cbd38763d6cb7a0";
var zip_code = 90245;
var timer;
timer = setInterval(timeIt, 10000);
// Here we are building the URL we need to query the database

$(document).ready(function () {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip_code +
        ",us&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            console.log(response);
            console.log(queryURL);


            $("#temp").text("Temperature For ZIP Code" + " " + zip_code + " : " + response.main.temp + "°" + "F");


        });
});
function timeIt() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip_code +
        ",us&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
            console.log(response);
            console.log(queryURL);


            $("#temp").text("Temperature For ZIP Code" + " " + zip_code + " : " + response.main.temp + "°" + "F");


        });


};

