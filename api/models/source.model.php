<?php
class SourceModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_source');
    }
    function delete($db,$id) {
        return $db->delete('achi_source', ' source_id = '.$db->sqlQuote($id));
    }
    function edit($db,$form, $id) {
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
    function filter_type($db,$type){
      $db->query('select * from achi_source where source_is_video = '.$type);
        return $db->fetch_object();
    }
    // order of source
    function add_source_order($db,$form){
        return $db->insert($form, 'achi_source_order');
    }
    function all_source_order($db, $page){
        $db->query('
            select
            source_order_id,
            source_order_ho,
            source_order_ten,
            source_title,
            source_sche_id,
            source_order_price,
            source_order_number_phone,
            source_order_email,
            source_order_gender,
            source_order_birthday,
            source_order_created_date,
            source_sche_khoa
            from achi_source_order
            inner join achi_source_sche on achi_source_order.source_order_id_source = achi_source_sche.source_sche_id
            inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id
            order by achi_source_order.source_order_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function all_source_order_by_sche($db, $idSche){
        $db->query('
        select
        source_order_id,
        source_order_ho,
        source_order_ten,
        source_title,
        source_sche_id,
        source_order_price,
        source_order_number_phone,
        source_order_email,
        source_order_gender,
        source_order_birthday,
        source_order_created_date,
        source_sche_khoa
        from achi_source_order
        inner join achi_source_sche on achi_source_order.source_order_id_source = achi_source_sche.source_sche_id
        inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id
        where source_order_id_source = '.$idSche.'
        order by achi_source_order.source_order_id asc');
        return $db->fetch_object();
    }
    function all_sche_order($db){
        $db->query('
        select
        source_sche_id,
        source_title,
        source_sche_khoa
        from achi_source_sche
        inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id');
        return $db->fetch_object();
    }
    function count_source_order($db){
        $db->query('select count(*) as count from achi_source_order
            inner join achi_source_sche on achi_source_order.source_order_id_source = achi_source_sche.source_sche_id
            inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id order by achi_source_order.source_order_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail_source_order($db,$id) {
        return $db->select('achi_source_order', 'source_order_id = '.$db->sqlQuote($id));
    }
    function delete_source_order($db,$id) {
        return $db->delete('achi_source_order', ' source_order_id = "'.$db->sqlQuote($id).'"');
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
        $db->query('select *
                from achi_source_sche
                inner join achi_source on achi_source_sche.source_sche_id_source = achi_source.source_id
                where achi_source.source_id = '.$idSource.'
                order by achi_source_sche.source_sche_id asc');
        return $db->fetch_object();
    }
    function detail_sche($db,$id) {
        $db->query('SELECT * FROM `achi_source_sche`
        INNER join achi_source on achi_source_sche.`source_sche_id_source` = achi_source.source_id
        where achi_source_sche.source_sche_id = '.$db->sqlQuote($id));
        return $db->fetch_object(true);
    }
    function delete_source_all_sche($db,$idSource){
      if($db->delete('achi_source_sche', ' source_sche_id_source = '.$db->sqlQuote($idSource))){
          if($db->delete('achi_content_element', ' content_element_id_source = '.$db->sqlQuote($idSource))){
             return $db->delete('achi_source', ' source_id = '.$db->sqlQuote($idSource));
          }
        }else {
        return false;
      }
    }
    function select_source_sche_2($db, $idSource){
       return $db->selectall('achi_source_sche', 'source_sche_id_source = '.$db->sqlQuote($idSource));
    }
}