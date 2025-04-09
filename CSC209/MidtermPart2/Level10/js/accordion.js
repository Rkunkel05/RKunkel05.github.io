var i;
NRIMAGES = 4;
IMAGE = ["../Images/Felix.JPG", "../Images/Frank.JPG", "../Images/Oscar.JPG", "../images/sillyCatMeow.png"];

function toggleFunction() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
};

function addSection() {
  let accordion = document.getElementById("accordion");
    for (i=0; i<NRIMAGES; i++) {
      
        let section = '<button class="accordion">Download Image ' + i + '</button> <div class="panel"> <a href="'+IMAGE[i]+'">Download </a> </div>'
    
       accordion.innerHTML += section;
    }

    // add event listener 
    var acc = document.getElementsByClassName("accordion");
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", toggleFunction);
    }
}