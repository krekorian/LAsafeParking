// var config = {
//     apiKey: "AIzaSyCL-ojfz_0NOd_iH9B0oIcjoQUA1BsKh8Y",
//     authDomain: "lasafeparking.firebaseapp.com",
//     databaseURL: "https://lasafeparking.firebaseio.com",
//     projectId: "lasafeparking",
//     storageBucket: "lasafeparking.appspot.com",
//     messagingSenderId: "647414711077"
// };
// firebase.initializeApp(config);
// var dataRef = firebase.database();

//Run this function after page has fully loaded
$(document).ready( function() {
    //Click event for the button
    $(document).on('change', '.btn-file :file', function() {
        console.log("this function runs");
        //Variable that holds the image value
        //Value of whatever is contianed inside of the btn-file
        var input = $(this),
        //Replace a part of a string
        //Go to .btn-file
        //Within it is an input type file
        //When it changes we are going to run this function
        //Value of the object
        //Replace whatever matches and replace it with /, etc
        //Regex — way to search through strings to easily find something/ pattern of symbols to search through strings
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        console.log(label);
    //Triggers event and default behavior
    //Triggering event of next function
    //Can pass in label parameter
    // input.trigger('fileselect', [label]);
    });

    //Click event listener for the file selected and label
    $('.btn-file :file').on('fileselect', function(event, label) {
        console.log("file select runs");
        //Variable that holds the image value
        //Return all ancestor elements of the input group
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        console.log(input, label);
        
        //Logging the information
        if( input.length ) {
            input.val(log);
            // uploadFile (input);
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
                console.log (e.target.result)
                $('#img-upload').attr('src', e.target.result);

                // var blob = new Blob([e.target.result], { type: "image/jpeg" });

                var blob = dataURLtoBlob(e.target.result);

                uploadFile(blob, input.files[0].name);
                
            }
            
            reader.readAsDataURL(input.files[0]);


        }
    }

    //changeing to blob
    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }

    //Changes the input fields
    $("#imgInp").change(function(){
        readURL(this);
    }); 
    
    
    function uploadFile(input, name) {

        console.log (input);


        //Root reference + Reference to image
        // var storageRef = firebase.storage().ref('/plateImages/' + name);
        var storageRef = firebase.storage().ref('/plateImages' +'/lot123/'+ name);

        var uploadTask = storageRef.put(input);

        // uploadTask.on('state_changed', function(snapshot){
        // //unsuccessful uploads
        // }, function(error){
        // //successful uploads
        // }, function() {
        //     var downloadURL = uploadTask.snapshot.downloadURL;
        //     console.log(downloadURL);
        // });
    }
        



    
});