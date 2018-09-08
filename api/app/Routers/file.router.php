<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;
include_once(__SITE_PATH.'/app/Middleware/auth.middleware.php');
$container = $app->getContainer();
$container['client_uri'] = BASE_URL.'uploads/images/';
$container['upload_directory'] = __SITE_PATH . '\uploads\images';
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
    $tempListFile = array_diff(scandir(__SITE_PATH . '\uploads\images'), array('..', '.'));
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