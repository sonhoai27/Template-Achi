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
        <link href="<?=BASE_URL?>css/swiper.min.css" rel="stylesheet">
        <script src="<?=BASE_URL?>js/jquery-3.3.1.slim.min.js"></script>
        <link href="<?=BASE_URL?>css/cdn.css" rel="stylesheet">
        <meta name="robots" content="noindex, nofollow">
        <script src="https://cdn.ckeditor.com/4.10.1/full/ckeditor.js"></script>
        <?php
        echo file_get_contents("http://localhost:8080/Achi/api/seo/home");
    ?>
            <style>
                :root {
                    --admin-primary-color: #096dd9;
                    font-family: 'Montserrat', sans-serif!important;
                    font-weight: 500!important;
                }

                .lds-spinner {
                    color: official;
                    display: inline-block;
                    position: relative;
                    width: 64px;
                    height: 64px;
                }

                .lds-spinner div {
                    transform-origin: 32px 32px;
                    animation: lds-spinner 1.2s linear infinite;
                }

                .lds-spinner div:after {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 3px;
                    left: 29px;
                    width: 5px;
                    height: 14px;
                    border-radius: 20%;
                    background: #fff;
                }

                .lds-spinner div:nth-child(1) {
                    transform: rotate(0deg);
                    animation-delay: -1.1s;
                }

                .lds-spinner div:nth-child(2) {
                    transform: rotate(30deg);
                    animation-delay: -1s;
                }

                .lds-spinner div:nth-child(3) {
                    transform: rotate(60deg);
                    animation-delay: -0.9s;
                }

                .lds-spinner div:nth-child(4) {
                    transform: rotate(90deg);
                    animation-delay: -0.8s;
                }

                .lds-spinner div:nth-child(5) {
                    transform: rotate(120deg);
                    animation-delay: -0.7s;
                }

                .lds-spinner div:nth-child(6) {
                    transform: rotate(150deg);
                    animation-delay: -0.6s;
                }

                .lds-spinner div:nth-child(7) {
                    transform: rotate(180deg);
                    animation-delay: -0.5s;
                }

                .lds-spinner div:nth-child(8) {
                    transform: rotate(210deg);
                    animation-delay: -0.4s;
                }

                .lds-spinner div:nth-child(9) {
                    transform: rotate(240deg);
                    animation-delay: -0.3s;
                }

                .lds-spinner div:nth-child(10) {
                    transform: rotate(270deg);
                    animation-delay: -0.2s;
                }

                .lds-spinner div:nth-child(11) {
                    transform: rotate(300deg);
                    animation-delay: -0.1s;
                }

                .lds-spinner div:nth-child(12) {
                    transform: rotate(330deg);
                    animation-delay: 0s;
                }

                @keyframes lds-spinner {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            </style>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i&amp;subset=vietnamese"
                rel="stylesheet">
    </head>

    <body>
        <div id="root"></div>
        <script src="<?=BASE_URL?>js/swiper.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="<?=BASE_URL?>main.bundle.js" type="text/javascript" charset="utf-8"></script>
        <script src="<?=BASE_URL?>admin.bundle.js" type="text/javascript" charset="utf-8"></script>
        <script src="<?=BASE_URL?>client.bundle.js" type="text/javascript" charset="utf-8"></script>
        <script src="<?=BASE_URL?>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
    </body>

</html>