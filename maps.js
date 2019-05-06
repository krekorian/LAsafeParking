$(document).ready(function () {
    var panelDiv = $("<div>");
    panelDiv.attr("id", "floating-panel");
    var i = $("<strong>Start:</strong>");
    var m = $("<select id='start'>");
    var g = $("<br>");
    var a = $("<strong>End:</strong>");
    var y = $("<select id='end'>");
    panelDiv.append(i);
    panelDiv.append(m);
    panelDiv.append(g);
    panelDiv.append(a);
    panelDiv.append(y);
    var mapDiv = $("<div id='map'>");
    var rightDiv = $("<div id='right-panel'>");
    $(".container").after(rightDiv);
    $(".container").after(mapDiv);
    $(".container").after(panelDiv);
    //your code here
    //easy way "<option value="addres">TEXT</option>"
    var startAdd = [
        {
            address: "",
            text: "Select Lot"
        },
        {
            address: "ucla los angeles, ca ",
            text: "UCLA"
        },
        {
            address: "100 Universal City Plaza, Universal City, CA 91608",
            text: "Studio City"
        },
        {
            address: "200 Santa Monica Pier, Santa Monica, CA 90401",
            text: "Santa Monica"
        },
        {
            address: "6925 Hollywood Blvd, Hollywood, CA 90028",
            text: "Hollywood"
        },
        {
            address: "3835 Cross Creek Rd, Malibu, CA 90265",
            text: "Malibu"
        },
        {
            address: "231 S Grevillea Ave, Inglewood, CA 90301",
            text: "Inglewood"
        },
        {
            address: "7850 Melrose Ave, Los Angeles, CA 90046",
            text: "Fairfax"
        }
    ];

    function createOptions() {
        $("#start").empty();
        //create array to hold start <option> tags
        var newOptions = [];
        for (var i = 0; i < startAdd.length; i++) {
            var newOption = $('<option>');
            newOption.attr("value", startAdd[i].address); // add [i] here to index element
            newOption.text(startAdd[i].text); // add [i] here to index element
            newOptions.push(newOption); // add new option to the array
        }
        //appending=expensive, keep array of elements and then use .html to add array to <select>
        $("#start").html(newOptions); // once loop is complete, add the array of elements to the DOM

    }
    createOptions();

    //for end selection
    function createEndOptions() {
        $("#end").empty();
        //create array to hold start <option> tags
        var newOptions = [];
        for (var i = 0; i < startAdd.length; i++) {
            var newOption = $('<option>');
            newOption.attr("value", startAdd[i].address); // add [i] here to index element
            newOption.text(startAdd[i].text); // add [i] here to index element
            newOptions.push(newOption); // add new option to the array
        }
        //appending=expensive, keep array of elements and then use .html to add array to <select>
        $("#end").html(newOptions); // once loop is complete, add the array of elements to the DOM

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
    // [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive.
    //fixed violation by making onChangeHandler { passive: true }
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
