<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/source.model.php");
include_once(__SITE_PATH."/models/ui-source.model.php");
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
$app->get('/source/filter-source/{type}', function(Request $request, Response $response, $args){
    if(isset($args['type'])){
      return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->filter_type(
            $this->get('db'),
            $args['type']
        )
    ));
    }
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
$app->put('/source/update-source/{id}', function(Request $request, Response $response, $args){
   if(isset_not_null($request->getParsedBody(), 'source_title')){
        return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->edit(
              $this->get('db'),
              $request->getParsedBody(),
              $args['id']
          )
        ));
    }
});
$app->delete('/source/delete-source/{id}', function(Request $request, Response $response, $args){
  return $response->withJson(array(
          "status"=>200,
          "list"=>$this->get('db_source')->delete_source_all_sche(
                $this->db,
                $args['id']
            )
        ));
});
// $app->get('/source/get-list-id-sche/{id}', function(Request $request, Response $response, $args){
//      if(isset($args['id'])){
//         $listId = "";
//         $sche = $this->get('db_source')->select_source_sche_2(
//                       $this->db,
//                       $args['id']
//                   );
//          for($i = 0; $i < count($sche); $i++){
//            if($i == 0){
//              $listId .= $sche[$i]['source_sche_id'];
//            }else {
//              $listId .= ','.$sche[$i]['source_sche_id'];
//            }
//          }
//         return $response->withJson(array(
//             "status"=>200,
//             "list"=>$listId
//           ));
//     }
// });
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
$app->delete('/source/delete-sche/{id}', function(Request $request, Response $response, $args){
    if(isset($args['id'])){
        return $response->withJson(array(
            "status"=>200,
            "list"=>$this->get('db_source')->delete_sche(
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
    include_once __SITE_PATH. '/shared/' . 'mail.php';
    if(isset_not_null($request->getParsedBody(), 'source_order_email')){
        $userInfo = $request->getParsedBody();
        $detailSche = $this->get('db_source')->detail_sche(
                $this->get('db'),
                $request->getParsedBody()['source_order_id_source']
            );
        $contentMail = '<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    p {
      margin: 0px;
    }
    .red {
      color: red;
    }
    .blue {
      color: blue;
    }
    .block p,
    .block b{
      display: inline-block;
    }
  </style>
</head>
<body>
<p>Chào bạn <b class="blue">'.$userInfo['source_order_ho'].' '.$userInfo['source_order_ten'].'</b>,</p><br/>
<div class="block">
<p>'.$detailSche->source_title.' xác nhận bạn đã đăng ký thành công 
khóa học: <b class="red">'.$detailSche->source_title.' - '.$detailSche->source_sche_khoa.'</b> <b class="red">'.$detailSche->source_date_sche.'</b> Tại <b class="red">'.$detailSche->source_sche_address.'</b>.</p>
</div>
<br/>
<ul>
  Bạn vui lòng kiểm tra lại thông tin đăng ký:
  <li>Email: '.$userInfo['source_order_email'].'</li>
  <li>Số điện thoại: '.$userInfo['source_order_number_phone'].'</li>
  <li>Họ: '.$userInfo['source_order_ho'].'</li>
  <li>Tên lót và tên: '.$userInfo['source_order_ten'].'</li>
  <li>Giới tính: '.$userInfo['source_order_gender'].'</li>
  <li>Ngày sinh: '.$userInfo['source_order_birthday'].'</li>
</ul>
<br/>
<p>Chúc mừng bạn, mức phí chính thức để tham dự chương trình này là <b class="blue">'.number_format($detailSche->source_sche_price).'đ</b>, còn 
mức phí dành riêng cho bạn là <b class="blue">'.number_format($detailSche->source_sche_price - $detailSche->source_sche_sale).'đ</b>. </p>
<br/><p>Lưu ý, số suất ưu đãi cho mức phí này rất giới hạn, chúng tôi <b>chỉ có thể đảm bảo</b> bạn được hưởng 
mức <b class="red">phí ưu đãi '.number_format($detailSche->source_sche_price - $detailSche->source_sche_sale).'đ</b> hiện 
tại khi bạn hoàn tất việc đóng phí <b class="red">trong vòng 2 ngày kể từ thời điểm email này được gửi đi</b>.</p>
<br/><p>Nếu sau <b>2 ngày</b> mà bạn <b>chưa hoàn tất việc đóng phí </b> và số suất ưu đãi cũng hết, thì bạn sẽ 
phải đóng phí theo mức phí mới do hệ thống tự động điều chỉnh khi hết suất ưu đãi.</p><br/>
<ol type="1" style="padding: 0; margin: 0;">
    <b class="blue">Hình thức đóng phí:</b><br/><br/>
    <p><i><b>Có 2 cách thanh toán, bạn thanh toán cách nào cũng được. Tuy nhiên BTC khuyến khích bạn thanh toán online để hoàn tất hồ sơ đăng ký nhanh nhất.</b></i></p><br>
    <li>Chuyển khoản qua ngân hàng theo thông tin dưới đây:
      <ul>
          <li>Ngân Hàng: VP Bank - Chi nhánh quận 10</li>
          <li>Chủ tài khoản: <b>Nguyễn Minh Chí</b></li>
          <li>Số tài khoản: <b>85461052</b></li>
          <li>Nội dung chuyển khoản: Họ tên_SĐT _Tên khóa học đăng ký​</li>
      </ul><br/>
      <i><b>Sau khi chuyển khoản</b>, bạn vui lòng gửi hình <b>hóa đơn thanh toán</b> đến message 
      fanpage Nguyễn Minh Chí – Mr.Share <a href="https://www.messenger.com/t/NguyenMinhChi.MrShare" target="_blank"><b>tại đây</b></a>: 
      để BTC kiểm tra hoàn tất thủ tục nhanh hơn.</i>
    </li><br>
    <li>Trực tiếp tại văn phòng: 26/3 Phan Chu Trinh, Hiệp Phú, Quận 9, Hồ Chí Minh.<br><br>
    Thời gian đóng: 17h - 21h thứ 2 đến thứ 7 hàng tuần. Gặp Ms Thư hoặc Ms Diễm..<br>
    Lưu ý: Trước khi đóng phí vui lòng alo trước tầm 15 phút khi lên văn phòng.<br>
    Liên hệ: Ms Thư: 0984 330 879 hoặc Ms Diễm: 037 246 2412
    </li>
</ol><br/>
<p class="blue"><b>Trường hợp chuyển khóa học</b></p><br/>
<p>Chuyển khóa trước ngày khai giảng 7 ngày: Học viên được hỗ trợ chuyển khóa không tính phí 1 lần.  </p><br/>
<p>Chuyển khóa trong vòng 7 ngày trước ngày khai giảng: đóng phí chuyển khóa 50.000đ/ lần.</p><br/>  

<p class="blue"><b>Hoàn trả phí đã đóng</b></p><br/>
<p>Phí đã đóng sẽ không được hoàn trả lại.</p> <br/>
<p>Ps: Vui lòng xác nhận email đồng ý giữ chỗ cho khóa <b class="red">'.$detailSche->source_title.' - '.$detailSche->source_sche_khoa.'</b></p>
<br/><p>Bạn có thể liên hệ trực tiếp qua email này hoặc liên hệ <b>0977545374</b> để được giải đáp thắc mắc.</p>
<br/><p>Chúc bạn trẻ sống xứng đáng. </p>
<br/><p>Hẹn gặp bạn tại khóa học thú vị.</p>
</body>
</html>';
        if($this->get('db_source')->add_source_order(
              $this->get('db'),
              $request->getParsedBody()) == 0){
          Mailer(
            $userInfo['source_order_email'],
            $userInfo['source_order_ho'].' '.$userInfo['source_order_ten'],
            $detailSche->source_title.' - '.$detailSche->source_sche_khoa.' - Xác nhận đăng ký tham gia khóa học',
            $contentMail
          );
          return $response->withJson(array(
            "status"=>200,
            "list"=> 'ok'
            ));
        }
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
  return $response->withJson(array(
        "status"=>200,
        "list"=>$this->get('db_source')->delete_source_order(
            $this->get('db'),
            $args['id']
        )
    ));
});
