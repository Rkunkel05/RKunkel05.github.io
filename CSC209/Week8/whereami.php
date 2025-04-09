
<!DOCTYPE html>
<html>
<body>

This page figures out its whereabouts <br>

<?php 

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
?>

<?php echo "My week number is ".$weekNr?>

</body>
</html>
