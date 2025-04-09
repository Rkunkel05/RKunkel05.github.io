<!DOCTYPE html>
<html>
<body>

<?php
$file = fopen("newfile.txt","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
?>

</body>
</html>