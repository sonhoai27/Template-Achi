<?php
class VideoModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_video');
    }
    function delete($db,$id) {
        return $db->delete('achi_video', ' video_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_video', ' video_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_video order by achi_video.video_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(video_id) as count from achi_video order by video_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_video', 'video_id = '.$db->sqlQuote($id));
    }
}