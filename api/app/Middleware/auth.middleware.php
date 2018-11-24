<?php
$checkToken = function ($req, $res, $next) {
    if(isset($_COOKIE['token'])){
        $req = $req->withAttribute('token', $_COOKIE['token']);
        return $next($req, $res);
    }else {
      return $res->withJson(array(
        "status"=>404
      ), 202);
    }
  };