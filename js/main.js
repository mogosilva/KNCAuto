//Code for MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoibW9nb3NpbHZhIiwiYSI6ImNpanJrOHQxZjBicml1NG01eHRuYTJ2d3oifQ.KUmx-Iy2D73MnUkYFrXw3Q';

//Check to see if MapBox is subborted or user's device
if (!mapboxgl.supported()) {
    
    alert('Your browser does not support Mapbox GL');
} 
else {
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
        center: [-74.50, 40], //starting location
        zoom: 9 //starting zoom
    
    });
}