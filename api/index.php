<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$user = array("nprodam" => "e12345");

echo json_encode($user);