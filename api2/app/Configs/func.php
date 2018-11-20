<?php
function isset_not_null($data, $pagram){
    if(isset($data[$pagram]) && $data[$pagram] != null){
        return true;
    }
    return false;
}