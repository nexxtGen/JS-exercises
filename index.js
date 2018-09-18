
var OSinfo = require('./modules/OSinfo'); //Do zmiennej przypisuję plik z moja wyeksportowaną funkcją.
var EventEmitter = require('events').EventEmitter;  //Wyciągam klasę event emitter bo tylko ona jest mi teraz potrzebna.

var emitter = new EventEmitter();  //Tworzę obiekt na podstawie klasy 'EventEmitter();'

// Dodaję nasłuchiwania na zdarzenia.
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
         // odpalanie zdarzenia beforeCommand (z parametrem)
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/ver':                        
                process.stdout.write('Node version: ' + process.versions.node + '\n' );                               
                break; 
            case '/getOSinfo':                        
                OSinfo.print(); //Odnoszę się do zmiennej z przyp. plikiem i mam dostęp do funkcji getOSinfo, która w tamtym pliku została przypisana właśnie do print i wyeksportowana.                        
                break;            
            default:
                process.stderr.write('Wrong instruction!');
                break;
        };
        // emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');        
    }
});

