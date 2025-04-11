<html>
<body>

<?php
// grab username and password
$username = $_POST["username"];
$password = $_POST["password"];
// make an array & assign details to keys
$login = array("username"=>$username,"password"=>$password);

$filepath = "../output/users.txt";
$users = [];

// assign data in to users
if (file_exists($filepath)) {
    $contents = file_get_contents($filepath);
    $data = json_decode($contents,true);
    $users = $data;
}
$users[] = $login;

// writes data to file
file_put_contents($filepath,json_encode($users, JSON_PRETTY_PRINT));
?>

Current Number of Users: <?php echo count($users) ?> <br>
Current List of Users:  <br>

<button type="button" onclick="loadDoc()">Update Users</button>

<p id="demo"></p>

<script src="../js/level2.js"></script>


</body>
</html>