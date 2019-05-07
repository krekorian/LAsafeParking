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

        ref.on("child_added", function (childSnapshot) {
            var ref = firebase.database().ref("lot123");
            var license = childSnapshot.val().license_plate_number;
            var checked = childSnapshot.val().checked

            console.log(license, checked);

            if (checked === yes) {

            }
        });

    });











    $("#logout").on("click", function logout() {
        firebase.auth().signOut();
        window.location.href = "./login.html"
    });

});








