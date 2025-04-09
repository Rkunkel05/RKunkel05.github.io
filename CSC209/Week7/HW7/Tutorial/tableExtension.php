<?php
$ROWDATA = array(
    // => used to assign key values in a pair
    array("First" => "Rachel", "Last" => "Kunkel", "Age" => "20"), 
    array("First" => "Sophie", "Last" => "Kunkel", "Age" => "22"), 
    array("First" => "Peter", "Last" => "Kunkel", "Age" => "15"));
$COLNAMES = array("First name", "Last name", "Age");
?>

<html>
<head>

</head>
<body>


<?php
$NROWS = count($ROWDATA)-1;
$NRCOLS = count($COLNAMES)-1;
?>
<table>
    <tr>
       <?php for ($i=0; $i<= $NRCOLS; $i++) { ?>
                <th> <?= $COLNAMES[$i] ?> </th>
        <?php	}?>
    </tr>

<?php for ($i=0; $i<=$NROWS; $i++) { ?>
    <tr>
        <td> <?= $ROWDATA[$i]['First'] ?> </td>
        <td> <?= $ROWDATA[$i]['Last'] ?> </td>
        <td> <?= $ROWDATA[$i]['Age'] ?> </td>
    </tr>
<?php	}?>
</table>


	
</body>
</html>