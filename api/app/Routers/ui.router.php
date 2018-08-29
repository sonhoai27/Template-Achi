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