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

    $("#checkInButton").on("click", function () {
        window.location.href = "./check-in-form.html"
    })

    database.ref("lot123").on("child_added", function (childSnapshot) {
        //console.log(childSnapshot);

        var snapshot = childSnapshot.val();
        //console.log(snapshot);


        var license = childSnapshot.val().license_plate_number;
        var checked = childSnapshot.val().checked;
        var firstName = childSnapshot.val().first_name;
        var lastName = childSnapshot.val().last_name;

        if (checked === "Yes") {
            console.log(firstName);
            console.log(lastName);
            console.log(license);

            $("#tableName").text(firstName + " " + lastName);
            $("#tableDL").text(license);
        };



    });











    $("#logout").on("click", function logout() {
        firebase.auth().signOut();
        window.location.href = "./login.html"
    });

});








