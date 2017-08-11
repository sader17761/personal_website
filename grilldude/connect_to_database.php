<?php

define('DB_NAME', 'grilldude_database');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}

echo 'Connected Successfully';

$value1 = $_POST['name'];
$value2 = $_POST['email'];
$value3 = $_POST['location'];
$value4 = $_POST['grilling_style'];
$value5 = $_POST['grill_to_sell'];
$value6 = $_POST['comments'];

$sql = "INSERT INTO feedback (name, email, location, grilling_style, grill_to_sell, comments) VALUES ('$value1', '$value2', '$value3', '$value4', '$value5', '$value6')";

if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
}

mysql_close();
?>