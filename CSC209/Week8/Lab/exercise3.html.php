<html>
<body>

<?php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
} 

function myTest2() {
    static $x = 0;
    echo $x;
    $x++;
  }

myTest();  // run function
echo $y; // output the new value for variable $y
echo "<br>";
myTest2();
echo "<br>";
myTest2();
echo "<br>";
myTest2();
?>

</body>
</html>