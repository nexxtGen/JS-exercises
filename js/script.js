'use-strict';

var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById("get-joke");
var outputJoke = document.getElementById("joke-output");
button.addEventListener('click', function(){
    getJoke();
});

//Use standard XMLHttp request
/*
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
*/
//Use Fetch 
function getJoke(){
    fetch(url, { cache: "no-store" })
        .then(res => res.json())
        .then(res => {
            outputJoke.innerHTML = (res.value.joke);
        })
}
getJoke();


/*
var data = { joke: ''};
function getJoke() {
    fetch(url, { cache: "no-store" })
        .then(function(resp) {
            return resp.json();
        })
        //.then(createJoke);
        .then(function(myJson) {
            //console.log(JSON.stringify(myJson));
            var data = myJson[0];
            console.log(data.value.joke);
        });
}
*/
/*
function createJoke(input) {
    var data = input[0];
    outputJoke.innerHTML = data.content;
}
getJoke();
*/
