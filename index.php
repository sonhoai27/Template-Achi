<!DOCTYPE html>
<html lang="vi">
<?php
define("BASE_URL", 'http://localhost:8080/Achi/template/public/');
?>
<base href="http://localhost:8080/Achi/template/public/">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="<?=BASE_URL?>css/bootstrap.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/sidebar-nav.min.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/animate.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/jquery.toast.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/style.css" rel="stylesheet">
    <link href="<?=BASE_URL?>css/megna-dark.css" rel="stylesheet">
    <script src="<?=BASE_URL?>js/jquery-3.3.1.slim.min.js"></script>
    <?php
        echo file_get_contents("http://localhost:8080/Achi/api/seo/home");
    ?>
    <style>
        :root {
            --admin-primary-color: #096dd9;
        }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i&amp;subset=vietnamese" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    <script src="<?=BASE_URL?>main.bundle.js"></script>
    <script src="<?=BASE_URL?>admin.bundle.js"></script>
    <script src="<?=BASE_URL?>client.bundle.js"></script>
    <script src="<?=BASE_URL?>js/bootstrap.min.js"></script>
</body>
</html>