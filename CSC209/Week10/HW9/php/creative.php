<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link id="theme" rel="stylesheet" type = "text/css" href = "../css/creative.css"/>
</head>
<body>

<h1> ADMIN PAGE  <button type="Button" class="returnButton" onclick="location.href='../Creative/creative.html.php'">Login Page</button> </h1><br>
<hr style="height: 5px; background-color: black; border: none;"> <br>

<?php
// grab username and password
$username = $_POST["username"];
$password = $_POST["password"];
// make an array & assign details to keys
$login = array("username"=>$username,"password"=>$password);

$filepath = "../output/creativeUsers.txt";
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

<h2>Current Number of Users: <?php echo count($users) ?>  <br><br>
Current List of Users:  </h2> 

<button type="Button" class="updateButton" onclick="loadDoc()">Update Users</button>
<br>
<h3 id="demo"></h3>


<script src="../js/creative.js"></script>


</body>
</html>