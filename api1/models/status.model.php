<?php
class StatusModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_status');
    }
    function delete($db,$id) {
        return $db->delete('achi_status', ' status_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_status', ' status_id = '.$db->sqlQuote($id));
    }
    function all($db) {
        $db->query('select * from achi_status order by achi_status.status_id desc');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(status_id) as count from achi_status order by status_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_status', 'status_id = '.$db->sqlQuote($id));
    }
}