<!DOCTYPE html>
<html>
<body>

<?php  
$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);
?>  

$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  echo "$x <br>";
}

</body>
</html>