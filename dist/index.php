<?php
header("Content-Type: text/html; charset=utf-8");

require_once '../vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader, array(
    #'cache' => 'compilation_cache',
    #'debug' => true,
));

$page = (isset($_GET['page'])) ? $_GET['page'] : false;


if(!$page || $page == '') {
	echo $twig->render('index.html',array("value"=>"basekit"));
}
elseif(!is_file('./templates/'.$page.'.html')) {
    header("HTTP/1.0 404 Not Found");
    echo $twig->render('404.html');
}
else {
    echo $twig->render($page.'.html',array());
}

?>