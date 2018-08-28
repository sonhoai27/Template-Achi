<?php
$sitePath = realpath(dirname(__FILE__));
define("__SITE_PATH", $sitePath);
define("BASE_URL", 'http://localhost:8080/Achi/api/');
require(__SITE_PATH.'\shared\INIT.php');
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
$app->add(function ($req, $res, $next) {
  $response = $next($req, $res);
  return $response
          ->withHeader('Access-Control-Allow-Origin', '*')
          ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
          ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
require(__SITE_PATH.'..\app\Routers\auth.router.php');
require(__SITE_PATH.'..\app\Routers\file.router.php');
require(__SITE_PATH.'..\app\Routers\seo.router.php');
require(__SITE_PATH.'..\app\Routers\blog.router.php');
require(__SITE_PATH.'..\app\Routers\ui.router.php');
$app->get('/', function(Request $request, Response $response){
  $this->get('db')->query('SELECT * FROM `achi_status` order by status_id desc');
  print_r($this->get('db')->fetch_array());
});
$app->run();