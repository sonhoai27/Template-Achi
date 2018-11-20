<?php
class AuthModel {
    function detail($db,$user_name, $user_password) {
        return $db->select('achi_user', 'user_name = "'.$db->sqlQuote($user_name).'" and user_password = "'.$db->sqlQuote($user_password).'"');
    }
}