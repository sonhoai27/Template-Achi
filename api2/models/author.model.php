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
    function all($db) {
        $db->query('select * from achi_author order by achi_author.author_id desc ');
        return $db->fetch_object();
    }
    function detail($db,$id) {
        return $db->select('achi_author', 'author_id = '.$db->sqlQuote($id));
    }
}