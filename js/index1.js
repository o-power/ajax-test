console.log('Updating the DOM');

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://swapi.co/api/");

xhr.send();