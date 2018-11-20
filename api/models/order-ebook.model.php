<?php
class OrderEbookModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_order_ebook');
    }
    function delete($db,$id) {
        return $db->delete('achi_order_ebook', ' order_ebook_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_order_ebook', ' order_ebook_id = '.$db->sqlQuote($id));
    }
    function export($db) {
        $db->query('select * from achi_order_ebook
        inner join achi_package_ebook on achi_order_ebook.order_ebook_package = achi_package_ebook.package_ebook_id 
        order by achi_order_ebook.order_ebook_id desc');
        return $db->fetch_object();
    }
    function filter($db, $id) {
        $db->query('select * from achi_order_ebook
        inner join achi_package_ebook on achi_order_ebook.order_ebook_package = achi_package_ebook.package_ebook_id 
        where order_ebook_package = '.$db->sqlQuote($id).' order by achi_order_ebook.order_ebook_id desc');
        return $db->fetch_object();
    }
    function all($db, $page) {
        $db->query('select * from achi_order_ebook
        inner join achi_package_ebook on achi_order_ebook.order_ebook_package = achi_package_ebook.package_ebook_id
        order by achi_order_ebook.order_ebook_id 
        desc limit '.$page.',20');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_order_ebook', 'order_ebook_id = '.$db->sqlQuote($id));
    }
    function count($db){
        $db->query('select count(order_ebook_id) as count from achi_order_ebook');
        return $db->fetch_object(true)->count;
    }

    function add_package($db,$form) {
        return $db->insert($form, 'achi_package_ebook');
    }
    function delete_package($db,$id) {
        return $db->delete('achi_package_ebook', ' package_ebook_id = '.$db->sqlQuote($id));
    }
    function edit_package($db,$id, $form) {
        return $db->update($form, 'achi_package_ebook', ' package_ebook_id = '.$db->sqlQuote($id));
    }
    function all_package($db) {
        $db->query('select * from achi_package_ebook order by achi_package_ebook.package_ebook_id asc');
        return $db->fetch_object();
    }

}