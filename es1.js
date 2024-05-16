"use strict";

var a = 78;
var b = 34;
//delete a;
//delete window.b;
 var myObject = { prperty1: 1, property2: 2, prperty1: 1 };
const users = [
    { name: "Fabio", surname: "Biondi"},
    { name: "Mario", surname: "Rossi"},
];
const user = { name: "Lorenzo", surname: "Verdi"};
var allUsers=[...users, user];
console.log(`Drugi user=${allUsers[2].name} i  prezime=${allUsers[2].surname}`);

for (var i = 0; i<10; i++) {
    setTimeout(function(){
        console.log("the number is " + i);
    }, 1000);
    
}
console.log(i);