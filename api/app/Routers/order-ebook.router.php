<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/order-ebook.model.php");
$container['db_order_ebook'] = new OrderEbookModel();
$app->get('/order-ebook/all/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_order_ebook')->all(
            $this->get('db'),
            $args['page']
        ),
        "count"=>$this->get('db_order_ebook')->count($this->get('db'))
    ));
});
$app->get('/order-ebook/export', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_order_ebook')->export(
            $this->get('db')
        ),
    ));
});
$app->get('/order-ebook/filter/package/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_order_ebook')->filter(
            $this->get('db'),
            $args['id']
        ),
    ));
});
$app->get('/order-ebook/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_order_ebook')->detail(
            $this->get('db'),
            $args['id']
        ),
    ));
});
$app->post('/order-ebook', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'order_ebook_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_order_ebook')->add(
                $this->get('db'),
                $request->getParsedBody()
            )
        ));
    }
});
$app->put('/order-ebook/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'order_ebook_id')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_order_ebook')->edit(
                $this->get('db'),
                $args['id'],
                $request->getParsedBody()
            )
        ));
    }
});
$app->delete('/order-ebook/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_order_ebook')->delete(
                $this->get('db'),
                $args['id']
            )
        ));
    }
});


//package
$app->get('/package-ebook', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_order_ebook')->all_package(
            $this->get('db')
        ),
    ));
});
$app->post('/package-ebook', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'package_ebook_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_order_ebook')->add_package(
                $this->get('db'),
                $request->getParsedBody()
            )
        ));
    }
});
$app->put('/package-ebook/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'package_ebook_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_order_ebook')->edit_package(
                $this->get('db'),
                $args['id'],
                $request->getParsedBody()
            )
        ));
    }
});
