
var os = require('os');
var convertTime = require('./time');

function getOSinfo() {  //Funkcja wyświetla dane Usera
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type); //console.log działa podobnie jak "process.stdout.write('blabla');" tylko odrazu dodaje przejscie do nowej linii.
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    //console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('Uptime:', convertTime.timeFunc(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
//Bez eksportu wszystko co w pliku ma zasięg tylko tego pliku!!!
exports.print = getOSinfo; // Przy eksporcie pojedyńczej funkcji to jest OK. Przypisuję funkcję do zmiennej print.