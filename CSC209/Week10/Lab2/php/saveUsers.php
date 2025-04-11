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

<!-- <?php
// foreach ($users as $user) {
//     echo ($user["username"])."<br>";
// }
?> -->

<div id="demo">
<button type="button" onclick="loadDoc()">Refresh Users</button>
</div>

<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "../output/users.txt");
  xhttp.send();
}
</script>


</body>
</html>