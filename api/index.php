<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

define('APP_PATH', realpath(dirname(__FILE__)));
require_once './Winauth.php';

$user = new WindowsAuth();
$response = array('nprodam' => $user->getUser());

echo json_encode($response);