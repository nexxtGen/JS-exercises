'use strict';
//Mustache szablon 
var templateCell = document.getElementById('template-carousel-cell').innerHTML;
var results = document.getElementById('results');
Mustache.parse(templateCell);


var listCells = '';
for(var i = 0; i < dataCell.length; i++){
  console.log(dataCell);  
  listCells += Mustache.render(templateCell, dataCell[i]);
}
results.insertAdjacentHTML('beforeend', listCells);

// Google Map
window.initMap = function() {		  
  var firstCell = {lat: 37.331945, lng: -122.030872};
  // for var map add new instance object map
  var map = new google.maps.Map(document.getElementById('map'), {
    // Map options
    zoom: 11,
    center: firstCell
  });  
  // Create markers
    for (i = 0; i < dataCell.length; i++ ) {
      var coords = dataCell[i].coords;
      var marker = new google.maps.Marker({        
        position: coords,
        map: map
      });  

    }    
}
// Flickity
var restartButton = document.getElementById('first-cell');
var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar')
// Add flickity
var flkty = new Flickity( elem, {   
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,  
});
// progress bar
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
// restart button
restartButton.addEventListener("click", function(){
    flkty.select(0);
});
// element argument can be a selector string
//   for an individual element
