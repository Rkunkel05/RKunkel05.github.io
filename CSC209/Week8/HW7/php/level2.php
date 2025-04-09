<?php
function loadImages() {
    $images = glob("../Images/*.{jpg}",GLOB_BRACE);
    $NRImages = count($images);

    for ($i=0;$i<$NRImages;$i++) {
        echo '<img src="'.$images[$i].'"/>';
    }
}
?>