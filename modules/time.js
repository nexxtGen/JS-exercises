
function convertTimeFormat(uptime) {      
    var hours = Math.floor(uptime / 3600); // .toFixed(0) nie zadziała poprawnie gdyż nie zaokrągla zawsze w dół a wg zasad matematyki.
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = ((uptime- (hours * 3600)) - (minutes * 60)).toFixed(0);
    var okTimeFormat = 'hours: ' + hours + ', minutes: ' + minutes + ', seconds:' + seconds;
    return okTimeFormat;
}

exports.timeFunc = convertTimeFormat;
