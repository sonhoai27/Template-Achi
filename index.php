<!DOCTYPE html>
<html lang="en">
<?php
define("BASE_URL", 'http://localhost:8080/LandingPage/src/');
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="<?=BASE_URL?>css/bootstrap.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/dashboard.css" rel="stylesheet">
    <?php
        echo file_get_contents("http://localhost:8080/LandingPage/api/seo/home");
    ?>
</head>
<body>
    <div id="app"></div>
    <script src="./template/dist/bundle.js"></script>
    <script src="<?=BASE_URL?>/js/jquery-3.3.1.slim.min.js"></script>
    <script src="<?=BASE_URL?>/js/bootstrap.min.js"></script>
    <script src="<?=BASE_URL?>/js/feather.min.js"></script>
    <script>
      feather.replace()
    </script>
</body>
</html>