<!DOCTYPE html>
<html>
<body>

<?php
$file = fopen("newfile.txt","r");
//Output lines until EOF is reached
while(! feof($file)) {
  $line = fgets($file);
  echo $line. "<br>";
}

fclose($file);
?>

</body>
</html>