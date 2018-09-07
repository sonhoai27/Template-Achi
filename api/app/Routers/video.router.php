<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\video.model.php");
$container['db_video'] = new VideoModel();
$app->get('/video/all/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_video')->all(
                $this->get('db'),
                $args['page']
        ),
      ));
});
$app->get('/video/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_video')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/video', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'video_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_video')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/video/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'video_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_video')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/video/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_video')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});