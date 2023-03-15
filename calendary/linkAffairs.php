<?php
require 'connect.php';

$sql = $mysqli->query("SELECT `id`, `text`, MONTH(`date`) AS mon, DAY(`date`) as daa, YEAR(`date`) as yeas ,`date` FROM `date` ORDER BY `date`");

$affairs = mysqli_fetch_all($sql, MYSQLI_ASSOC);

echo json_encode($affairs);

?>