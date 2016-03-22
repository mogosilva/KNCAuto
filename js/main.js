var images=["images/image_01.jpg","images/image_02.jpg"];
var i=0;
var heroImage=$("#hero section");
var counter=5000;
var autoFlip = window.setInterval(nextImage, 5000);

function resetAutoFlip(){

	clearInterval(autoFlip);
	autoFlip = window.setInterval(nextImage, 5000);

}

function previousImage(){
	
	resetAutoFlip();

	if(i<images.length && i>0){
		i--;
	}else{
		i=1;
	}
	heroImage.css("background","url(" + images[i] + ")");
	heroImage.css("background-size","cover");
}
function nextImage(){

	resetAutoFlip()

	if(i<images.length-1){
		i++;
	}else{
		i=0;
	}
		heroImage.css("background","url(" + images[i] + ")");
		heroImage.css("background-size","cover");
}






$(document).ready(function(){
	$("img[value='>']").on("click",nextImage);
	$("img[value='<']").on("click",previousImage);

	$(".rightArrow").hover(function(){
		$(".rightArrow").toggleClass("hidden");
	});

	$(".leftArrow").hover(function(){
		$(".leftArrow").toggleClass("hidden");
	});

	$("#dealsLink").on("click",function(e){
		 e.preventDefault();
		$("body,html").animate({
			scrollTop: $("#deals").offset().top - 100
		},1000);
		
	});

	$("#servicesLink").on("click",function(e){
		 e.preventDefault();
		$("body,html").animate({
			scrollTop: $("#services").offset().top - 130
		},1000);
		
	});

	$("#reviewsLink").on("click",function(e){
		 e.preventDefault();
		$("body,html").animate({
			scrollTop: $("#reviews").offset().top - 98
		},1000);
		
	});

	$("#locationLink").on("click",function(e){
		 e.preventDefault();
		$("body,html").animate({
			scrollTop: $("#contact").offset().top - 98
		},1000);
		
	});

	$("#studentId").mouseenter(function(){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass("animated swing").one(animationEnd, function() {
			$(this).removeClass("animated swing");
		});
	});

	$(window).scroll(function () {
		var animFade="animated fadeIn";
		var animSlideLeft ="slideInLeft";
		var animSlideRight = "slideInRight";
		var animFadeDown= "fadeInDown";

		var pageLocation = ($(window).scrollTop() + $(window).height());

   		if (pageLocation > $('#google').offset().top - 50) {
        	$("#google").addClass(animFade);
    	}
    	if (pageLocation > $('#angie').offset().top - 50) {
        	$("#angie").addClass(animFade);
    	}
    	if (pageLocation > $('#yellowPages').offset().top - 50) {
       		$("#yellowPages").addClass(animFade);
    	}
    	if (pageLocation > $('#yelp').offset().top - 50) {
        	$("#yelp").addClass(animFade);
    	}
    	if (pageLocation > $('#spiesHecker').offset().top) {
    		$("#spiesHecker").addClass(animSlideLeft);
    		$("#spiesHeckerInfo").addClass("slideInRight");
    	}
    	if (pageLocation > $('#carServices').offset().top) {
    		$("#carServices").addClass(animSlideLeft);
    		$("#carServicesInfo").addClass("slideInRight");
    	}
    	if (pageLocation > $('#gearsServices').offset().top) {
    		$("#gearsServices").addClass(animSlideLeft);
    		$("#gearsServicesInfo").addClass("slideInRight");
    	}
		if (pageLocation > $("#jobs").offset().top) {
        	$(".subcategory ul").addClass(animFadeDown);
    	}
    });


		$("#menu").on("click", function(){
			$("#dealsLink, #servicesLink, #reviewsLink, #locationLink").toggleClass("visible");
		});
		

}); //End of document.ready


/*************************GOOGLE MAPS API**********************************/

var map;
	function initMap() {
    	var kAndC={lat: 42.526927, lng: -70.898420};

        map = new google.maps.Map(document.getElementById('map'), {
          center: kAndC,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
        });

		var infowindow = new google.maps.InfoWindow();
		var service = new google.maps.places.PlacesService(map);

		service.getDetails({
			placeId: 'ChIJUfy2B3EU44kRXWCSXwZWwGs'
		  	}, function(place, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				var marker = new google.maps.Marker({
				map: map,
				position: place.geometry.location
				});
				google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
				place.formatted_address + '</div>');
				infowindow.open(map, this);
				});
		    }
		  });
    }


