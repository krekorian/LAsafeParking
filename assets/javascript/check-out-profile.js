var lotNumber = localStorage.getItem('lotNumber');
var licensePlateNumber = localStorage.getItem('checkoutLicensePlate');
$(document).ready(function () {
    var storageRef = firebase.storage();


    storageRef.ref('plateImages/' + lotNumber + '/' + licensePlateNumber + '.jpg').getDownloadURL().then(function (url) {


        // Or inserted into an <img> element:
        $('#plateImageUpload').html('<img id="imageUpload" src=' + url + ' />');
    }).catch(function (error) {
        // Handle any errors
    });




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

$("#checkOutBtn").on("click", function () {
    var date = new Date();
    var time = new Date().toLocaleTimeString();
    var date = new Date().toLocaleDateString();

    var updates = {};

    updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'checked'] = "N/A";
    updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Time'] = time;
    updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Date'] = date;
    firebase.database().ref().update(updates);
    window.location.href = "./check-out-confirm.html";
});