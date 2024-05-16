function Dog(name){
    this.dogName = name || "Rex";
 /*   if (!name){
        this.dogName = "Rex"
    } 
    else {  
this.dogName= name;
}*/
} 
var dog = new Dog ()
console.log("Ime psa default name = " + dog.dogName);

var dog1 = new Dog ("Bobi");
console.log("Ime psa = " + dog1.dogName);

Dog.prototype.imePsa = function (){
    return this.dogName;

};

Dog.prototype.bark = function (){
    return "wuf wuf";

};
console.log("Ime psa (dog) preko metode " + dog.imePsa());
console.log("Imew psa2 (dog2) preko metode " + dog1.imePsa());
console.log("Pas1 se glasa = " + dog.bark());
console.log("Pas2 se glasa = " + dog1.bark());
