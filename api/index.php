<?php
$sitePath = realpath(dirname(__FILE__));
define("__SITE_PATH", $sitePath);
define("BASE_URL", 'http://nguyenminhchi.com/api/');
require(__SITE_PATH.'/shared/INIT.php');
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$configuration = [
  'settings' => [
      'displayErrorDetails' => true,
  ],
];
$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);
$container = $app->getContainer();
$container['db'] = Database::getInstance();
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin','*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});
require(__SITE_PATH.'/app/Routers/auth.router.php');
require(__SITE_PATH.'/app/Routers/file.router.php');
require(__SITE_PATH.'/app/Routers/seo.router.php');
require(__SITE_PATH.'/app/Routers/blog.router.php');
require(__SITE_PATH.'/app/Routers/ui.router.php');
require(__SITE_PATH.'/app/Routers/source.router.php');
require(__SITE_PATH.'/app/Routers/author.router.php');
require(__SITE_PATH.'/app/Routers/category.router.php');
require(__SITE_PATH.'/app/Routers/status.router.php');
require(__SITE_PATH.'/app/Routers/video.router.php');
require(__SITE_PATH.'/app/Routers/gift.router.php');
require(__SITE_PATH.'/app/Routers/order-ebook.router.php');
require(__SITE_PATH.'/app/Routers/contact.router.php');
require(__SITE_PATH.'/app/Routers/page.router.php');
require(__SITE_PATH.'/app/Routers/video-source.router.php');
require(__SITE_PATH.'/app/Routers/traffic.router.php');
$app->run();