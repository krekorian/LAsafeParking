var lotNumber = localStorage.getItem('lotNumber');
var licensePlateNumber = localStorage.getItem('checkoutLicensePlate');
$(document).ready(function () {

    // On click event...user clicks on check out button and is re-routed to check-out-confirm.html
    $("#checkOutBtn").on("click", function () {
        window.location.href = "./check-out-confirm.html";
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

    // On click event listener for logout button to take you back to login page.
    $("#logout").on("click", function logout() {
        firebase.auth().signOut();
        window.location.href = "./login.html"
    });

});