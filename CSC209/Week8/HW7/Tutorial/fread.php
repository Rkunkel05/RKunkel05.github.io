<!DOCTYPE html>
<html>
<body>

<?php
$file = fopen("newfile.txt","r");
fread($file,"10");
fclose($file);
?>

</body>
</html>