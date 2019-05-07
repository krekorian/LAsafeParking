var config = {
    apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
    authDomain: "lasafeparking.firebaseapp.com",
    databaseURL: "https://lasafeparking.firebaseio.com",
    projectId: "lasafeparking",
    storageBucket: "lasafeparking.appspot.com",
    messagingSenderId: "647414711077"
};
firebase.initializeApp(config);

$(document).ready(function () {

    var local_date = new Date();
    console.log(local_date.toString());
    var ref = firebase.database().ref('/' + lotNumber + '/' + licensePlateNumber);
    return firebase.database().ref('/' + lotNumber + '/' + licensePlateNumber).once('value').then(function (snapshot) {
        $("#name").text(snapshot.first_name + " " + snapshot.first_name);
        $("#dlAnswer").text(snapshot.license_plate_number);
        $("#makeAnswer").text(snapshot.car_make);
        $("#modelAnswer").text(snapshot.car_model);
        $("#dateAnswer").text(snapshot.Date);
        $("#timeAnswer").text(snapshot.Time);
        $("#driverId").text(snapshot.SafeStayID);


    });









});