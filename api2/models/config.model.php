<?php
class ConfigModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_config');
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_config', ' config_id = '.$db->sqlQuote($id));
    }
    function detail($db,$id) {
        return $db->select('achi_config', 'config_id = '.$db->sqlQuote($id));
    }
    // type config
    function add_type_config($db,$form) {
        return $db->insert($form, 'achi_type_config');
    }
    function delete_type_config($db,$id) {
        return $db->delete('achi_type_config', ' type_config_id = '.$db->sqlQuote($id));
    }
    function edit_type_config($db,$id, $form) {
        return $db->update($form, 'achi_type_config', ' type_config_id = '.$db->sqlQuote($id));
    }
    function all_type_config($db) {
        $db->query('select * from achi_type_config order by achi_type_config.type_config_id desc ');
        return $db->fetch_object();
    }
    function detail_type_config($db,$id) {
        return $db->select('achi_type_config', 'type_config_id = '.$db->sqlQuote($id));
    }
}