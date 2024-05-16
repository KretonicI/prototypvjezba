var brojanje = require("./obrasci");
///krenuli smo total walk = 0
brojanje.walk();
console.log("Total steps" + brojanje.getTotalSteps()); //0
brojanje.walk();
console.log("Total steps" + brojanje.getTotalSteps()); //1
brojanje.walk();
console.log("Total steps" + brojanje.getTotalSteps()); //2
brojanje.walk();
console.log("Total steps" + brojanje.getTotalSteps()); //3
brojanje.walk();
console.log("Total steps" + brojanje.getTotalSteps()); //4

var total = brojanje.getTotalSteps();
console.log("Total steps= " + total); //4
