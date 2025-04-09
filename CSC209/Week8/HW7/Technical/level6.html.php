<html>
<head>
    <title>Technical</title>
    <link id="theme" rel="stylesheet" type = "text/css" href = "../CSS/styles.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <h1>My Cats!! </h1>
    
    <div id="slideshowContainer"></div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div id="dotContainer"></div>

    <?php 
    include('../php/level6.php');
    ?>

    <br />


</body>
</html>