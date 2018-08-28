<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\ui-source.model.php");
$container['db_ui'] = new UISourceModel();
$app->get('/ui/element', function(Request $request, Response $response){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_ui')->all_element(
            $this->get('db')
    )
  ));
});
$app->get('/ui/detail-ui/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_ui')->detail_ui(
                $this->get('db'),
                $args['id']
        )
      ));
});
$app->post('/ui', function(Request $request, Response $response){
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