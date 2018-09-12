<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/category.model.php");
$container['db_category'] = new CategoryModel();
$app->get('/category', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_category')->all(
                $this->get('db')
        ),
      ));
});
$app->get('/category/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_category')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/category', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'category_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_category')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/category/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'category_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_category')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/category/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_category')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});