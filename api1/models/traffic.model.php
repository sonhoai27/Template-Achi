<?php
class TrafficModel {
  function add($db,$form) {
     return $db->insert($form, 'achi_traffic');
  }
  
  
//   blog
  function blogListToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT *, count(`traffic_url`) as counter FROM `achi_traffic` 
    where `traffic_type` = 1 and
    DAY(traffic_created_date) = '.$currentDate['mday'].' and
    MONTH(traffic_created_date) = '.$currentDate['mon'].' and
    YEAR(traffic_created_date) = '.$currentDate['year'].' 
    GROUP by `traffic_url` order by counter desc limit 0, 20');
        return $db->fetch_object();
  }
  
   function countBlogToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
    where `traffic_type` = 1 and
    DAY(traffic_created_date) = '.$currentDate['mday'].' and
    MONTH(traffic_created_date) = '.$currentDate['mon'].' and
    YEAR(traffic_created_date) = '.$currentDate['year']);
    return $db->fetch_object(true)->counter;
  }
  
  function blogListWeek($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countBlogByDate($db,$form,$list);
  }
  
  function countBlogByDate($db,$listDate, $arr){
    for($i = 0; $i < count($listDate); $i++){
      $currentDate = explode("/", $listDate[$i]);
      $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
      where `traffic_type` = 1 and
      DAY(traffic_created_date) = '.$currentDate[0].' and
      MONTH(traffic_created_date) = '.$currentDate[1].' and
      YEAR(traffic_created_date) = '.$currentDate[2]);
      $temp = array($listDate[$i],$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  function blogListMonth($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countBlogByDateForMonth($db,$form,$list);
  }
  
  function countBlogByDateForMonth($db,$form, $arr){
    for($i = 1; $i <= $form['lastDay']; $i++){
      $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
      where `traffic_type` = 1 and
      DAY(traffic_created_date) = '.$i.' and
      MONTH(traffic_created_date) = '.$form['month'].' and
      YEAR(traffic_created_date) = '.$form['year']);
      $temp = array($i,$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  //   web
  function webListToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT *, count(`traffic_url`) as counter FROM `achi_traffic` 
    where `traffic_type` = 0 and
    DAY(traffic_created_date) = '.$currentDate['mday'].' and
    MONTH(traffic_created_date) = '.$currentDate['mon'].' and
    YEAR(traffic_created_date) = '.$currentDate['year'].' 
    GROUP by `traffic_url` order by counter desc limit 0, 20');
        return $db->fetch_object();
  }
  
   function countWebToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
    where `traffic_type` = 0 and
    DAY(traffic_created_date) = '.$currentDate['mday'].' and
    MONTH(traffic_created_date) = '.$currentDate['mon'].' and
    YEAR(traffic_created_date) = '.$currentDate['year']);
    return $db->fetch_object(true)->counter;
  }
  
  function webListWeek($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countWebByDate($db,$form,$list);
  }
  
  function countWebByDate($db,$listDate, $arr){
    for($i = 0; $i < count($listDate); $i++){
      $currentDate = explode("/", $listDate[$i]);
      $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
      where `traffic_type` = 0 and
      DAY(traffic_created_date) = '.$currentDate[0].' and
      MONTH(traffic_created_date) = '.$currentDate[1].' and
      YEAR(traffic_created_date) = '.$currentDate[2]);
      $temp = array($listDate[$i],$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  function webListMonth($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countWebByDateForMonth($db,$form,$list);
  }
  
  function countWebByDateForMonth($db,$form, $arr){
    for($i = 1; $i <= $form['lastDay']; $i++){
      $db->query('SELECT count(`traffic_url`) as counter FROM `achi_traffic` 
      where `traffic_type` = 0 and
      DAY(traffic_created_date) = '.$i.' and
      MONTH(traffic_created_date) = '.$form['month'].' and
      YEAR(traffic_created_date) = '.$form['year']);
      $temp = array($i,(int)$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  //   nhan qua
  function giftListToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT count(`send_gift_id`) as counter FROM `achi_send_gift` 
    where `send_gift_counter` = 0 and
    DAY(created_date) = '.$currentDate['mday'].' and
    MONTH(created_date) = '.$currentDate['mon'].' and
    YEAR(created_date) = '.$currentDate['year']);
        return $db->fetch_object(true)->counter;
  }
  
  function giftListWeek($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countGiftByDate($db,$form,$list);
  }
  
  function countGiftByDate($db,$listDate, $arr){
    for($i = 0; $i < count($listDate); $i++){
      $currentDate = explode("/", $listDate[$i]);
      $db->query('SELECT count(`send_gift_id`) as counter FROM `achi_send_gift` 
      where `send_gift_counter` = 0 and
      DAY(created_date) = '.$currentDate[0].' and
      MONTH(created_date) = '.$currentDate[1].' and
      YEAR(created_date) = '.$currentDate[2]);
      $temp = array($listDate[$i],(int)$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  function giftListMonth($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countGiftByDateForMonth($db,$form,$list);
  }
  
  function countGiftByDateForMonth($db,$form, $arr){
    for($i = 1; $i <= $form['lastDay']; $i++){
      $db->query('SELECT count(`send_gift_id`) as counter FROM `achi_send_gift` 
      where `send_gift_counter` = 0 and
      DAY(created_date) = '.$i.' and
      MONTH(created_date) = '.$form['month'].' and
      YEAR(created_date) = '.$form['year']);
      $temp = array($i,$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  
  //   khoa hoc
  function sourceListToDay($db){
    $currentDate=getdate(date("U"));
    $db->query('SELECT count(`source_order_id`) as counter FROM `achi_source_order` where
    DAY(source_order_created_date) = '.$currentDate['mday'].' and
    MONTH(source_order_created_date) = '.$currentDate['mon'].' and
    YEAR(source_order_created_date) = '.$currentDate['year']);
        return $db->fetch_object(true)->counter;
  }
  
  function sourceListWeek($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countSourceByDate($db,$form,$list);
  }
  
  function countSourceByDate($db,$listDate, $arr){
    for($i = 0; $i < count($listDate); $i++){
      $currentDate = explode("/", $listDate[$i]);
      $db->query('SELECT count(`source_order_id`) as counter FROM `achi_source_order` where
      DAY(source_order_created_date) = '.$currentDate[0].' and
      MONTH(source_order_created_date) = '.$currentDate[1].' and
      YEAR(source_order_created_date) = '.$currentDate[2]);
      $temp = array($listDate[$i],$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  function sourceListMonth($db, $form){
    $list = array();
    array_push($list, array("Ngày", "Số lượng"));
    return $this->countSourceByDateForMonth($db,$form,$list);
  }
  
  function countSourceByDateForMonth($db,$form, $arr){
    for($i = 1; $i <= $form['lastDay']; $i++){
      $db->query('SELECT count(`source_order_id`) as counter FROM `achi_source_order` where
      DAY(source_order_created_date) = '.$i.' and
      MONTH(source_order_created_date) = '.$form['month'].' and
      YEAR(source_order_created_date) = '.$form['year']);
      $temp = array($i,$db->fetch_array(true)['counter']);
      array_push($arr,$temp);
    }
    return $arr;
  }
  
  
  function allSourceOrder($db){
    $db->query('SELECT source_title, source_sche_khoa, COUNT(source_sche_id) as counter FROM `achi_source_order` 
    LEFT OUTER JOIN achi_source_sche on `source_order_id_source` = achi_source_sche.source_sche_id 
    LEFT OUTER JOIN achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id GROUP BY achi_source_sche.source_sche_id');
    return $db->fetch_object();
  }
}