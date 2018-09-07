<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\author.model.php");
$container['db_author'] = new AuthorModel();
$app->get('/author', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_author')->all(
                $this->get('db')
        ),
      ));
});
$app->get('/author/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_author')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/author', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'author_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_author')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/author/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'author_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_author')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/author/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_author')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});