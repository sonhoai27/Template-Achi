<?php
class CategoryModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_category');
    }
    function delete($db,$id) {
        return $db->delete('achi_category', ' category_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_category', ' category_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_category order by achi_category.category_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(category_id) as count from achi_category order by category_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_category', 'category_id = '.$db->sqlQuote($id));
    }
}