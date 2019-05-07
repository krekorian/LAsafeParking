
//Must have added src incorrect will not load once i add into document load function
//will keep outside until I figure it out 
//adding maps js
function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 34.052235, lng: -118.2437 }
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
//will load code on page load \
$(document).ready(function () {
    //login js
    $("#login").on("click", function login() {

        // prevents default form 
        event.preventDefault();

        // create variables to store the userId and userPass values 
        var userLogin = $("#userId").val() + '@gmail.com';
        var userPassword = $("#userPass").val();

        console.log(userLogin);
        console.log(userPassword);

        alert("youre logged in");

        // error code to be returned if login not successful
        firebase.auth().signInWithEmailAndPassword(userLogin, userPassword).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert("Error:" + errorMessage);
        });

    })
    //add new page js here
});