<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;
include_once(__SITE_PATH.'/app/Middleware/auth.middleware.php');
include_once(__SITE_PATH."/models/gift.model.php");
$container = $app->getContainer();
$container['db_gift'] = new GiftModel();
$container['client_uri'] = BASE_URL.'uploads/images/';
$container['upload_directory'] = __SITE_PATH . '/uploads/images';
$app->post('/file/upload/photo', function(Request $request, Response $response){
    $directory = $this->get('upload_directory');
    $uploadedFiles = $request->getUploadedFiles();
    $uploadedFile = $uploadedFiles['upload-image'];
    if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
        $filename = moveUploadedFile($directory, $uploadedFile);
        return $response->withJson(array(
            'status'=>200
        ));
    }
});
$app->post('/file/import', function(Request $request, Response $response){
    $uploadedFiles = $request->getUploadedFiles();
    $uploadedFile = $uploadedFiles['upload-csv'];
//   print_r($uploadedFile);
    if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
       $file_open = fopen($uploadedFile->file,"r");
       while(($csv = fgetcsv($file_open, 1000, ",")) !== false)
       {
        $this->get('db_gift')->add_send_gift($this->get('db'),array(
          "send_gift_name"=>$csv[0],
          "send_gift_email"=>$csv[1],
          "send_gift_title"=>$csv[2]
        ));
       }
         return $response->withJson(array(
            'status'=>200
        ));
    }
});
function moveUploadedFile($directory, UploadedFile $uploadedFile)
{
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(10)).(strtotime(date("Y/m/d"))*1000);
    $filename = sprintf('%s.%0.8s', $basename, $extension);
    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);
    return $filename;
}
$app->get('/file/all/photo', function(Request $request, Response $response){
    $listFiles = array();
    $tempListFile = array_diff(scandir(__SITE_PATH . '/uploads/images'), array('..', '.'));
    foreach($tempListFile as $item){
        array_push($listFiles, array(
            "uri"=>$this->get('client_uri').$item,
            "name"=>$item
        ));
    }
    return $response->withJson($listFiles);
});
$app->delete('/file/delete/{id}', function(Request $request, Response $response, $args){
    if(file_exists($this->get('upload_directory').'/'.$args['id'])){
        if(unlink($this->get('upload_directory').'/'.$args['id'])){
            return $response->withJson(array(
                'status'=>200,
                'uri'=>$args['id']
            ));
        }else {
            return $response->withJson(array(
                'status'=>403,
                'uri'=>$args['id']
            ), 403);  
        }
    }else {
        return $response->withJson(array(
            'message'=>error,
            'status'=>403,
            'uri'=>$args['id']
        ), 403);  
    }
    
});


function readFolder($publicUrl){
  $listFiles = array();
  $tempListFile = array_diff(scandir($publicUrl), array('..', '.'));
  foreach($tempListFile as $item){
      if(strpos(strtolower($item), '.png') || strpos(strtolower($item), '.jpg') || strpos(strtolower($item), '.gif') || strpos(strtolower($item), '.mp4')){
        array_push($listFiles, array(
          "uri"=>$this->get('client_uri').$item,
          "name"=>$item,
          "is_file"=> true
        ));
      }else {
        array_push($listFiles, array(
          "uri"=>'/'.$item,
          "name"=>$item,
          "is_file"=> false
        ));
      }

  }
  return $listFiles;
}
function createFolder($name, $where){
  if (!file_exists($this->get('upload_directory').$where.'/'.$name)) {
      mkdir($this->get('upload_directory').$where.'/'.$name, 0777, true);
      return $response->withJson(array(
          'status'=>202,
          'message'=> 'ok'
      ), 202); 
  }else {
    return $response->withJson(array(
        'status'=>403,
        'message'=> 'error'
    ), 202); 
  }
}
function delete_directory($dirname) {
  if (is_dir($dirname)) {
     $dir_handle = opendir($dirname); 
  }
  if(!$dir_handle) {
    return false; 
  }
   while($file = readdir($dir_handle)) {
     if ($file != "." && $file != "..") {
       if (!is_dir($dirname."/".$file)) {
         unlink($dirname."/".$file);
       } else {
           delete_directory($dirname.'/'.$file);
        }
     }
   }
   closedir($dir_handle);
   rmdir($dirname);
   return true;
}