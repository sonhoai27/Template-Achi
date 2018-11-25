<?php
use \Firebase\JWT\JWT;
include_once(__SITE_PATH.'/shared/jwt/JWT.php');
include_once(__SITE_PATH."/models/auth.model.php");
$container['db_auth'] = new AuthModel();
$checkToken = function ($req, $res, $next) {
  $key = "NGUYENMINHCHI@01234567891992";
  $token = $req->getParsedBody()['token'];
  try {
    $decoded = JWT::decode($token, $key, array('HS256'));
    if($decoded == "ERROR"){
      $req = $req->withAttribute('token', json_encode(array(
        "status"=>404,
        "message"=>"ERROR"
      )));
    }else {
      $req = $req->withAttribute('token',  json_encode(array(
        "status"=>202,
        "message"=>"OK"
      )));
    }
  }catch(Exception $e){
     $req = $req->withAttribute('token',  json_encode(array(
        "status"=>404,
        "message"=>"ERROR"
      )));
  }
  return $next($req, $res);
  };
$checkLogin = function ($req, $res, $next) {
  $form = $req->getParsedBody();
  $user = $this->get('db_auth')->detail($this->get('db'), $form['user_name'], md5($form['user_password']));
  if($user['user_name'] == $form['user_name'] && $user['user_password'] == md5($form['user_password'])){
    $key = "NGUYENMINHCHI@01234567891992";
    $paylod = array(
      'iat'=>time(),
      'iss'=>json_encode(array(
        "user_id"=>$user['user_id'],
        "user_name"=>$user['user_name']
       )),
      'exp'=>time() + (240 * 60),
      'userId'=>$user['user_id']
    );
    $token = JWT::encode($paylod, $key);
    $req = $req->withAttribute('token', json_encode(array(
        "status"=>202,
        "token"=>$token
      )));
  }else {
    $req = $req->withAttribute('token', json_encode(array(
        "status"=>404,
        "message"=>"ERROR"
      )));
  }
  return $next($req, $res);
};