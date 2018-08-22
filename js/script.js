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
var firstCell = {lat: 37.331945, lng: -122.030872};
var infos = document.getElementById('infos');
window.initMap = function() {		  
    var firstCell = {lat: 37.331945, lng: -122.030872};
    // for var map add new instance object map
    var map = new google.maps.Map(document.getElementById('map'), {      
      zoom: 4,
      center: firstCell
    });  
    // Create markers        
    for (let i = 0; i < dataCell.length; i++ ) {        
        var coords = dataCell[i].coords;  
        var marker = new google.maps.Marker({        
            position: coords,
            map: map
        });             
        marker.addListener('click', function(){ 
            flkty.select(i);
        }); 
    }
    //Change Flickity slide center gMap map
    flkty.on( 'change', function( index ) { 
      event.preventDefault();  
      smoothPanAndZoom(map, 11, dataCell[index].coords);            
      //map.panTo(dataCell[index].coords); 
      //map.setZoom(15);
    });    
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

//--------- Smotch Zoom gMap very simple script  :)

var smoothPanAndZoom = function(map, zoom, coords){  
  var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
  jumpZoom = Math.min(jumpZoom, zoom -1);
  jumpZoom = Math.max(jumpZoom, 3); 
  smoothZoom(map, jumpZoom, function(){    
    smoothPan(map, coords, function(){      
      smoothZoom(map, zoom); 
    });
  });
};

var smoothZoom = function(map, zoom, callback) {
  var startingZoom = map.getZoom();
  var steps = Math.abs(startingZoom - zoom);
  if(!steps) {
    if(callback) {
      callback();
    }
    return;
  }
  var stepChange = - (startingZoom - zoom) / steps;
  var i = 0;
  var timer = window.setInterval(function(){
    if(++i >= steps) {
      window.clearInterval(timer);
      if(callback) {
        callback();
      }
    }
    map.setZoom(Math.round(startingZoom + stepChange * i));
  }, 80);
};

var smoothPan = function(map, coords, callback) {
  var mapCenter = map.getCenter();
  coords = new google.maps.LatLng(coords);

  var steps = 12;
  var panStep = {lat: (coords.lat() - mapCenter.lat()) / steps, lng: (coords.lng() - mapCenter.lng()) / steps};

  var i = 0;
  var timer = window.setInterval(function(){
    if(++i >= steps) {
      window.clearInterval(timer);
      if(callback) callback();
    }
    map.panTo({lat: mapCenter.lat() + panStep.lat * i, lng: mapCenter.lng() + panStep.lng * i});
  }, 1000/30);
}; 
