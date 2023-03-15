<?php
require 'connect.php';
$placeData = json_decode(file_get_contents("php://input"), true);

$id = $placeData['del'];

$sql = $mysqli->query("DELETE FROM `date` WHERE `id` =" . $id);
?>