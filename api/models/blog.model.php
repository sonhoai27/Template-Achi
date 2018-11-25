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
        $db->query('select * from achi_blog 
        inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
        inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
        order by achi_blog.blog_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
    function home($db) {
        $db->query('select * from achi_blog 
        inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
        inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
        order by achi_blog.blog_views desc limit 0, 6');
        return $db->fetch_object();
    }
    function count($db){
        $db->query('select count(blog_id) as count from achi_blog order by blog_id desc');
        return $db->fetch_object(true)->count;
    }
    function detail($db,$id) {
        $db->query('select * from achi_blog 
          inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
          inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
          where blog_id = '.$db->sqlQuote($id));
        return $db->fetch_object(true);
    }
  function detail_alias($db,$id){
    $db->query('select * from achi_blog 
          inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
          inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
          where blog_alias = "'.$db->sqlQuote($id).'"');
        return $db->fetch_object(true);
  }
  function filter($db,$page, $config = array()) {
        $db->query('select * from achi_blog 
        inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
        inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
        '.(isset($config['category']) && $config['category'] != 0 || $config['category'] != null ? ' where blog_id_category = '.$db->sqlQuote($config['category']) : ' ').'
        order by achi_blog.blog_id desc limit '.$page.', 20');
        return $db->fetch_object();
    }
  function count_by_filter($db,$config = array()){
    $db->query('select count(blog_id) as count from achi_blog 
        inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
        inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
        '.(isset($config['category']) && $config['category'] != 0 || $config['category'] != null ? ' where blog_id_category = '.$db->sqlQuote($config['category']) : ' ').'
        order by achi_blog.blog_id desc');
        return $db->fetch_object(true)->count;
  }
  function category($db,$id) {
        $db->query('select * from achi_blog 
        inner join achi_category on achi_blog.blog_id_category = achi_category.category_id
        inner join achi_author on achi_blog.blog_id_author= achi_author.author_id
        where blog_id_category = '.$db->sqlQuote($id).' 
        order by achi_blog.blog_id desc limit 0, 4');
        return $db->fetch_object();
    }
  function edit_views($db, $id){
    return $db->query('UPDATE achi_blog SET `blog_views` = `blog_views` + 1 WHERE `blog_alias` = "'.$db->sqlQuote($id).'"');
  }
  function search($db, $key){
    $db->query("SELECT * from (
(SELECT source_alias as alias, source_title as title, source_cover as image, 
source_id_ui as is_blog,source_id as source_id,source_page_url as url,source_is_video as is_video, source_promo as promo from achi_source where source_title like '%".$key."%')
    UNION ALL
(SELECT blog_alias as alias, blog_title as title, blog_cover as image, 
blog_title as is_blog,blog_title as source_id,blog_id as url,blog_id as is_video, blog_promo as promo from achi_blog where blog_title like '%".$key."%')
) X");
     return $db->fetch_object();
  }
}