function hideShow() {
    var x = document.getElementById("myPopUp");
    var button = document.getElementById("toggleButton");
    if (x.style.display === "none") {
        x.style.display = "block";
        button.innerText = "Hide Me";
    } else {
        x.style.display = "none";
        button.innerText = "Read Me";
    }
}

function references() {
    var x = document.getElementById("references");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.getElementById("colorName").innerHTML = "Your color is: " + color;
}
