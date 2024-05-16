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