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
$app->post('/blog/all/{page}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_blog')->filter(
            $this->get('db'),
            $args['page'],
            $request->getParsedBody()
    ),
  "count"=>$this->get('db_blog')->count_by_filter(
       $this->get('db'),
       $request->getParsedBody())
  ));
});
$app->put('/blog/views', function(Request $request, Response $response, $args){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_blog')->edit_views(
              $this->get('db'),
              $request->getParsedBody()['key']
      )
    ));
});
$app->get('/blog/category/{id}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_blog')->category(
            $this->get('db'),
            $args['id']
    )
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
$app->post('/blog/detail-alias', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_blog')->detail_alias(
                $this->get('db'),
                $request->getParsedBody()['key']
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
$app->get('/blog/all/home', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_blog')->home(
            $this->get('db')
    )
  ));
});
$app->get('/blog/search/{key}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_blog')->search(
            $this->get('db'),
            $args['key']
    )
  ));
});