console.log('Printing the data using setTimeout function');

let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

setTimeout(function() {console.log(data);},1000);

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
        data = JSON.parse(this.responseText);
    };
}