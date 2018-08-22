

//Constructor
function Rifle (brand, caliber, accesories, camuflage, price  ) {
    this.brand = brand;	    
	this.caliber = caliber;
    this.accesories = accesories;
    this.camuflage = camuflage;	
	this.price = price;    
}
//Class method
Rifle.prototype.printInfo = function() {
    console.log("The rifle brand is " + this.brand + ", the caliber is " + this.caliber + ", accesories- " + this.accesories + ", the camuflage is " + this.camuflage + ", the price is " + this.price + ".");
}

var XM8 = new Rifle("Aliant Techsystems", 5.56, "Scope 4x ", "Pixel forest", "$999");
XM8.printInfo();
var M4 = new Rifle("Colt’s Manufacturing Company", 5.56, "M203 grenade laucher", "darkwood", "$799");
M4.printInfo();
var MP5 = new Rifle("Heckler & Koch", 9, "Colminator", "Pixel urban", "$499");
MP5.printInfo();


