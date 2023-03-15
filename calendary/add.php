<?php
require 'connect.php';
$placeData = json_decode(file_get_contents("php://input"), true);

$da = $placeData['da'];
$text = $placeData['text'];
$mo = $placeData['mo'];
$ye = $placeData['ye'];

$sql = $mysqli->query("INSERT INTO `date` (`text`, `date`) VALUES ('$text', '$ye-$mo-$da')");
?>