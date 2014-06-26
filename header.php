<?php



echo <<<STARTHEAD
<html>
<head>
STARTHEAD;

if (!isset($header_title))
{
	$header_title = 'No Page Title Set!';
}
echo "<title>".$header_title."</title>";

echo <<<RELS
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>					
RELS;

if (!isset($header_js))
{
	$header_js = 'default.js';
}
echo "<script src=".$header_js."></script>";

if (!isset($header_css))
{
	$header_css = 'default.css';
}
echo '<link rel="stylesheet" href="'.$header_css.'">';

echo <<<ENDHEAD
</head>
<body>
ENDHEAD;

?>