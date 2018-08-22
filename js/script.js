
// Uwagi mentor
/*2018-08-22 21:51:05
niech każda instancja klasy Rifle ma na sobie właściwość isLoaded 
- domyslnie (fabrycznie) ustawiany na false. Dorób do tej klasy metodę loadUp, 
której potem będzie można użyć na każdej broni aby ją naładować (zmienić jej isLoaded na true) */
//Constructor
function Rifle (brand, caliber, accesories, camuflage, price  ) {
    this.brand = brand;	    
	this.caliber = caliber;
    this.accesories = accesories;
    this.camuflage = camuflage;	
    this.price = price;    
    this.isLoaded = false;
}
//Class method
Rifle.prototype.printInfo = function() {
    console.log("The rifle brand is " + this.brand + ", the caliber is " + this.caliber + ", accesories- " + this.accesories + ", the camuflage is " + this.camuflage + ", the price is " + this.price + ", is Loaded? " + this.isLoaded + ".");
}
Rifle.prototype.loadUp = function() {
    this.isLoaded = true;
}
//create instances
var XM8 = new Rifle("Aliant Techsystems", 5.56, "Scope 4x ", "Pixel forest", "$999");
XM8.printInfo();
var M4 = new Rifle("Colt’s Manufacturing Company", 5.56, "M203 grenade laucher", "darkwood", "$799");
M4.printInfo();
var MP5 = new Rifle("Heckler & Koch", 9, "Colminator", "Pixel urban", "$499");
MP5.printInfo();

M4.loadUp();
M4.printInfo(); 


