process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/ver':                        
                process.stdout.write('Node version:\n'); // DRY DRY DRY 
                process.stdout.write(process.versions.node + '\n'); 
                process.stdout.write('v8: '+ process.versions.v8 + '\n');                  
                break;  
            case '/os':                        
                process.stdout.write('OS: ' + process.env.OS + '\n'); //No DRY                                    
                break;            
            default:
                process.stderr.write('Wrong instruction!');
                break;
        }        
    }
});