<html>
<head>
    <title>Technical</title>
    <link id="theme" rel="stylesheet" type = "text/css" href = "../css/styles.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
<div class="navbar" id="myNavbar">
 <!-- Tells website which folder to look into by passing along a parameter  -->
  <a href="?folder=Cats">Cats</a>
  <a href="?folder=GurtBowls">Yoghurt Bowls</a>
  <a href="?folder=Fish">Fish</a>
  <a href="javascript:void(0);" class="icon" onclick="menuBar()">&#9776;</a>
</div>

    <h1>My Slideshow!</h1>
    
    <div id="slideshowContainer"></div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div id="dotContainer"></div>

    <?php 
    include('../php/level7.php');
    ?>

    <br />

    <script src="../js/level7.js"></script>


</body>
</html>