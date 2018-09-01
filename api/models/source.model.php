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

    // sche
    function add_sche($db,$form) {
        return $db->insert($form, 'achi_source_sche');
    }
    function delete_sche($db,$id) {
        return $db->delete('achi_source_sche', ' source_sche_id = '.$db->sqlQuote($id));
    }
    function update_sche($db,$id, $form) {
        return $db->update($form, 'achi_source_sche', ' source_sche_id = '.$db->sqlQuote($id));
    }
    function all_sche($db, $idSource) {
        $db->query('select source_sche_id, source_title,source_sche_id_source,source_sche_number,
                source_sche_price,source_sche_sale,source_sche_address,source_sche_teacher,source_sche_status
                from achi_source_sche
                inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id
                where achi_source.source_id = '.$idSource.'
                order by achi_source_sche.source_sche_id desc');
        return $db->fetch_object();
    }
    function detail_sche($db,$id) {
        return $db->select('achi_source_sche', 'source_sche_id = '.$db->sqlQuote($id));
    }

    // date sche
    function add_date_sche($db,$form) {
        return $db->insert($form, 'achi_date_source');
    }
    function delete_date_sche($db,$id) {
        return $db->delete('achi_date_source', ' date_source_id = '.$db->sqlQuote($id));
    }
    function update_date_sche($db,$id, $form) {
        return $db->update($form, 'achi_date_source', ' date_source_id = '.$db->sqlQuote($id));
    }
    function all_date_sche($db, $idSche) {
        $db->query('select *
                from achi_date_source
                where achi_date_source.date_source_id_sche = '.$idSche.'
                order by achi_date_source.date_source_stt desc');
        return $db->fetch_object();
    }
    function detail_date_sche($db,$id) {
        return $db->select('achi_date_source', 'date_source_id = '.$db->sqlQuote($id));
    }
}