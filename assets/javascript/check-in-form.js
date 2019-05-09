var lotNumber = localStorage.getItem('lotNumber');

$(document).ready(function () {
    //Click event for the button
    $(document).on('change', '.btn-file :file', function () {
        console.log("this function runs");

        //Variable that holds the image value
        var input = $(this),

            //Regex — way to search through strings to easily find something/ pattern of symbols to search through strings
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        console.log(label);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {
        console.log("file select runs");

        //Return all ancestor elements of the input group
        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        console.log(input, label);

        //Logging the information
        if (input.length) {
            input.val(log);

            console.log(input);
        }
    });

    //Function that says if these two inputs are true then execute
    function readURL(input) {
        console.log(input);
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            //File name, to store name of file later
            console.log(input.files[0]);

            reader.onloadend = function (e) {
                console.log(e.target.result)
                $('#img-upload').attr('src', e.target.result);

                var blob = dataURLtoBlob(e.target.result);

                uploadFile(blob, input.files[0].name);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    //changeing data URL to a blob
    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    //Changes the input fields
    $("#imgInp").change(function () {
        readURL(this);
    });


    function uploadFile(input, name) {

        console.log(input);

        var storageRef = firebase.storage().ref('/plateImages' + '/' + lotNumber + '/' + name);

        var uploadTask = storageRef.put(input);
    }

    // On click event listener for logout button to take you back to login page. 
    $("#logout").on("click", function logout() {
        firebase.auth().signOut();
        window.location.href = "./login.html"
    });

});