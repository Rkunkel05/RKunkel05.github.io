<html>
<head>
    <title>Technical</title>
    <link id="theme" rel="stylesheet" type = "text/css" href = "../css/styles.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <span class="dotSmall"></span> 
    <span class="dotBig"></span> 
    <span class="dotSmall"></span>
     <!-- Get the folder from variable folder; otherwise default to "Cats" -->
    <h1><?php echo $folder = $_GET['folder'] ?? 'Cats';?></h1>
    <span class="dotSmall"></span> 
    <span class="dotBig"></span> 
    <span class="dotSmall"></span>
    
    <div id="slideshowContainer"></div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div id="dotContainer"></div>

    <?php 
    include('../php/creative.php');
    ?>

    <br />

    
    <nav>
    <ul>
        <li><span class="dotSmall"></span> </li>
        <li><a href="../mainPage.html"><button>Homepage</button></a></li>
        <li><a href="?folder=Cats"><button>Cats</button></a></li>
        <li><a href="?folder=GurtBowls"><button>Yoghurt Bowls</button></a></li>
        <li><a href="?folder=Fish"><button>Fish</button></a></li>
        <li><span class="dotSmall"></span> </li>
    </ul>
</nav>
    <script src="../js/creative.js"></script>


</body>
</html>