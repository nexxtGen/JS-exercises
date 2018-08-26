'use-strict';

var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById("get-joke");
var outputJoke = document.getElementById("joke-output");
button.addEventListener('click', function(){
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        outputJoke.innerHTML = response.value.joke;
    });
    xhr.send();
}
getJoke();