//Once login Button added
//use this code to hide login page, and display next available container
//$("button").click(function(){
//    $("p").hide();
//});
//Initialize Communication with Back-end Services
var platform = new H.service.Platform({
    'app_id': '{rRSwffLhH5bN7VhtEp6F}',
    'app_code': '{Lt6LDvpaaNEjVVpm51M88Q}'
});
// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('map'),
    defaultLayers.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });
console.log(map);
$(".container").hide();
$("#logIn").show();