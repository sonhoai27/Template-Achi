<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/video-source.model.php");
$container['db_videosource'] = new VideoSourceModel();
$app->get('/video-source/all/{idSource}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_videosource')->all(
                $this->get('db'),
                $args['idSource']
        )
      ));
});
$app->get('/video-source/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_videosource')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->post('/video-source', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'source_video_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_videosource')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/video-source/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'source_video_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_videosource')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/video-source/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_videosource')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});