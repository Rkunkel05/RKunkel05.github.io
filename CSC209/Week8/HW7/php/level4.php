<?php
$slideIndex =  1;
$images = glob("../Images/*.{jpg}",GLOB_BRACE);
$NRImages = count($images);
?>

<script>
let slideIndex = 1;
let slideshowContainer = document.getElementById("slideshow-container");
let totalSlides = <?php echo $NRImages; ?>;
<?php
// make js array
echo "let images = [";
for ($i = 0; $i< $NRImages; $i++) {
    echo '"'.$images[$i],'"';
    if ($i < $NRImages-1) {
        echo ", ";
    }
}
echo "];";
?>


for (let i=0; i< images.length; i++) {
    let crtSlideNo = i+1;
    let crtImg = images[i];
    let crtText = crtImg.substring(10);

    let mainBody = 
    '<div class="mySlides fade">' +
        '<img src="' + crtImg + '" style="width:25%">' +
        '<div class="numbertext">' + crtSlideNo + ' / ' + totalSlides + '</div>' + 
        '<div class="text">' + crtText + '</div>' +
    '</div>';  

    slideshowContainer.innerHTML += mainBody;
}

// dynamically create dots
let dotContainer = document.createElement("div");
dotContainer.style.textAlign = "center";

for (let i = 0; i <images.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function() {
        currentSlide(i+1);
    };
    dotContainer.appendChild(dot);
}

slideshowContainer.parentNode.appendChild(dotContainer);

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
</script>