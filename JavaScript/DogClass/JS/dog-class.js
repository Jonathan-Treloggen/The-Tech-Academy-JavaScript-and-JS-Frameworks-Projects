var doc = document.getElementById("dogC");
var d = "The dog ";
var paw = false;
var sit = false;
var lay = false;

class Dog {
    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }
 
    shake() {
        if(lay == true) {
            doc.innerHTML = d + "can't shake when she's laying down.";
        }
        else if(paw == true) {
            doc.innerHTML = d + "raised it's paw up again to be shaken.";
        }
        else {
            doc.innerHTML = d + "has it's paw up to be shaked.";
            return paw = true;
        }
    }

    sit() {
        if(sit == true) {
            doc.innerHTML = d + "is already sitting.";
        }
        else {
            doc.innerHTML = d + "is now sitting.";
            return lay = false, paw = false, sit = true;
        }
    }

    layDown() {
        if(lay == true) {
            doc.innerHTML = d + "is already laying down."
        }
        else {
            document.getElementById("dogC").innerHTML = d + "layed down.";
            return lay = true, paw = false, sit = false;
        }
    }
}

let dog = new Dog("Hound", "Brown", "2 feet", "60 pounds");

document.getElementById("dogP").innerHTML = dog.color + " " + dog.breed
    + ", which weighs in at " + dog.weight + ", and is " + dog.height + " tall.";
