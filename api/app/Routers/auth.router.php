<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH.'/app/Middleware/auth.middleware.php');
$app->post('/auth/check', function(Request $request, Response $response){
  return $response->getBody()->write($request->getAttribute('token'));
})->add($checkToken);
$app->post('/auth/login', function(Request $request, Response $response){
  return $response->getBody()->write($request->getAttribute('token'));
})->add($checkLogin);