<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/gift.model.php");
include_once(__SITE_PATH."/shared/xlsxwriter.php");
$container['db_gift'] = new GiftModel();
$app->get('/gift/all/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->all(
                $this->get('db'),
                $args['page']
        ),
      ));
});
$app->get('/gift/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->detail(
                $this->get('db'),
                $args['id']
        ),
      ));
});
$app->get('/gift/detail/active', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->detail_active(
                $this->get('db')
        ),
      ));
});
$app->get('/gift/detail/alias/{idGift}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->detail_gift_alias(
                $this->get('db'),
          $args['idGift']
        ),
      ));
});
$app->post('/gift', function(Request $request, Response $response){
    if(isset_not_null($request->getParsedBody(), 'gift_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->add(
                    $this->get('db'),
                    $request->getParsedBody()
            )
          ));
       }
});
$app->put('/gift/{id}', function(Request $request, Response $response, $args){
    if(isset_not_null($request->getParsedBody(), 'gift_name')){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->edit(
                    $this->get('db'),
                    $args['id'],
                    $request->getParsedBody()
            )
          ));
       }
});
$app->delete('/gift/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_gift')->delete(
                    $this->get('db'),
                    $args['id']
            )
          ));
       }
});

// send gift
$app->post('/send-gift', function(Request $request, Response $response){
      include_once __SITE_PATH. '/shared/' . 'mail.php';
      $body = $request->getParsedBody();
      $listMails = $body['listEmails'];
      $mails = array();
      $names = array();
      $listNameEmails = "'".$listMails[0]['value']."'";
      $listQueries = " WHEN '".$listMails[0]['value']."' THEN (email_count + 1) ";
      for($i = 1; $i < count($listMails); $i++){
        array_push($names, $listMails[$i]['name']);
        array_push($mails, $listMails[$i]['value']);
        $listNameEmails .=",'".$listMails[$i]['value']."'";
        $listQueries .= " WHEN '".$listMails[$i]['value']."' THEN (email_count + 1) ";
      }
      if(Mailer(
        $listMails[0]['value'],
        $listMails[0]['name'],
        $body['name'],
        $body['content'],
        $mails,
        $names,
        1
      ) == "YES"){
        $sql = "UPDATE achi_email 
                SET `email_count` = CASE email_email 
                ".$listQueries." END 
                WHERE email_email IN(".$listNameEmails.")";
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_gift')->send_gift(
                $this->get('db'),
                $sql
          )
        ));
      }else {
        return $response->withJson(array(
          "status"=>403,
          "list"=>"error"
        ), 403);
      }
});


// manager send gift
$app->get('/goi-qua-tang/count', function(Request $request, Response $response){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->counter_send_gift(
                $this->get('db')
        )
      ));
});
$app->get('/goi-qua-tang/customers/{page}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->customers(
                $this->get('db'),
                $args['page']
        ),
        "count"=>$this->get('db_gift')->all_customers(
                $this->get('db')
        )
      ));
});
$app->delete('/goi-qua-tang/customers/{id}', function(Request $request, Response $response, $args){
    return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_gift')->delete_customers(
                $this->get('db'),
                $args['id']
        )
      ));
});
$app->get('/goi-qua-tang/all', function(Request $request, Response $response){
        $filename = 'file'.".xlsx";
        header("Content-type: application/octet-stream");
        header('Content-disposition: attachment; filename="'.XLSXWriter::sanitize_filename($filename).'"');
        header("Pragma: no-cache");
        header("Expires: 0");
        $data = $this->get('db_gift')->all_send_gift(
                $this->get('db')
        );
        $header = array(
            'HỌ VÀ TÊN'=>'string',
            'EMAIL'=>'string',
            'SỐ ĐIỆN THOẠI'=>'string',
            'QUÀ TẶNG'=>'string',
            'SỐ LẦN'=>'number'
        );

        $writer = new XLSXWriter();
        $writer->writeSheetHeader('Sheet1', $header);
        foreach($data as $row){
            $writer->writeSheetRow('Sheet1', $row);
        }
        $writer->setAuthor('NMC');
        $writer->writeToStdOut();
});
$app->post('/goi-qua-tang/add/', function(Request $request, Response $response, $args){
  include_once __SITE_PATH. '/shared/' . 'mail.php';
  $user = $request->getParsedBody()['user'];
  $qt = $request->getParsedBody()['gift'];
  $contentMail = 'Mến chào '.$user['send_gift_name'].',<br>
                  Anh là Nguyễn Minh Chí - Mr.Share, <b>chuyên gia đào tạo bạn trẻ sống xứng đáng.</b><br>
                  <br>Chúc mừng '.$user['send_gift_name'].' đã đăng ký thành công <b>download MIỄN PHÍ</b> tài liệu: <a href="'.$qt['gift_uri_file'].'">'.$qt['gift_name'].'</a>.
                  <br>Dưới đây là đường link download.
                  => <a href="'.$qt['gift_uri_file'].'">Download tài liệu của em tại đây</a>
                  <br><br><div>============</div><br>
                 <br><br> ★ Liên hệ hỗ trợ ★<br>
                  Nguyễn Minh Chí - Người phụng sự tuổi trẻ Việt<br>
                  <ul>
                  <li>6 năm kinh nghiệm giáo dục, huấn luyện đào tạo gần 10.000 bạn trẻ.</li>
                  <li>Chủ tịch & Trainer: Học viện thế hệ Sống xứng đáng.</li>
                  <li>Tác giả: Cuốn sổ sống xứng đáng.</li>
                  </ul><br>
                  Website: <a href="http://nguyenminhchi.com">nguyenminhchi.com</a><br>
                  Fanpage: <a href="https://www.facebook.com/NguyenMinhChi.MrShare/">Nguyễn Minh Chí - Mr.Share</a><br>
                  Youtube:  <a href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1">Nguyễn Minh Chí - Mr.Share</a><br>';
  if($this->get('db_gift')->add_send_gift($this->get('db'),$user)){
    if(Mailer(
        $user['send_gift_email'],
        $user['send_gift_name'],
        '[DOWNLOAD FREE] - '.$qt['gift_name'],
        $contentMail
      ) == "YES"){
        return $response->withJson(array(
          "status"=>200,
          "list"=>'OK'
          )
        );
    }else {
      return $response->withJson(array(
        "status"=>403,
        "list"=>'ERROR'
        )
      );
    }
    }
//     if(Mailer(
//         $user['send_gift_email'],
//         $user['send_gift_name'],
//         '[DOWNLOAD FREE] - '.$qt['gift_name'],
//         $contentMail
//       ) == "YES"){
//       return $response->withJson(array(
//         "status"=>200,
//         "list"=>'OK'
//         )
//       );
//     }else {
//      return $response->withJson(array(
//         "status"=>403,
//         "list"=>'ERROR'
//         ), 403
//       );
//     }
});
$app->post('/goi-qua-tang/tang/{count}', function(Request $request, Response $response, $args){
      if(isset($args['count'])){
        include_once __SITE_PATH. '/shared/' . 'mail2.php';
        $body = $request->getParsedBody();
        $listMails = $this->get('db_gift')->filter_send_gift(
                $this->get('db'),
                $args['count']
        );
        $sum = count($listMails);
        $len = 90;
        $chan = explode(".",$sum/$len)[0];
        $le = $sum%$len;

        if($chan == 0){
            $chan = 1;
        }else if($le > 0 && $chan > 0){
            $chan = $chan + 1;
        }
        $tempSum = 0;
        for($z = 0; $z < $chan; $z++){
          if($z == 0){
            $tempSum = 0;
          }else {
            $tempSum = $tempSum+90;
          }
          $temp = array_slice($listMails, $tempSum, 90);
          $mails = array();
          $names = array();
          $listNameEmails = "'".$temp[0]['send_gift_email']."'";
          $listQueries = " WHEN '".$temp[0]['send_gift_email']."' THEN (send_gift_counter + 1) ";
          for($i = 1; $i < count($temp); $i++){
            array_push($names, $temp[$i]['send_gift_name']);
            array_push($mails, $temp[$i]['send_gift_email']);
            $listNameEmails .=",'".$temp[$i]['send_gift_email']."'";
            $listQueries .= " WHEN '".$temp[$i]['send_gift_email']."' THEN (send_gift_counter + 1) ";
          }
          print_r(Mailer(
            $temp[0]['send_gift_email'],
            $temp[0]['send_gift_name'],
            $body['titleEmail'],
            $body['contentEmail'],
            $mails,
            $names,
            1
          ));
//           if(Mailer(
//             $temp[0]['send_gift_email'],
//             $temp[0]['send_gift_name'],
//             $body['titleEmail'],
//             $body['contentEmail'],
//             $mails,
//             $names,
//             1
//           ) == "YES"){

//             $sql = "UPDATE achi_send_gift 
//                     SET `send_gift_counter` = CASE send_gift_email 
//                     ".$listQueries." END 
//                     WHERE send_gift_email IN(".$listNameEmails.")";
//             $this->get('db_gift')->send_gift(
//                     $this->get('db'),
//                     $sql
//               );
//           }
        }
      }else {
         return $response->withJson(array(
              "status"=>404,
              "list"=>""
              ), 403);
      }
});
$app->get('/goi-qua-tang/export/{count}', function(Request $request, Response $response, $args){
        $filename = 'file'.".xlsx";
        header("Content-type: application/octet-stream");
        header('Content-disposition: attachment; filename="'.XLSXWriter::sanitize_filename($filename).'"');
        header("Pragma: no-cache");
        header("Expires: 0");
        $data = $this->get('db_gift')->filter_send_gift(
                $this->get('db'),
                $args['count']
        );
        $header = array(
            'HỌ VÀ TÊN'=>'string',
            'SỐ ĐIỆN THOẠI'=>'string',
            'EMAIL'=>'string',
            'QUÀ TẴNG'=>'string',
            'SỐ LẦN'=>'string'
        );

        $writer = new XLSXWriter();
        $writer->writeSheetHeader('Sheet1', $header);
        foreach($data as $row){
            $writer->writeSheetRow('Sheet1', $row);
        }
        $writer->setAuthor('Max Power');
        $writer->writeToStdOut();
});
