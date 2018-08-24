<?php
$checkToken = function ($req, $res, $next) {
    if(isset($req->getHeader('user-token')[0])){
        $req = $req->withAttribute('token', $req->getHeader('user-token')[0]);
        return $next($req, $res);
    }else {
      return $res->withJson(array(
        "status"=>404
      ), 404);
    }
  };