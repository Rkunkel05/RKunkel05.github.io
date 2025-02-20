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
