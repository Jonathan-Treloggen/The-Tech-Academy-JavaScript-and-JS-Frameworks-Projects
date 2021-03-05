'use strict'

const URL = "http://localhost:5000/api/";

function getAllPies() {
    console.log("GET All");

    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE &&
            this.status === 200) {
            let response = JSON.parse(this.response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.data);
        }
    };
    req.open("GET", URL);
    req.send();

}