$(document).ready(function () {
    //your code here
    var startadd = ['<option value="aldama, los angeles, ca">Aldama</option>',
        '<option value="ucla los angeles, ca">UCLA</option>',
        '<option value="franklin high school los angeles, ca">franklin</option>'
    ];
    //loop through topics array to display button in start
    function createOptions() {
        //prevent duplicate buttons
        $("#start").empty();
        for (var i = 0; i < startadd.length; i++) {
            //new element for button to be created
            var newOption = $(startadd[i]
            );
            //give button id topic 
            newOption.attr("id", "topic");
            //newOption.attr("value", startadd.address);
            //newOption.text(startadd.text);
            $("#start").append(newOption);
        }
    }
    createOptions();
});

function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 34.052235, lng: -118.2437 }
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler, { passive: true });
    document.getElementById('end').addEventListener('change', onChangeHandler, { passive: true });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
