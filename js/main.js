
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
        center: [-70.898428, 42.52688], //starting location
        zoom: 16 //starting zoom
    
    });
}


// Carousel images of cars

var images=["images/image_01.jpg","images/image_02.jpg"];
var i=0;

function previousImage(){
	if(i<images.length && i>0){
		i--;
		console.log(i);
		$(".services section").css("background","url(" + images[i] + ")");
		
	}else{
		i=1;
		console.log(i);
		$(".services section").css("background","url(" + images[i] + ")");
	}
}
function nextImage(){
	//i = i + 1;

	if(i<images.length-1){
		i++;
		console.log(i);
		$(".services section").css("background","url(" + images[i] + ")");
	}else{
		i=0;
		console.log(i);
		$(".services section").css("background","url(" + images[i] + ")");
	}
}

$(document).ready(function(){
	$(".btn[value='>']").on("click",nextImage);
	$(".btn[value='<']").on("click",previousImage);
});
