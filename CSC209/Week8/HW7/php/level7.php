<?php
$slideIndex =  1;
// where the parameter in the .html.php folder gets passed to with fallback generic Images folder
$folder = $_GET['folder'] ?? 'Cats';
// limits search in folder to only .jpg files
$images = glob("../Images/".$folder."/*.{jpg}",GLOB_BRACE);
$NRImages = count($images);

for ($i = 0; $i < $NRImages; $i++) {
    $crtSlideNo = $i + 1;
    $crtImg = $images[$i];
    $crtText = basename($crtImg);

    echo '<div class="mySlides fade">';
    echo '<img src="'.$crtImg.'" style="width:25%">';
    echo '<div class="numbertext">'.$crtSlideNo.'/'.$NRImages.'</div>';
    echo '<div class = "text">'.$crtText.'</div>';
    echo '</div>';
}

echo '</div>';

echo '<div style="text-align:center"> </div>';

for ($i = 0; $i < $NRImages; $i++) {
    $n = $i + 1;
    echo '<span class="dot" onclick="currentSlide('.$n.')"></span>';
}

echo '</div>';

echo "
<script>
slideshowContainer.parentNode.appendChild(dotContainer);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
</script>";

?>