function whosThatPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("who").innerHTML = this.responseText;
            document.getElementById("pic").src = "img/Pikachu.jpg";
        }
    };
    xhttp.open("Get", "JS/server.txt", true);
    xhttp.send();
}