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
    //ui chứa nhiều component hay element
    // de qui de lay ra dc cac ui cua 1 khoa hoc hay mot landing page, dữ liệu dạng tĩnh
    // có id của landing page
    // mỗi khóa học chọn 1 giao diện.
    function all_element($db) {
        $db->query('select * from achi_element order by achi_element.element_id desc');
        return $db->fetch_object();
    }
    function detail_ui($db,$id) {
        $db->query('
            select * from achi_detail_ui
            inner join achi_element on achi_detail_ui.detail_ui_id_element = achi_element.element_id
            where achi_detail_ui.detail_ui_id_ui = '.$db->sqlQuote($id));
        $detail = $db->fetch_object();
        return ($this->makeListElementParentChild($detail));
    }

    function makeListElementParentChild($list, $parent = null){
        $tempList = array();
        for($i = 0; $i < count($list); $i++){
            $tempElement = $list[$i];
            if($tempElement->detail_ui_parent_id == $parent){
                $tempChildElement = $this->makeListElementParentChild($list, $tempElement->detail_ui_id);
                if(count($tempChildElement) > 0){
                    $tempElement->child = $tempChildElement;
                }
                array_push($tempList, $tempElement);
            }
        }
        return $tempList;
    }
}