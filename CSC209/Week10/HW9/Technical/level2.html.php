<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link id="theme" rel="stylesheet" type = "text/css" href = "../css/style.css"/>
</head>
<body>

<h2>Modal Login Form</h2>

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

<div id="id01" class="modal">
  <form class="modal-content animate" action="../php/level2.php" method="post" id="loginForm">
  <div class="imgcontainer">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <img src="../images/img_avatar2.png" alt="Avatar" class="avatar">
      </div>
    <form action="php/saveUsers.php" method="post">
      Username: <input type="text" name="username"><br>
      Password: <input type="text" name="password"><br>
      <input type="submit">
    </form>
    <div class="container" style="background-color:#f1f1f1">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
  </form>
</div>

</body>
</html>