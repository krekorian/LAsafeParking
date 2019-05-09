// var config = {
//     apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
//     authDomain: "lasafeparking.firebaseapp.com",
//     databaseURL: "https://lasafeparking.firebaseio.com",
//     projectId: "lasafeparking",
//     storageBucket: "lasafeparking.appspot.com",
//     messagingSenderId: "647414711077"
// };
// firebase.initializeApp(config);
var licensePlateNumber = localStorage.getItem('licensePlateNumber');
var lotNumber = localStorage.getItem('lotNumber');
//console.log(licensePlateNumber);
$(document).ready(function () {
    //  console.log(licensePlateNumber);
    var local_date = new Date();
    //  console.log(local_date.toString());
    var ref = firebase.database().ref('/' + lotNumber + '/' + licensePlateNumber);
    return firebase.database().ref('/' + lotNumber + '/' + licensePlateNumber).once('value').then(function (snapshot) {
        console.log(snapshot.val().license_plate_number);
        $("#name").text(snapshot.val().first_name + " " + snapshot.val().last_name);
        $("#plateAnswer").text(snapshot.val().license_plate_number);
        $("#makeAnswer").html(snapshot.val().car_make);

        $("#modelAnswer").text(snapshot.val().car_model);
        $("#dateAnswer").text(snapshot.val().Date);
        $("#timeAnswer").text(snapshot.val().Time);
        $("#driverId").text(snapshot.val().SafeStayID);

    });

});

$("#ex").on("click", function () {
    storage.removeItem('licensePlateNumber');
});