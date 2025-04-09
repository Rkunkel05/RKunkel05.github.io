<?php 
function extractFolderNumber() {
    $path = realpath("./");

    echo $path."<br>";

    $basename = basename($path);

    echo $basename."<br>";

    $substring = substr($basename,-1);

    echo $substring."<br>";

    if (is_numeric($substring)) {
        $weekNr = (int) $substring;
        echo $weekNr."<br>";
    }

    echo "This work is for week ".$weekNr;
}
?>