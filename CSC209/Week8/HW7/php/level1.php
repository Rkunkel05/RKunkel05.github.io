<?php
function loadImages() {
    $images = glob("../Images/*.{jpg}",GLOB_BRACE);
    $NRImages = count($images);
    ?>

    for (i=0;i<<?php$NRImages?>;i++) {
        "<img src = '<?php $images[$i]?>'>";

         "<img src="$images[$i].'"/>"";
    }
}
?>