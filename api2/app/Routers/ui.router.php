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
$app->get('/ui/all-ui', function(Request $request, Response $response){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_ui')->all(
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
$app->post('/ui/add-element-to-detail-ui', function(Request $request, Response $response){
   if(isset_not_null($request->getParsedBody(), 'detail_ui_id_element')){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_ui')->add_element_to_detail_ui(
                $this->get('db'),
                $request->getParsedBody()
        )
      ));
   }
});
$app->post('/ui/add-css/{id}', function(Request $request, Response $response, $args){
  if(isset_not_null($request->getParsedBody(), 'detail_ui_css')){
   return $response->withJson(array(
       "status"=>200,
       "list"=>$this->get('db_ui')->edit_css(
               $this->get('db'),
               $request->getParsedBody(),
               $args['id']
       )
     ));
  }
});
$app->delete('/ui/delete-element-of-detail-ui/{idUI}/{idDetailUI}', function(Request $request, Response $response, $args){
  if(isset($args['idUI']) && isset($args['idDetailUI'])){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_ui')->delete_element_of_detail_ui(
          $this->get('db'),
          $args['idUI'],
          $args['idDetailUI']
      )
    ));
  }
});

// landing page
$app->get('/ui/detail-ui-source/{idUI}/{idSource}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_ui')->detail_ui_source(
              $this->get('db'),
              $args['idUI'],
              $args['idSource']
      )
    ));
});

$app->post('/ui/add-update-content-element', function(Request $request, Response $response, $args){
  $body = $request->getParsedBody();
  if(isset($body['content_element_id']) && $body['content_element_id'] != null){
    $content_element_id = $body['content_element_id'];
    unset($body['content_element_id']);
    unset($body['idVirtualElement']);
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_ui')->update_content_element(
                $this->get('db'),
                $body,
                $content_element_id
        )
    ));
  }else {
    unset($body['content_element_id']);
    unset($body['idVirtualElement']);
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_ui')->add_content_element(
              $this->get('db'),
              $body
      )
  ));
  }
});