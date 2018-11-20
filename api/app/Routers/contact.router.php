<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/gift.model.php");
include_once(__SITE_PATH."/shared/xlsxwriter.php");
$container['db_gift'] = new GiftModel();
$app->get('/contact/all/{page}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->all_email_pg(
                $this->get('db'),
                $args['page']
        ),
        "count"=>$this->get('db_gift')->count_email(
                $this->get('db')
        )
      ));
});
$app->get('/contact/without-page', function(Request $request, Response $response){
      return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->get_emails(
                $this->get('db')
        ),
      ));
});
$app->get('/contact/{id}', function(Request $request, Response $response, $args){
   
});
$app->post('/contact', function(Request $request, Response $response){
  if(isset_not_null($request->getParsedBody(), 'email_email')){
      return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->add_email(
                $this->get('db'),
          $request->getParsedBody()
        ),
      )); 
  }
});
$app->put('/contact/{id}', function(Request $request, Response $response, $args){
   
});
$app->delete('/contact/{id}', function(Request $request, Response $response, $args){
 return $response->withJson(array(
      "status"=>200,
      "list"=>$this->get('db_gift')->delete_email(
              $this->get('db'),
        $args['id']
      ),
    ));
});
$app->get('/contact/export/excel/{date}', function(Request $request, Response $response, $args){
        $filename = 'file'.".xlsx";
        header("Content-type: application/octet-stream");
        header('Content-disposition: attachment; filename="'.XLSXWriter::sanitize_filename($filename).'"');
        header("Pragma: no-cache");
        header("Expires: 0");
        $data = $this->get('db_gift')->filter_email(
                $this->get('db'),
                $args['date']
        );
//         echo "<pre>";
//   print_r($row);
        $header = array(
            'HỌ VÀ TÊN'=>'string',
            'SỐ ĐIỆN THOẠI'=>'string',
            'EMAIL'=>'string',
            'THÔNG TIN'=>'string',
            'NGÀY TẠO'=>'string'
        );

        $writer = new XLSXWriter();
        $writer->writeSheetHeader('Sheet1', $header);
        foreach($data as $row){
            $writer->writeSheetRow('Sheet1', $row);
        }
        $writer->setAuthor('Max Power');
        $writer->writeToStdOut();
});