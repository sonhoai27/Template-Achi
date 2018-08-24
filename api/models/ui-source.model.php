<?php
class UISourceModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_UISource');
    }
    function delete($db,$id) {
        return $db->delete('achi_UISource', ' UISource_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_UISource', ' UISource_id = '.$db->sqlQuote($id));
    }
    function all($db) {
        $db->query('select * from achi_UISource order by achi_UISource.UISource_id desc');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_UISource', 'UISource_id = '.$db->sqlQuote($id));
    }

    //ui chứa nhiều component hay element
    // de qui de lay ra dc cac ui cua 1 khoa hoc hay mot landing page, dữ liệu dạng tĩnh
    // có id của landing page
    // mỗi khóa học chọn 1 giao diện.
}