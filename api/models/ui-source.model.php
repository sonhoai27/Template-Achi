<?php
class UISourceModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_ui');
    }
    function delete($db,$id) {
        return $db->delete('achi_ui', ' ui_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_ui', ' ui_id = '.$db->sqlQuote($id));
    }
    function edit_css($db,$form,$id) {
        return $db->update($form, 'achi_detail_ui', ' detail_ui_id = '.$db->sqlQuote($id));
    }
    function all($db) {
        $db->query('select * from achi_ui order by achi_ui.ui_id desc');
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
    // tra ve bao gom cac detail ui cua 1 ui va content cua cac detail ui do
    function detail_ui_source($db,$idUi, $idSource) {
        $db->query('select * from achi_detail_ui
        inner join achi_element on achi_detail_ui.detail_ui_id_element = achi_element.element_id
        left OUTER JOIN achi_content_element on achi_content_element.content_element_id_detail_ui = achi_detail_ui.detail_ui_id
        where achi_detail_ui.detail_ui_id_ui = '.$db->sqlQuote($idUi).' 
        and achi_content_element.content_element_id_source = '.$db->sqlQuote($idSource).' 
        or achi_content_element.content_element_id_source is NULL');
        $detail = $db->fetch_object();
        return ($this->makeListElementParentChild($detail));
    }
    private function makeListElementParentChild($list, $parent = null){
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
    function add_element_to_detail_ui($db,$form) {
        return $db->insert($form, 'achi_detail_ui');
    }
    function delete_element_of_detail_ui($db,$idUI, $idDetailUI){
        $db->query('
            select detail_ui_id, detail_ui_parent_id from achi_detail_ui
            inner join achi_element on achi_detail_ui.detail_ui_id_element = achi_element.element_id
            where achi_detail_ui.detail_ui_id_ui = '.$db->sqlQuote($idUI));
        $detail = $db->fetch_object();
        //return $db->delete('achi_detail_ui', ' detail_ui_id in ');
        $flag = 0;
        $temp = $this->makeIdDetailUI($this->findChildElement($detail, $idDetailUI),$idDetailUI);
        for($i = 0; $i < count($temp); $i++){
            if($db->delete('achi_content_element', ' content_element_id_detail_ui = '.$temp[$i]) && $db->delete('achi_detail_ui', ' detail_ui_id = '.$temp[$i])){
                $flag = 1;
            }else {
                $flag = 0;
            }
        }
        if($flag == 1){
            return 1;
        }else {
            return 0;
        }
    }
    private function findChildElement($list, $parent){
        $tempList = array();
        for($i = 0; $i < count($list); $i++){
            $tempElement = $list[$i];
            if($tempElement->detail_ui_parent_id == $parent){
                $tempChildElement = $this->findChildElement($list, $tempElement->detail_ui_id);
                array_push($tempList, $tempElement);
                if(count($tempChildElement) > 0){
                   $tempList =  array_merge($tempList, ($tempChildElement));
                }
            }
        }
        return $tempList;
    }
    private function makeIdDetailUI($list, $idParentDetailUI){
        $temp = array();
        for($i = count($list) - 1; $i >= 0; $i--){
            array_push($temp, $list[$i]->detail_ui_id);
        }
        array_push($temp, $idParentDetailUI);
        return $temp;
    }

    function update_content_element($db, $form, $content_element_id){
        return $db->update($form, 'achi_content_element', ' content_element_id = '.$db->sqlQuote($content_element_id));
    }
    function add_content_element($db,$form) {
        return $db->insert($form, 'achi_content_element');
    }
}