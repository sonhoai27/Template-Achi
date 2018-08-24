<?php
class BlogModel {
    function add($db,$form) {
        return $db->insert($form, 'achi_blog');
    }
    function delete($db,$id) {
        return $db->delete('achi_blog', ' blog_id = '.$db->sqlQuote($id));
    }
    function edit($db,$id, $form) {
        return $db->update($form, 'achi_blog', ' blog_id = '.$db->sqlQuote($id));
    }
    function all($db,$page) {
        $db->query('select * from achi_blog order by achi_blog.blog_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(blog_id) as count from achi_blog order by blog_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        return $db->select('achi_blog', 'blog_id = '.$db->sqlQuote($id));
    }
}