<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."\models\source.model.php");
include_once(__SITE_PATH."\models\ui-source.model.php");
$container['db_source'] = new SourceModel();
$container['db_ui'] = new UISourceModel();
$app->get('/source/all-source/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->all(
            $this->get('db'),
            $args['page']
        )
    ));
});
$app->get('/source/detail-source/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->detail(
            $this->get('db'),
            $args['id']
        )
    ));
});
$app->post('/source/add-source', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'source_title')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->add(
              $this->get('db'),
              $request->getParsedBody()
          )
        ));
    }
});
$app->put('/source/{id}', function(Request $request, Response $response, $args){
   
});
$app->delete('/source/{id}', function(Request $request, Response $response, $args){
   
});
//sche
$app->post('/source/add-sche', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'source_sche_id_source')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->add_sche(
              $this->get('db'),
              $request->getParsedBody()
          )
        ));
    }
});
$app->get('/source/all-sche/{idSource}', function(Request $request, Response $response, $args){
    if(isset($args['idSource'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->all_sche(
                $this->get('db'),
                $args['idSource']
            )
          ));
    }
});
$app->get('/source/detail-sche/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->detail_sche(
                $this->get('db'),
                $args['id']
            )
          ));
    }
});
$app->put('/source/update-sche/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->update_sche(
                $this->get('db'),
                $args['id'],
                $request->getParsedBody()
            )
          ));
    }
});


// type date source
$app->post('/source/add-date-sche', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'date_source_id_sche')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->add_date_sche(
              $this->get('db'),
              $request->getParsedBody()
          )
        ));
    }
});
$app->get('/source/all-date-sche/{idSche}', function(Request $request, Response $response, $args){
    if(isset($args['idSche'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->all_date_sche(
                $this->get('db'),
                $args['idSche']
            )
          ));
    }
});
$app->get('/source/detail-date-sche/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->detail_date_sche(
                $this->get('db'),
                $args['id']
            )
          ));
    }
});
$app->put('/source/update-date-sche/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->update_date_sche(
                $this->get('db'),
                $args['id'],
                $request->getParsedBody()
            )
          ));
    }
});


// order
$app->get('/source/order/all/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->all_source_order(
            $this->get('db'),
            $args['page']
        ),
        "count"=>$this->get('db_source')->count_source_order($this->get('db'))
    ));
});
$app->get('/source/order/sche/{idSche}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->all_source_order_by_sche(
            $this->get('db'),
            $args['idSche']
        )
    ));
});
$app->get('/source/sche/all', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->all_sche_order(
            $this->get('db')
        )
    ));
});
$app->get('/source/order/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->detail_source_order(
            $this->get('db'),
            $args['id']
        )
    ));
});
$app->post('/source/order', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'source_order_email')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->add_source_order(
              $this->get('db'),
              $request->getParsedBody()
          )
        ));
    }else {
        return $response->withJson(array(
            "status"=>200,
            "list"=>"Error"
        ), 403);
    }
});
$app->put('/source/order/{id}', function(Request $request, Response $response, $args){
});
$app->delete('/source/order/{id}', function(Request $request, Response $response, $args){
});
