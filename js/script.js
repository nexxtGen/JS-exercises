


//Create button
function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        
        this.element.addEventListener('click', function() {
            alert(self.text);
        });    
        document.body.appendChild(this.element);    
	}
}

var btn1 = new Button('Hello!');
btn1.create();
var btn2 = new Button ('second btn');
btn2.create();

var arr = ['alpha', 'bravo', 'charlie', 'delta'];
for (i = 0; i < arr.length; i++) {
    var btnTest = new Button(arr[i]);    
    btnTest.create();    
}
