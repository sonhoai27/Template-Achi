<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/page.model.php");
$container['db_page'] = new PageModel();
$app->get('/page/detail/{idPage}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
    "status"=>200,
    "list"=>$this->get('db_page')->list_ui(
            $this->get('db'),
            $args['idPage']
    )
  ));
});
$app->post('/page/add-update-content-page', function(Request $request, Response $response, $args){
  $body = $request->getParsedBody();
  if(isset($body['content_page_id']) && $body['content_page_id'] != null){
    $content_page_id = $body['content_page_id'];
    unset($body['content_page_id']);
    unset($body['idVirtualElement']);
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_page')->update_content_page(
                $this->get('db'),
                $body,
                $content_page_id
        )
    ));
  }else {
    unset($body['content_page_id']);
    unset($body['idVirtualElement']);
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_page')->add_content_page(
              $this->get('db'),
              $body
      )
  ));
  }
});