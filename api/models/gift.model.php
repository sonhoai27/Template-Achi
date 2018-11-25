<?php
class GiftModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_gift');
    }
    function delete($db,$id) {
        return $db->delete('achi_gift', ' gift_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_gift', ' gift_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_gift order by achi_gift.gift_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function get_gifts($db){
        $db->query('select * from achi_gift order by achi_gift.gift_id desc ');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(gift_id) as count from achi_gift order by gift_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_gift', 'gift_id = '.$db->sqlQuote($id));
    }
    function detail_active($db){
      return $db->select('achi_gift', 'gift_active = 1');
    }
    function detail_gift_alias($db, $id){
       return $db->select('achi_gift', 'gift_id = "'.$db->sqlQuote($id).'"');
    }
    function send_gift($db, $sql){
        $db->query($sql);
        return $db->fetch_object();
    }
    // email
    function delete_email($db,$id) {
        return $db->delete('achi_email', ' email_id = '.$db->sqlQuote($id));
    }
    function add_email($db,$form){
        return $db->insert($form, 'achi_email');
    }
    function all_email_pg($db,$page){
        $db->query('select * from achi_email order by achi_email.email_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function all_email($db){
        $db->query('select * from achi_email order by achi_email.email_id desc');
        return $db->fetch_object();
    }
    function get_emails($db){
        $db->query('select * from achi_email order by achi_email.email_id desc ');
        return $db->fetch_object();
    }
    function count_email($db){
        $db->query('select count(email_id) as count from achi_email order by email_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail_email($db,$id) {
        return $db->select('achi_email', 'email_id = '.$db->sqlQuote($id));
    }
  function filter_email($db, $date){
    $tempArray = explode('-', $date);
    $month = $tempArray[0];
    $year = $tempArray[1];
    $db->query('
            select email_name, email_phone, email_email, email_name_click, email_created_date
            from achi_email where MONTH(email_created_date) = '.$month.' and YEAR(email_created_date) = '.$year.' 
            order by achi_email.email_id desc ');
    return $db->fetch_array();
  }
  
  // send gift 
  function add_send_gift($db,$form) {
        return $db->insert($form, 'achi_send_gift');
   }
  function all_send_gift($db) {
      $db->query('select send_gift_name,send_gift_email,send_gift_phone,send_gift_title,send_gift_counter from achi_send_gift order by achi_send_gift.send_gift_id desc');
      return $db->fetch_array();
  }
  function counter_send_gift($db) {
      $db->query('select send_gift_counter from achi_send_gift group by send_gift_counter');
      return $db->fetch_object();
  }
  function filter_send_gift($db,$count) {
      $db->query('select send_gift_name,send_gift_email,send_gift_phone,send_gift_title,send_gift_counter from achi_send_gift where send_gift_counter = '.$count);
      return $db->fetch_array();
  }
  function customers($db,$page) {
      $db->query('select * from achi_send_gift order by send_gift_id desc limit '.$page.' , 40');
      return $db->fetch_array();
  }
  function all_customers($db){
    $db->query('select count(send_gift_id) as count from achi_send_gift order by send_gift_id desc');
        return $db->fetch_object(true)->count;
  }
  function delete_customers($db,$id) {
      return $db->delete('achi_send_gift', ' send_gift_id = '.$db->sqlQuote($id));
  }
}