'use strict';
(function(){

var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
Mustache.parse(templateItem);

for(var i = 0; i < productsData.length; i++){
	console.log(productsData);
	listItems += Mustache.render(templateItem, productsData[i]);
}

var mainCarousel = document.getElementById('main-carousel');
console.log(listItems, "abc");
mainCarousel.insertAdjacentHTML('beforeend', listItems);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( '.main-carousel', {
  // options
  cellAlign: 'center',
  contain: true,
  hash: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var infos = document.getElementById('infos');
	
	// Definiujemy funkcję initMap tak samo jak wcześniej. 
	
  	window.initMap = function() {

		var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: coords
		});
		
		var markerOne = new google.maps.Marker({
			position: uluru,
			map: map
		})};

})();

