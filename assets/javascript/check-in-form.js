//Run this function after page has fully loaded
$(document).ready( function() {
    //Click event for the button
    $(document).on('change', '.btn-file :file', function() {
        //Variable that holds the image value
        var input = $(this),
        //Replace a part of a string
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    //Triggers event and default behavior
    input.trigger('fileselect', [label]);
    });

    //Click event listener for the file selected and label
    $('.btn-file :file').on('fileselect', function(event, label) {
        //Variable that holds the image value
        //Return all ancestor elements of the input group
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        //Logging the information
        if( input.length ) {
            input.val(log);
        }     
    });

    //Function that says if these two inputs are true then execute
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    //Changes the input fields
    $("#imgInp").change(function(){
        readURL(this);
    }); 	
});