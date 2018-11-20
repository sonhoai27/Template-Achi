<?php
class MenuModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_menu');
    }
    function delete($db,$id) {
        return $db->delete('achi_menu', ' menu_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_menu', ' menu_id = '.$db->sqlQuote($id));
    }
    function all($db) {
        $db->query('select * from achi_menu order by achi_menu.menu_id desc');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_menu', 'menu_id = '.$db->sqlQuote($id));
    }
}