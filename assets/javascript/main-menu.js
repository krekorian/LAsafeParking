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

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot);
    });







    // function checkin() {
    //     $("#checkInButton").on("click", function () {
    //         window.location.href = "./check-in-form.html";
    //     });
    // };




});

//below code for checkout

$("#<button id>").on("click", function () {
    //  *************************
    //  *************************
    // get car name using button attribute
    //  *************************
    //  *************************

    var ref = firebase.database().ref("lot123"); // replace "lot123" with a variable that is grabbed when log in

    var check_license = $(this).attr("name");  //this attribute should match the attribute on the button, you can user
    // calculater in class activity as a reference

    //updating firebase database
    ref.once("value")
        .then(function (snapshot) {
            var updates = {};

            updates['/lot123/7EFZ117/checked'] = "no";
            firebase.database().ref().update(updates);

        });
});

// use below to popuplate cars that checked in
var ref = firebase.database().ref("lot123");  // replace "lot123" with a variable that is grabbed when log in
var ischecked
ref.on("child_added", function (childSnapshot) {
    var license = childSnapshot.val().license_plate_number;
    var checked = childSnapshot.val().checked

    console.log(license, checked);
});








