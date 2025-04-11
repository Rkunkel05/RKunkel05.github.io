<!DOCTYPE HTML>
<html>  
<body>

<?php 
function extractFolderNumber() {
    $path = realpath("./");

    $basename = basename($path);

    $substring = substr($basename,-1);

    if (is_numeric($substring)) {
        $weekNr = (int) $substring;
    }

    echo "This work is for lab ".$weekNr;
}

extractFolderNumber();
?>

<form action="php/saveUsers.php" method="post">
Username: <input type="text" name="username"><br>
Password: <input type="text" name="password"><br>
<input type="submit">
</form>

</body>
</html>