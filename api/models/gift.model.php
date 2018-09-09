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
    function count($db){
        $db->query('select count(gift_id) as count from achi_gift order by gift_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_gift', 'gift_id = '.$db->sqlQuote($id));
    }

    // email
    function add_email($db,$form){
        return $db->insert($form, 'achi_email');
    }
    function all_email($db,$page){
        $db->query('select * from achi_email order by achi_email.email_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count_email($db){
        $db->query('select count(achi_email) as count from achi_email order by email_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail_email($db,$id) {
        return $db->select('achi_email', 'email_id = '.$db->sqlQuote($id));
    }
}