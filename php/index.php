<?php
        include_once 'includes/dbh.php'
?>

 

<div id="test" ng-controller="testCtrl as test">
<?php
    $sql = "SELECT * FROM test;";
    $results = mysqli_query($conn, $sql);
    $reslutsCheck = mysqli_num_rows($results);


    if ($reslutsCheck > 0) {
        while ($row = mysqli_fetch_assoc($results)) {
            echo $row['user_id'];
        }
    }
?>

</div>