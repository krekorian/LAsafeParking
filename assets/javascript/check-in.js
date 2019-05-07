$(document).ready(function () {
    //     // console.log(dataRef);
    //     var ref = firebase.database().ref("lot123");
    //     // console.log(ref);
    //     var check_license = "7EFZ117";
    //     var ischecked = false;
    //     ref.once("value")
    //         .then(function (snapshot) {
    //             var name = snapshot.child("7EFZ117").val();
    //             var firstName = snapshot.child("7EFZ117/checked").val();
    //             // ref.orderByKey().limitToFirst(1).once('value', function (snap) {
    //             //     var v = snap.val();
    //             //     console.log(v.constructor.name); // first item, in format {"<KEY>": "<VALUE>"}

    //             // });

    //             //console.log(firstName);
    //             var vrk = check_IfTHere();
    //             // console.log(vrk);

    //             // var newPostKey = firebase.database().ref().child('lot123/8XYD701').push().key;
    //             // console.log(newPostKey);
    //             var updates = {};

    //             updates['/lot123/7EFZ117/last_name'] = "Rachel";
    //             firebase.database().ref().update(updates);
    //             // var name1 = snapshot.child("8XYD701");
    //             // firebase.database().ref("lot123").child("8XYD701").push({
    //             //     check_status: "Yes"

    //             // });

    //         });
    //     // ref.orderByChild("last_name").equalTo("carmel").on("child_added", function (snapshot) {
    //     //     console.log(snapshot);
    //     // });
    //var date = new Date();
    // var time = new Date().toLocaleTimeString();
    // var date = new Date().toLocaleDateString();
    // console.log(time);
    // //console.log(d);
    // console.log(date);
    // //console.log(date.getDate().toString(), date.getMonth().toString(), date.getFullYear().toString(), date.getHours().toString());


    // var ref = firebase.database().ref(lotNumber);
    // // console.log(ref);
    // var check_license = "7EFZ117";
    // var ischecked = false;
    // ref.once("value")
    //     .then(function (snapshot) {


    //         var updates = {};

    //         updates['/lot123/7EFZ117/' + 'checked'] = "Yes";
    //         updates['/lot123/7EFZ117/' + 'Time'] = time;
    //         updates['/lot123/7EFZ117/' + 'Date'] = date;
    //         firebase.database().ref().update(updates);
    //         // window.location.href = "./verfied.html";

    //     });
});

var lotNumber;
var licensePlateNumber;
var firstName;
var lastName;

function check_IfTHere(check_license) {
    var ref = firebase.database().ref("lot123");
    var ischecked
    ref.on("child_added", function (childSnapshot) {
        var license = childSnapshot.val().license_plate_number;
        var checked = childSnapshot.val().checked
        if (license === check_license) {
            ischecked = true;
            // console.log(ischecked);
        }
        console.log(license, checked);
    });
    // console.log(ischecked);
    return ischecked;

}


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


            var updates = {};

            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'checked'] = "Yes";
            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Time'] = time;
            updates['/' + lotNumber + '/' + licensePlateNumber + '/' + 'Date'] = date;
            firebase.database().ref().update(updates);
            window.location.href = "./verfied.html";

        });

});











