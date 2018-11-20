<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\gift.model.php");
$container['db_gift'] = new GiftModel();
$app->get('/gift/all/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->all(
                $this->get('db'),
                $args['page']
        ),
      ));
});
$app->get('/gift/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/gift', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'gift_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/gift/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'gift_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/gift/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});