<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\source.model.php");
include_once(__SITE_PATH."\models\ui-source.model.php");
$container['db_source'] = new SourceModel();
$container['db_ui'] = new UISourceModel();
$app->get('/source/all-source/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->all(
            $this->get('db'),
            $args['page']
        )
    ));
});
$app->get('/source/detail-source/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->detail(
            $this->get('db'),
            $args['id']
        )
    ));
});
$app->post('/source/add-source', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'source_title')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->add(
              $this->get('db'),
              $request->getParsedBody()
          )
        ));
    }
});
$app->put('/source/{id}', function(Request $request, Response $response, $args){
   
});
$app->delete('/source/{id}', function(Request $request, Response $response, $args){
   
});