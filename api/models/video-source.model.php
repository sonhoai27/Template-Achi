<?php
class VideoSourceModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_source_video');
    }
    function delete($db,$id) {
        return $db->delete('achi_source_video', ' source_video_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_source_video', ' source_video_id = '.$db->sqlQuote($id));
    }
    function all($db, $idSource) {
        $db->query('
        select * from achi_source_video 
        where source_video_id_source = '.$db->sqlQuote($idSource).' order by achi_source_video.source_video_id asc');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_source_video', 'source_video_id = '.$db->sqlQuote($id));
    }
}