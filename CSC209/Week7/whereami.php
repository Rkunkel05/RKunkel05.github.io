<!DOCTYPE html>
<html>
<body>

This page figures out its whereabouts <br>

<?php 

$path = realpath("whereami.php");

echo $path."<br>";

$basename = substr($path,53,5);

echo $basename."<br>";

$substring = substr($basename,-1);

echo $substring."<br>";

?>

</body>
</html>