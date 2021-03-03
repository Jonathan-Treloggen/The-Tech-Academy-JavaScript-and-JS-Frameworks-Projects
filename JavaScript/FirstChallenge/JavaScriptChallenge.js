"use strict";
var yoo;


// Interactive functions
// Replace
function justiceFunction() {
    var str = document.getElementById("firstP").innerHTML;
    var rep = str.replace(/digimon/i, "Pokemon");
    document.getElementById("firstP").innerHTML = rep;
}


// Search
function findFunction() {
    var str = document.getElementById("firstP").innerHTML;
    var ser = str.search(/pokemon/i,"Pokemon");
    document.getElementById("secondP").innerHTML = ser;
}


// Throw, try, catch and finally
function theFunction() {
    var x, message;
    x = document.getElementById("theInput").value;
    message = document.getElementById("thirdP");
    message.innerHTML = "";
    try {
        if(x == "") throw "Come on, really? Didn't want to type anything?";
        if(isNaN(x)) throw "you know I asked for a number. Not for you to spell it out.";
        x = Number(x);
        if(x < 0) throw "Why are you getting so negative.";
        if(x > 100) throw "You like them big numbers, do yeah?";
    }
    catch(err) {
        message.innerHTML = err;
    }
    finally {
        document.getElementById("theInput").value = "";
    }
}


// validateForm()
function validateForm() {
    var x = document.forms["testForm"]["fname"].value;
    if(x == "") {
        alert("Please fill in name");
        return false;
    }
}

// Exponentiation operator (**)
console.log(8 ** 2);

// findIndex()
var num = [5, 7, 10, 11, 22];
var first = num.findIndex(myfunction);

document.getElementById("eighthP").innerHTML = "First number over 18 has index " + first;

function myfunction(value, index, array) {
    return value > 12;
}


// Number.isInteger()
document.getElementById("ninethP").innerHTML = Number.isInteger(35);


// isFinite() if not possible or NaN it will return false.
document.getElementById("tenthP").innerHTML = Number.isFinite(35/1);

// Classes
class Pokemon {
    constructor(pokemonName, pokemonType) {
        this.pokemonName = pokemonName;
        this.pokemonType = pokemonType;
    }
}
//debugger sets a break point
let p = new Pokemon("Pikachu", "Electric");
document.getElementById("pokemonList").innerHTML = p.pokemonName + " is a " + p.pokemonType + " type.";


// This
var person = {
    firstName : "Jonathan",
    lastName : "Treloggen",
    id : 72,
    fullName : function() {
        return this.firstName + " " + this.lastName + " is awsome!";
    }
};
document.getElementById("fourthP").innerHTML = person.fullName();


// Arrow function
yoo = () => "Bro!";
document.getElementById("seventhP").innerHTML = yoo();


// Let & const
{
    let person = {
        firstName : "Megan",
        lastName : "Treloggen",
        id : 23,
        fullName : function() {
            return this.firstName + " " + this.lastName + " is awsome!";
        }
    }
    document.getElementById("fithP").innerHTML = person.fullName();
}


// Any code after finally won't execute
try {
    const baller = "Jon";
    baller = "Megan";
}
catch(err) {
    document.getElementById("sixthP").innerHTML = err;
}
finally {
    document.getElementById("sixthP").innerHTML = baller;
}

