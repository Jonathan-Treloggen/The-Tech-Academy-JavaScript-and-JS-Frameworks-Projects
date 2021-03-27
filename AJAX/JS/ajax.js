function whosThatPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("who").innerHTML = this.responseText;
        }
    };
    xhttp.open("Get", "JS/server.txt", true);
    xhttp.send();
}