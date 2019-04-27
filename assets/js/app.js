//Once login Button added
//use this code to hide login page, and display next available container
//$("button").click(function(){
//    $("p").hide();
//});
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
console.log(map);