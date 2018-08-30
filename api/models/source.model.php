<?php
class SourceModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_source');
    }
    function delete($db,$id) {
        return $db->delete('achi_source', ' source_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_source', ' source_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_source order by achi_source.source_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(source_id) as count from achi_source order by source_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_source', 'source_id = '.$db->sqlQuote($id));
    }

    // order of source
    function add_source_order($db,$form){
        return $db->insert($form, 'achi_source_order');
    }
    function all_source_order($db, $page){
        $db->query('select * from achi_source_order order by achi_source_order.source_order_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count_source_order($db){
        $db->query('select * from achi_source_order order by achi_source_order.source_order_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail_source_order($db,$id) {
        return $db->select('achi_source_order', 'source_order_id = '.$db->sqlQuote($id));
    }
    function delete_source_order($db,$id) {
        return $db->delete('achi_source_order', ' source_order_id = '.$db->sqlQuote($id));
    }
    function edit_source_order($db,$id, $form) {
        return $db->update($form, 'achi_source_order', ' source_order_id = '.$db->sqlQuote($id));
    }
}