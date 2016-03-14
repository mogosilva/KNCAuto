var images=["images/image_01.jpg","images/image_02.jpg"];
var i=0;

function previousImage(){
	if(i<images.length && i>0){
		i--;
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
		
	}else{
		i=1;
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
	}
}
function nextImage(){
	//i = i + 1;

	if(i<images.length-1){
		i++;
		$(".hero section").css("background","url(" + images[i] + ")");
		$(".hero section").css("background-size","cover");
	}else{
		i=0;
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

	$("#studentId").mouseenter(function(){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass("animated swing").one(animationEnd, function() {
			$(this).removeClass("animated swing");
		});
	});

	$(window).scroll(function () {
		var pageLocation = $(window).scrollTop() + $(window).height();
		var animFade="animated fadeIn";
		var animSlideLeft ="animated slideInLeft";
		var animSlideRight = "animated slideInRight";
		var animFadeDown= "animated fadeInDown";

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
		if (pageLocation > $("#jobs").offset().top) {
        	$(".subcategory ul").addClass(animFadeDown);
    	}
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


