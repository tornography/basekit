<?php
header("Content-Type: text/html; charset=utf-8");

require_once '../vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader, array(
    #'cache' => 'compilation_cache',
    #'debug' => true,
));

echo $twig->render('index.html',array("value"=>"basekit"));

?>