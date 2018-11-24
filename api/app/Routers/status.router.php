<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\status.model.php");
$container['db_status'] = new StatusModel();
$app->get('/status', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_status')->all(
                $this->get('db')
        ),
      ));
});
$app->get('/status/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_status')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/status', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'status_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_status')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/status/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'status_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_status')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/status/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_status')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});