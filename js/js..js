/*<script type="text/javascript">

(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://maps.googleapis.com/maps/api/js?v=3.13&libraries=places';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

</script>
<script type="text/javascript">
// When the DOM is ready, run this function
    	$(document).ready(function() {
		  //Set the carousel options
		  $('#quote-carousel').carousel({
			pause: true,
			interval: 10000,
		  });
		});
		
		function init() {
		window.addEventListener('scroll', function(e){
			var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 300,
				header = document.querySelector("nav");
			if (distanceY > shrinkOn) {
				classie.add(header,"smaller");
			} else {
				if (classie.has(header,"smaller")) {
					classie.remove(header,"smaller");
				}
			}
		});
	}
	window.onload = init();
    </script>
    

  <script type="text/javascript">

jQuery(document).ready(function($) {
  var map;
  var service;
  var latMap;
  var longMap;
  var g;
  var schoolMarkers = [];
  var hospitalMarkers = [];
  var restaurantMarkers = [];
  var doctorMarkers = [];
  var shopping_mallMarkers = [];
  var movie_theaterMarkers = [];
  var foodMarkers = [];
  var metro_stationMarkers = [];      
  var mosqueMarkers = []; 
  var infowindow;
  var html = "";
  var markers = [];

  function TextualZoomControl(map) {
    var g = google.maps;
    var control = document.createElement("div");
    control.id = "zoomcontrol";
    var zoomInDiv = document.createElement("div");
    this.setButtonStyle_(zoomInDiv);
    control.appendChild(zoomInDiv);
    zoomInDiv.appendChild(document.createTextNode(" "));

    g.event.addDomListener(zoomInDiv, "click", function() {
      map.setZoom(map.getZoom()+1);
  });

  var zoomOutDiv = document.createElement("div");
  this.setButtonStyle_(zoomOutDiv);
  control.appendChild(zoomOutDiv);
  zoomOutDiv.appendChild(document.createTextNode(" "));

  g.event.addDomListener(zoomOutDiv, "click", function() {
    map.setZoom(map.getZoom()-1);
  });

  document.body.appendChild(control);
  return control;
}


// Set the proper CSS for the given button element.
TextualZoomControl.prototype.setButtonStyle_ = function(button) {
  button.style.cursor = "pointer";
}


function loadMap() {

  g = google.maps;
  latMap = $("#map").attr("lat");
  longMap = $("#map").attr("long");
  var opts_map = {
    zoom:15,
    styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          { "color": "#927891" },/*#b1c1ce*/
          { "visibility": "on" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "color": "#f4f3ec" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#f4f1ea" }/*#dae1e7*/
        ]
      },{
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
      },{
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "on" },
          { "hue": "#e9e5dc" }/*#0091ff*/
        ]
      },{
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          { "visibility": "on" }
        ]
      }
    ],
    center: new g.LatLng(latMap,longMap),
    disableDefaultUI: true,
    scrollwheel: true,
    mapTypeControlOptions: {
      style: g.MapTypeControlStyle.DEFAULT
    },
    mapTypeId: g.MapTypeId.ROADMAP,
      };
  
  map = new g.Map(document.getElementById("map"), opts_map);
  
  var marker = new g.Marker({
    position : new g.LatLng(latMap,longMap),
    map : map,
    icon: 'images/location-pin.png',  
  });
  // Add self created control
  var zoom_control = new TextualZoomControl(map); 
  zoom_control.index = 1;
  $("#zoomcontrol").appendTo("#mapdiv");
  infowindow = new google.maps.InfoWindow();
}

window.onload = loadMap;
  /*$(".mapBtn").click(function(e){
    e.preventDefault();
    var type = $(this).attr("type");
    if($(this).hasClass('disabled'))
    {

      addPlaces(type);
      //console.log(type);
      $(this).removeClass('disabled') 
    }
    else
    {
      removePlaces(type);
      $(this).addClass('disabled')  

    }
  });*/

  

});*/