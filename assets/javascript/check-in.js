$(document).ready(function () {

});

var lotNumber;
var licensePlateNumber;
var firstName;
var lastName;

// function check_IfTHere(check_license) {
//     var ref = firebase.database().ref("lot123");
//     var ischecked
//     ref.on("child_added", function (childSnapshot) {
//         var license = childSnapshot.val().license_plate_number;
//         var checked = childSnapshot.val().checked
//         if (license === check_license) {
//             ischecked = true;
//             // console.log(ischecked);
//         }
//         console.log(license, checked);
//     });
//     // console.log(ischecked);
//     return ischecked;

// }

var date = new Date();
var time = new Date().toLocaleTimeString();
var date = new Date().toLocaleDateString();
$("#formButton").on("click", function (event) {
    event.preventDefault();
    firstName = $("#firstNameInput").val().trim();
    lastName = $("#lastNameInput").val().trim();
    licensePlateNumber = $("#plateInput").val();

    var ref = firebase.database().ref(lotNumber);
    // console.log(ref);
    var check_license = "7EFZ117";
    var ischecked = false;
    ref.once("value")
        .then(function (snapshot) {
            var date = new Date();
            var time = new Date().toLocaleTimeString();
            var date = new Date().toLocaleDateString();

            var updates = {};

            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'checked'] = "Yes";
            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Time'] = time;
            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Date'] = date;
            firebase.database().ref().update(updates);
            window.location.href = "./verified.html";

        });

});











