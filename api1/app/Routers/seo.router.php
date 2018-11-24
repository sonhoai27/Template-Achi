<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
include_once(__SITE_PATH."/models/blog.model.php");
include_once(__SITE_PATH."/models/source.model.php");
$container['db_blog'] = new BlogModel();
$container['db_source'] = new SourceModel();
$app->get('/seo/blog/{idBlog}', function(Request $request, Response $response, $args){
  $blog = $this->get('db_blog')->detail_alias(
                $this->get('db'),
                $args['idBlog']
        );
  return $response->getBody()->write('
    <title>'.$blog->blog_title.' | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/blog/detail/'.$blog->blog_alias.'"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="'.$blog->blog_title.' | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="'.$blog->blog_promo.'" />
    <meta name="description" content="'.$blog->blog_promo.'" />
    <meta property="og:image" content="'.$blog->blog_cover.'"/> 
    ');
});
$app->get('/seo/home', function(Request $request, Response $response){
    return $response->getBody()->write('
    <title>Nguyễn Minh Chí | Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="Nguyễn Minh Chí | Sống Xứng Đáng"/> 
    <meta property="og:description" content="Chuyên gia đào tạo thế hệ sống xứng đáng. Huấn luyện cho 10.000 bạn bẻ. Tác giả cuốn Sống Xứng Đáng." />
    <meta name="description" content="Chuyên gia đào tạo thế hệ sống xứng đáng. Huấn luyện cho 10.000 bạn bẻ. Tác giả cuốn Sống Xứng Đáng." />
    <meta property="og:image" content="http://nguyenminhchi.com/api/uploads/images/0c70204d9323542f870e1540141200000.png"/> 
    <meta name="image" content="http://nguyenminhchi.com/api/uploads/images/0c70204d9323542f870e1540141200000.png"/> 
    ');
});
$app->get('/seo/video', function(Request $request, Response $response){
    return $response->getBody()->write('
    <title>Video | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/video"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="Video | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="Đón xem video bài học chia sẻ tâm đắc từ Mr.Share." />
    <meta name="description" content="Đón xem video bài học chia sẻ tâm đắc từ Mr.Share." />
    <meta property="og:image" content="http://nguyenminhchi.com/api/uploads/images/98dbe9a79e87492c16f01538931600000.png"/> 
    ');
});
$app->get('/seo/lich-su-kien', function(Request $request, Response $response){
    return $response->getBody()->write('
    <title>Lịch Sự Kiện | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/lich-su-kien"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="Lịch Sự Kiện | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="Xem lịch sự kiện các khóa học đầy tự hào của Mr.Share." />
    <meta name="description" content="Xem lịch sự kiện các khóa học đầy tự hào của Mr.Share." />
    <meta property="og:image" content="http://nguyenminhchi.com/api/uploads/images/302d805c8eeb049bb9a71539622800000.jpg"/> 
    ');
});
$app->get('/seo/qua-tang', function(Request $request, Response $response){
    return $response->getBody()->write('
    <title>Quà Tặng | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/qua-tang"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="Quà Tặng | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="Sở hữu quà tặng từ Mr.Share." />
    <meta name="description" content="Sở hữu quà tặng từ Mr.Share." />
    <meta property="og:image" content="http://nguyenminhchi.com/api/uploads/images/196050fbecd7a4d6f3801539450000000.jpg"/> 
    ');
});
$app->get('/seo/khoa-hoc/{idKhoaHoc}', function(Request $request, Response $response, $args){
  $id = explode("-", $args['idKhoaHoc'])[count(explode("-", $args['idKhoaHoc'])) - 1];
  $course = $this->get('db_source')->detail(
            $this->get('db'),
            $id
        );
    return $response->getBody()->write('
    <title>'.$course["source_title"].' | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/khoa-hoc/'.$args['idKhoaHoc'].'"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="'.$course["source_title"].' | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="'.$course["source_promo"].'" />
    <meta name="description" content="'.$course["source_promo"].'" />
    <meta property="og:image" content="'.$course["source_cover"].'"/> 
    ');
});
$app->get('/seo/khoa-hoc-video/{idKhoaHoc}', function(Request $request, Response $response, $args){
  $id = explode("-", $args['idKhoaHoc'])[0];
  $course = $this->get('db_source')->detail(
            $this->get('db'),
            $id
        );
    return $response->getBody()->write('
    <title>'.$course["source_title"].' | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta charSet="utf-8"/>
    <meta property="og:type" content="article"/> 
    <meta property="og:url" content="http://nguyenminhchi.com/page/khoa-hoc/video/'.$args['idKhoaHoc'].'"/>
    <meta property="fb:app_id" content="1440913602698681"/> 
    <meta property="og:title" content="'.$course["source_title"].' | Nguyễn Minh Chí - Sống Xứng Đáng"/> 
    <meta property="og:description" content="'.$course["source_promo"].'" />
    meta name="description" content="'.$course["source_promo"].'" />
    <meta property="og:image" content="'.$course["source_cover"].'"/> 
    ');
});
$app->get('/seo/ebook', function(Request $request, Response $response){
    return $response->getBody()->write('
     <title data-react-helmet="true">Cuốn sổ tay sống xứng đáng | Nguyễn Minh Chí - Sống Xứng Đáng</title>
    <meta data-react-helmet="true" property="og:url" content="http://nguyenminhchi.com/page/sach" />
    <meta data-react-helmet="true" property="og:type" content="article" />
    <meta data-react-helmet="true" property="og:title" content="Cuốn da sống xứng đáng - Nguyễn Minh Chí" />
    <meta data-react-helmet="true" property="og:description" content="Anh là Mr.Share - Người phụng sự tuổi trẻ Việt. Anh đã đồng hành cùng nghề “giáo dục” cho lớp trẻ được hơn 5 năm và tới bây giờ anh đã trải qua rất nhiều việc." />
    <meta data-react-helmet="true" name="description" content="Anh là Mr.Share - Người phụng sự tuổi trẻ Việt. Anh đã đồng hành cùng nghề “giáo dục” cho lớp trẻ được hơn 5 năm và tới bây giờ anh đã trải qua rất nhiều việc." />
    <meta data-react-helmet="true" property="og:image" content="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/36870025_417552335419038_5299552815025225728_o.jpg?_nc_cat=0&oh=a9f0181bfaa6fd314cca869d72868eb0&oe=5C3A693B" />
    ');
});