console.log('Printing the data using a function - fails');

let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

console.log(data); // undefined as printed before the response is sent back

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
        data = JSON.parse(this.responseText)
    };
}