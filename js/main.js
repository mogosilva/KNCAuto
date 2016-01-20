var mapOptions = {
    center: new google.maps.LatLng(42.526909, -70.898427),
    minZoom: 10,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(42.526909, -70.898427)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);
