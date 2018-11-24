<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/traffic.model.php");
$container['db_traffic'] = new TrafficModel();
$app->post('/thong-ke', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'traffic_url')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_traffic')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});

// thong ke blog
$app->get('/thong-ke/blog/danh-sach-bai-viet', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->blogListToDay($this->get('db')),
      "counter"=>$this->get('db_traffic')->countBlogToDay($this->get('db'))
      ));
});
$app->post('/thong-ke/blog/theo-tuan', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->blogListWeek(
              $this->get('db'),
        $request->getParsedBody()['days']
    )));
});
$app->post('/thong-ke/blog/theo-thang', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->blogListMonth(
              $this->get('db'),
        $request->getParsedBody()
    )));
});

// thong ke toàn trang
$app->get('/thong-ke/web/danh-sach-url', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->webListToDay($this->get('db')),
      "counter"=>$this->get('db_traffic')->countWebToDay($this->get('db'))
      ));
});
$app->post('/thong-ke/web/theo-tuan', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->webListWeek(
              $this->get('db'),
        $request->getParsedBody()['days']
    )));
});
$app->post('/thong-ke/web/theo-thang', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->webListMonth(
              $this->get('db'),
        $request->getParsedBody()
    )));
});

// thong ke nhan qua
$app->get('/thong-ke/qua-tang/tong-quat', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->giftListToDay($this->get('db'))
      ));
});
$app->post('/thong-ke/qua-tang/theo-tuan', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->giftListWeek(
              $this->get('db'),
        $request->getParsedBody()['days']
    )));
});
$app->post('/thong-ke/qua-tang/theo-thang', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->giftListMonth(
              $this->get('db'),
        $request->getParsedBody()
    )));
});

// dk khoa hoc
$app->get('/thong-ke/khoa-hoc/tong-quat', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->sourceListToDay($this->get('db'))
      ));
});
$app->post('/thong-ke/khoa-hoc/theo-tuan', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->sourceListWeek(
              $this->get('db'),
        $request->getParsedBody()['days']
    )));
});
$app->post('/thong-ke/khoa-hoc/theo-thang', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->sourceListMonth(
              $this->get('db'),
        $request->getParsedBody()
    )));
});

$app->get('/thong-ke/khoa-hoc/thoi-khoa-bieu', function(Request $request, Response $response){
    return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_traffic')->allSourceOrder($this->get('db'))
      ));
});