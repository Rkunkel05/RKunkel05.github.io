<html>
<body>

Welcome <?php echo $_POST["username"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php
$username = $_POST["username"];
$password = $_POST["password"];

$file = fopen("users.txt","w");
fwrite($file, "Username: ".$username." Password: ".$password);
fclose($file);
?>

</body>
</html>