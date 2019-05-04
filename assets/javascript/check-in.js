
$(document).ready(function () {
    // console.log(dataRef);
    var ref = firebase.database().ref("lot123");
    // console.log(ref);
    var check_license = "7EFZ117";
    var ischecked = false;
    ref.once("value")
        .then(function (snapshot) {
            var name = snapshot.child("7EFZ117").val();
            var firstName = snapshot.child("7EFZ117/first_name").val();
            // ref.orderByKey().limitToFirst(1).once('value', function (snap) {
            //     var v = snap.val();
            //     console.log(v.constructor.name); // first item, in format {"<KEY>": "<VALUE>"}

            // });
            var vrk = check_IfTHere(check_license);
            console.log(vrk);

            // var newPostKey = firebase.database().ref().child('lot123/8XYD701').push().key;
            // console.log(newPostKey);
            var updates = {};
            // var postData = {
            //     checked: "Yes"
            // };
            updates['/lot123/7EFZ117/checked'] = "No";
            firebase.database().ref().update(updates);
            // var name1 = snapshot.child("8XYD701");
            // firebase.database().ref("lot123").child("8XYD701").push({
            //     check_status: "Yes"

            // });

        });
    // ref.orderByChild("last_name").equalTo("carmel").on("child_added", function (snapshot) {
    //     console.log(snapshot);
    // });


});

function check_IfTHere(check_license) {
    var ref = firebase.database().ref("lot123");
    var ischecked
    ref.on("child_added", function (childSnapshot) {
        var license = childSnapshot.val().license_plate_number;
        if (license === check_license) {
            ischecked = true;
            console.log(ischecked);
        }

    });
    console.log(ischecked);
    return ischecked;
}


$("#formButton").on("click", function (event) {
    event.preventDefault();


});







