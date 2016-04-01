
var i=0;
var counter=5000;
var offsetAmount=0;
var imageDivs=$(".repairsGallery");

// var autoFlip = window.setInterval(nextImage, 5000);
// function resetAutoFlip(){

// 	clearInterval(autoFlip);
// 	autoFlip = window.setInterval(nextImage, 5000);

// }


function hideCurrentImage (){
	$(imageDivs[i]).css("opacity","0");
}
function previousImage(){
	
	// resetAutoFlip();
	$(imageDivs[i]).removeClass("visible").children().removeClass("visible");
	if(i<imageDivs.length && i>0){
		i--;
	}else{
		i=imageDivs.length-1;
	}
	$(imageDivs[i]).addClass("visible").children().addClass("visible");
}
function nextImage(){

	// resetAutoFlip()
	$(imageDivs[i]).removeClass("visible").children().removeClass("visible");
	if(i<imageDivs.length-1){
		i++;
	}else{
		i=0;
	}
		$(imageDivs[i]).addClass("visible").children().addClass("visible");
}

function getWidth(){

	var width = $(window).width();
	if(width<=1295 && width >= 1200){

		offsetAmount=100;
	}

	else if(width<=1199 && width >= 993){

		offsetAmount=115;
	}

	else if (width <= 992 && width >= 768){
		offsetAmount=165;
	}
	else if(width <= 767){
		
		offsetAmount=-5;

	}
	else{
		
		offsetAmount=90;
	}

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
		 getWidth();
		$("body,html").animate({
			scrollTop: $("#deals").offset().top - offsetAmount
		},1000);
		
	});

	$("#servicesLink").on("click",function(e){
		 e.preventDefault();
		 getWidth();
		$("body,html").animate({
			scrollTop: $("#services").offset().top - offsetAmount
		},1000);
		
	});

	$("#reviewsLink").on("click",function(e){
		 e.preventDefault();
		 getWidth();
		$("body,html").animate({
			scrollTop: $("#reviews").offset().top - offsetAmount
		},1000);
		
	});

	$("#locationLink").on("click",function(e){
		 e.preventDefault();
		 getWidth();
		$("body,html").animate({
			scrollTop: $("#contact").offset().top - offsetAmount
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
			$("#menu").toggleClass("rotateMenu");
			$("#dealsLink, #servicesLink, #reviewsLink, #locationLink").toggleClass("visible");
		});
		

}); //End of document.ready


/*************************GOOGLE MAPS API**********************************/

var map;

	function initMap() {
    	var kAndC={lat: 42.526927, lng: -70.898420};
    	var isDraggable = $(document).width() > 767 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false


        map = new google.maps.Map(document.getElementById('map'), {
          center: kAndC,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          draggable: isDraggable,
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


