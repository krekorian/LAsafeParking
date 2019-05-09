var lotNumber = localStorage.getItem('lotNumber');
var licensePlateNumber = localStorage.getItem('checkoutLicensePlate');

$(document).ready(function () {

    return firebase.database().ref('/' + lotNumber + '/' + licensePlateNumber).once('value').then(function (snapshot) {
        console.log(snapshot.val().license_plate_number);
        $("#name").text(snapshot.val().first_name + " " + snapshot.val().last_name);
        $("#driverId").text(snapshot.val().SafeStayID);


    });









});