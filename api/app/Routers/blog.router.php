<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$app->get('/blog', function(Request $request, Response $response){
  
});
$app->get('/blog/{id}', function(Request $request, Response $response, $args){
   
});
$app->post('/blog', function(Request $request, Response $response){
   
});
$app->put('/blog/{id}', function(Request $request, Response $response, $args){
   
});
$app->delete('/blog/{id}', function(Request $request, Response $response, $args){
   
});