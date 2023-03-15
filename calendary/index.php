<?php
require 'connect.php';

$sql = $mysqli->query("SELECT `text`, MONTH(`date`) AS `month`, DAY(`date`) as `day`, YEAR(`date`) as `year` FROM `date`");

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css">
    <title>Document</title>
</head>
<body>
<section class="calendary">
    <div class="container">
        <div class="arrow">
            <img class="arrow-left" src="images/arrow-left.png" alt="">
            <div class="btn-date">
                <div class="btn-back">Назад</div>
                <div class="year-month">
                    <div class="year"></div>
                    <div class="month"></div>
                </div>
                <div class="btn-next">Вперёд</div>
            </div>
            <img class="arrow-right" src="images/arrow-right.png" alt="">
        </div>
        <div>
            <table>
                <thead>
                <tr class="thead">
                </tr>
                </thead>
                <tbody class="tbody">
                </tbody>
            </table>
            <div class="input-btn-data">
                <input class="input-data">
                <div class="btn btn-add">Добавить</div>
            </div>
        </div>
        <div class="link-affers">
            <div class="affer">
            </div>
        </div>
    </div>
</section>

<script src="js/main.js"></script>
</body>
</html>
