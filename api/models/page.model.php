<?php
class PageModel {
    function list_ui($db,$idPage) {
          $db->query('SELECT * FROM achi_detail_ui
                      LEFT OUTER JOIN achi_content_page ON achi_detail_ui.detail_ui_id = achi_content_page.content_page_id_detail_ui
                      inner join achi_element on achi_detail_ui.detail_ui_id_element = achi_element.element_id
                      where `detail_ui_id_ui` = '.$db->sqlQuote($idPage).' 
            ORDER BY  detail_ui_position desc,detail_ui_id asc');
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
    function update_content_page($db, $form, $content_page_id){
        return $db->update($form, 'achi_content_page', ' content_page_id = '.$db->sqlQuote($content_page_id));
    }
    function add_content_page($db,$form) {
        return $db->insert($form, 'achi_content_page');
    }
}