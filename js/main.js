var images=["images/image_01.jpg","images/image_02.jpg"];
var i=0;

function previousImage(){
	if(i<images.length && i>0){
		i--;
		console.log(i);
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
		
	}else{
		i=1;
		console.log(i);
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
	}
}
function nextImage(){
	//i = i + 1;

	if(i<images.length-1){
		i++;
		console.log(i);
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
	}else{
		i=0;
		console.log(i);
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
	}
}

$(document).ready(function(){
	$(".btn[value='>']").on("click",nextImage);
	$(".btn[value='<']").on("click",previousImage);

	$("#dealsLink").on("click",function(e){
		 e.preventDefault();
		$("body").animate({
			scrollTop: $(".deals").offset().top - 100
		},1000);
		
	});

	$("#servicesLink").on("click",function(e){
		 e.preventDefault();
		$("body").animate({
			scrollTop: $(".services").offset().top - 98
		},1000);
		
	});

	$("#reviewsLink").on("click",function(e){
		 e.preventDefault();
		$("body").animate({
			scrollTop: $(".reviews").offset().top - 98
		},1000);
		
	});

	$("#locationLink").on("click",function(e){
		 e.preventDefault();
		$("body").animate({
			scrollTop: $("#contact").offset().top - 98
		},1000);
		
	});

	window.setInterval(function(){
  		 nextImage();
	}, 5000);

	$(window).scroll(function () {
		var pageLocation = $(window).scrollTop() + $(window).height();
		var animFade="animated fadeIn";
		var animSlideLeft ="animated slideInLeft";
		var animSlideRight = "animated slideInRight";

   		if (pageLocation > $('#google').offset().top) {
        	$("#google").addClass(animFade);
    	}
    	if (pageLocation > $('#angie').offset().top) {
        	$("#angie").addClass(animFade);
    	}
    	if (pageLocation > $('#yellowPages').offset().top) {
       		$("#yellowPages").addClass(animFade);
    	}
    	if (pageLocation > $('#yelp').offset().top) {
        	$("#yelp").addClass(animFade);
    	}
    	if (pageLocation > $('#spiesHecker').offset().top) {
    		$("#spiesHecker").addClass(animSlideLeft);
    		$("#spiesHeckerInfo").addClass(animSlideRight);
    	}
    	if (pageLocation > $('#carServices').offset().top) {
    		$("#carServices").addClass(animSlideLeft);
    		$("#carServicesInfo").addClass(animSlideRight);
    	}
    	if (pageLocation > $('#gearsServices').offset().top) {
    		$("#gearsServices").addClass(animSlideLeft);
    		$("#gearsServicesInfo").addClass(animSlideRight);
    	}
	});



	//Code for MapBox
	L.mapbox.accessToken = 'pk.eyJ1IjoibW9nb3NpbHZhIiwiYSI6ImNpanJrOHQxZjBicml1NG01eHRuYTJ2d3oifQ.KUmx-Iy2D73MnUkYFrXw3Q';

	//Creates Map
	var map = new L.mapbox.map('map', 'mapbox.streets', {
	}).setView([42.52688, -70.898428], 17);

	L.mapbox.featureLayer({
    	// this feature is in the GeoJSON format: see geojson.org
    	// for the full specification
    	type: 'Feature',
    	geometry: {
     	   type: 'Point',
     	   // coordinates here are in longitude, latitude order because
      	  // x, y is the standard for GeoJSON and many formats
      	  coordinates: [-70.898428, 42.52688]
   		},
   	 	properties: {
        	title: "K&C's Auto Body",
        	description: "17 Franklin St. Salem, MA, 01970",
        	// one can customize markers by adding simplestyle properties
        	// https://www.mapbox.com/guides/an-open-platform/#simplestyle
        	'marker-size': 'large',
        	'marker-color': '#2c4eba',
        	'marker-symbol': 'car'
    	}
	}).addTo(map);

	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.keyboard.disable();

});
