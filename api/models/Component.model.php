<?php
class ComponentModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_component');
    }
    function delete($db,$id) {
        return $db->delete('achi_component', ' component_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_component', ' component_id = '.$db->sqlQuote($id));
    }
    function all($db) {
        $db->query('select * from achi_component order by achi_component.component_id desc');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_component', 'component_id = '.$db->sqlQuote($id));
    }

    // chỉ là các đối tượng mà một ui có thể có, người dùng chọn và thêm vào.
}