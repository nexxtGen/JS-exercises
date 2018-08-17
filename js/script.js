'use strict';


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
