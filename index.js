

var fs = require('fs');// fs to moduł Node do pracy z plikami.
var StatMode = require('stat-mode');
var colors = require('colors');

/*
fs.stat('./wolf.jpg', function(err, stats) { //fs.stat pozwala na spr czy ścieżka do kt się odnosi istnieje.
    var statMode = new StatMode(stats);
    console.log(stats);
});
*/
/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});
*/

/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nZapis drugi', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/
var path1 = './'
fs.readdir(path1, function(err, files){ 
    if (err) throw err;   
    console.log('Pliki:', files);
    fs.writeFile('./YourFiles.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano dane!'.red);
        fs.readFile('./YourFiles.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie:'.red)
            console.log(data);
        });
    })
});
