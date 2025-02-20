function changeStyle() {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "../CSS/styles.css") {
        theme.setAttribute("href","../CSS/style2.css");
        document.body.classList.add("alt-theme");
    } else {
        theme.setAttribute("href","../CSS/styles.css");
        document.body.classList.remove("alt-theme");
    }
}

function hideShow() {
    var x = document.getElementById("myPopUp");
    var button = document.getElementById("toggleButton");
    if (x.style.display === "none") {
        x.style.display = "block";
        button.innerText = "Hide Me";
    } else {
        x.style.display = "none";
        button.innerText = "About Me";
    }
}

function majorRequirements() {
    var x = document.getElementById("majorRequirements");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function minorRequirements() {
    var x = document.getElementById("minorRequirements");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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

let slideIndex = 1;
let slideNo = [1,2,3];
let img = ["../Images/Felix.JPG", "../Images/Frank.JPG","../Images/Oscar.JPG"];
let text = ["Felix!", "Frank!", "Oscar!"];
let slideshowContainer = document.getElementById("slideshow-container");

for (let i=0; i<slideNo.length; i++) {
    let crtSlideNo = slideNo[i];
    let crtImg = img[i];
    let crtText = text[i];

    let mainBody = 
    '<div class="mySlides fade">' +
        '<img src="' + crtImg + '" style="width:50%">' +
        '<div class="numbertext">' + crtSlideNo + ' / 3</div>' + 
        '<div class="text">' + crtText + '</div>' +
    '</div>';  

    slideshowContainer.innerHTML += mainBody;
}

        showSlides(slideIndex);
 
         // Next/previous controls
         function plusSlides(n) {
         showSlides(slideIndex += n);
         }
 
         // Thumbnail image controls
         function currentSlide(n) {
         showSlides(slideIndex = n);
         }
 
         function showSlides(n) {
         let i;
         let slides = document.getElementsByClassName("mySlides");
         let dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
         } 
