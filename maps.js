$(document).ready(function () {
    //your code here
    var startadd = ['<option value="aldama, los angeles, ca">Aldama</option>',
        '<option>Select Lot</option>',
        '<option value="ucla los angeles, ca">Los Angeles</option>',
        '<option value="100 Universal City Plaza, Universal City, CA 91608">Studio City</option>',
        '<option value="200 Santa Monica Pier, Santa Monica, CA 90401">Santa Monica</option>',
        '<option value="6925 Hollywood Blvd, Hollywood, CA 90028">Hollywood</option>',
        '<option value="3835 Cross Creek Rd, Malibu, CA 90265">Malibu</option>',
        '<option value="231 S Grevillea Ave, Inglewood, CA 90301">Inglewood</option>',
        '<option value="7850 Melrose Ave, Los Angeles, CA 90046">Fairfax</option>'
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

    //for end selection
    var endadd = ['<option>Select Lot</option>',
        '<option value="ucla los angeles, ca">Los Angeles</option>',
        '<option value="100 Universal City Plaza, Universal City, CA 91608">Studio City</option>',
        '<option value="200 Santa Monica Pier, Santa Monica, CA 90401">Santa Monica</option>',
        ' <option value="6925 Hollywood Blvd, Hollywood, CA 90028">Hollywood</option>',
        '<option value="3835 Cross Creek Rd, Malibu, CA 90265">Malibu</option>',
        '<option value="231 S Grevillea Ave, Inglewood, CA 90301">Inglewood</option>',
        '<option value="7850 Melrose Ave, Los Angeles, CA 90046">Fairfax</option>'
    ];
    //loop through topics array to display button in start
    function createEndOptions() {
        //prevent duplicate buttons
        $("#end").empty();
        for (var i = 0; i < endadd.length; i++) {
            //new element for button to be created
            var newEndOption = $(endadd[i]
            );
            //give button id topic 
            newEndOption.attr("id", "topic");
            //newOption.attr("value", startadd.address);
            //newOption.text(startadd.text);
            $("#end").append(newEndOption);
        }
    }
    createEndOptions();
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
