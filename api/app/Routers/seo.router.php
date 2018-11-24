<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$app->get('/seo/blog', function(Request $request, Response $response){
  return $response->getBody()->write('
  <title data-react-helmet="true">SonHoai&#x27;s Blog</title>
  <meta data-react-helmet="true" charSet="utf-8"/>
  <meta data-react-helmet="true" property="og:image" content="https://www.facebook.design/public/images/ios11-card.png"/> 
  ');
});
$app->get('/seo/home', function(Request $request, Response $response){
    return $response->getBody()->write('
    <title data-react-helmet="true">SonHoai&#x27;s Blog</title>
    <meta data-react-helmet="true" charSet="utf-8"/>
    <meta data-react-helmet="true" property="og:image" content="https://www.facebook.design/public/images/ios11-card.png"/> 
    ');
});