<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/blog.model.php");
$container['db_blog'] = new BlogModel();
$app->get('/blog/{page}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_blog')->all(
            $this->get('db'),
            $args['page']
    ),
    "count"=>$this->get('db_blog')->count($this->get('db'))
  ));
});
$app->get('/blog/detail/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_blog')->detail(
                $this->get('db'),
                $args['id']
        )
      ));
});
$app->post('/blog', function(Request $request, Response $response){
   if(isset_not_null($request->getParsedBody(), 'blog_title')){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_blog')->add(
                $this->get('db'),
                $request->getParsedBody()
        )
      ));
   }
});
$app->put('/blog/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_blog')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/blog/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_blog')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});