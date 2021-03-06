var config = {
    apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
    authDomain: "lasafeparking.firebaseapp.com",
    databaseURL: "https://lasafeparking.firebaseio.com",
    projectId: "lasafeparking",
    storageBucket: "lasafeparking.appspot.com",
    messagingSenderId: "647414711077"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {

    // On click event listener to take to check in form 
    $("#checkInButton").on("click", function () {
        window.location.href = "./check-in-form.html"
    });
    // Firebase reference to child location in database create a snapshot of data stored there
    database.ref("lot123").on("child_added", function (childSnapshot) {

        // create variables to store the value of the snapshot taken from the database
        var license = childSnapshot.val().license_plate_number;
        var checked = childSnapshot.val().checked;
        var firstName = childSnapshot.val().first_name;
        var lastName = childSnapshot.val().last_name;

        // If statement to check if user is logged in...if yes, then run the newUser function (seen below)
        if (checked === "Yes") {
            var full = firstName + " " + lastName
            newUser(full, license)
        };
    });

    // newUser function to dynamically create div to display drivers name and license number
    var newUser = function (driverName, DL) {

        var container = $(`<div class="container" id="newDriver">
        <div class="row" id="userRow">
            <!-- Status dot -->
            <div class="col-1"> <span class="dotG"></span></div>
            <!-- Column for table text -->
            <div class="col-11">
                <!-- Row for name text -->
                <div class="row">
                    <div class="col-12" id="tableName">${driverName}</div>
                </div>
                <!-- Row for DL and time text -->
                <div class="row" style="position: relative;">
                    <div class="col-8" id="tableDL">${DL}</div>

                    <button type="button" class="btn btn-primary" id="checkOutButton" name= ${DL}
                        style="position: absolute" ;>Check Out</button>
                </div>
            </div>
        </div>
        <!-- Status line -->
        <div id="statusLine">
            <hr>
        </div>
    </div>`);

        // Append to container to main-menu.html page
        return $('#lot').append(container);

    };

    // On click event listener when user clicks check out button takes user to check-out-profile.html...have to target #lot since it is the parent div that the check out button has been dynamically added to. 
    $("#lot").on("click", '#checkOutButton', function () {
        var checkoutLicensePlate = $(this).attr('name');
        console.log(checkoutLicensePlate);
        localStorage.setItem('checkoutLicensePlate', checkoutLicensePlate);
        window.location.href = "./check-out-profile.html";

    });

    // On click event listener to log out user and return to login page. 
    $("#logout").on("click", function logout() {
        firebase.auth().signOut();
        window.location.href = "./login.html"
        localStorage.clear();
    });

});








