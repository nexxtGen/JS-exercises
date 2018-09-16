'use strict';
//Mustache




var templateCell = document.getElementById('template-carousel-cell').innerHTML;
var results = document.getElementById('results');
Mustache.parse(templateCell);

/*
function render(a) {
    return a += Mustache.render(templateCell, a);
}
var listCells =  dataCell.reduce(render);
console.log(listCells);
*/
var listCells = dataCell.reduce(function(prev, next) {
    return prev += Mustache.render(templateCell, next);
  });
  console.log(listCells);
  results.insertAdjacentHTML('beforeend', listCells);
/*
var listCells = '';
for(var i = 0; i < dataCell.length; i++){
  //console.log(dataCell);  
  listCells += Mustache.render(templateCell, dataCell[i]);
}
results.insertAdjacentHTML('beforeend', listCells);
*/


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
