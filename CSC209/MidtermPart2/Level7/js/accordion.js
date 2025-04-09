var acc = document.getElementsByClassName("accordion");
var i;
NRIMAGES = 4;
IMAGE = ["../Images/Felix.JPG", "../Images/Frank.JPG", "../Images/Oscar.JPG"];

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", toggleFunction);
}

function toggleFunction() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
};