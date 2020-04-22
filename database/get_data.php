<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "example";

//Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Connection
if ($conn->connect_error) {
    die ("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT staff_name, room_num, occupation, department, description FROM staff_info";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    //output data of each row
    // while($row = mysqli_fetch_assoc($result)) {
    //     echo "staff: " . $row["staff_name"]. " - "
    // }
    while($row=$result->fetch_assoc()) {
        $data[] = $rows;
    }
}