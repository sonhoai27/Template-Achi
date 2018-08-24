<?php
class AuthorModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_author');
    }
    function delete($db,$id) {
        return $db->delete('achi_author', ' author_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_author', ' author_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_author order by achi_author.author_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(author_id) as count from achi_author order by author_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_author', 'author_id = '.$db->sqlQuote($id));
    }
}