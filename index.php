<?php
	header("Cache-Control: no-cache, no-store, must-revalidate");
	header("Pragma: no-cache");
	header("Expires: 0");

	error_reporting(E_ALL & ~E_NOTICE);
	ini_set('display_errors', 1);

	require(dirname(__FILE__) . '/models/helpers/request_response_helper.php');

	RequestResponseHelper::$root     = dirname(__FILE__);
	RequestResponseHelper::$path     = $_GET['path'];
	RequestResponseHelper::$url_root = "https://theapp.artidas.hu";

	require(RequestResponseHelper::$root . '/models/helpers/log_helper.php');

	LogHelper::add('--------------------------------------------------------------------------------');
	LogHelper::add(date('Y-m-d H:i:s', time()));
	LogHelper::add('Starting up engines...');

	/* ********************************************************
	 * *** Here is the main controlling logic... **************
	 * ********************************************************/
	RequestResponseHelper::$request = empty(explode('/', RequestResponseHelper::$path)[0]) ?
		[0 => 'index'] :
		explode('/', RequestResponseHelper::$path)
	;
	RequestResponseHelper::$actor_name   = RequestResponseHelper::$request[0];
	RequestResponseHelper::$actor_action = RequestResponseHelper::$request[1];
	
	if (RequestResponseHelper::$actor_name === 'tavernraid') {
		require(RequestResponseHelper::$root . '/tavernraid/index.php');
	} else if (RequestResponseHelper::$actor_name === 'university') {
		require(RequestResponseHelper::$root . '/university/index.php');
	} else {
		require(RequestResponseHelper::$root . '/models/bos/mysql_database_connection_bo.php');
		require(RequestResponseHelper::$root . '/models/helpers/string_helper.php');
		require(RequestResponseHelper::$root . '/models/dos/abstract_do.php');
		require(RequestResponseHelper::$root . '/models/daos/common_dao.php');

		LogHelper::add('Request: ' . RequestResponseHelper::$path);
		LogHelper::add(RequestResponseHelper::$root . '/controllers/' . RequestResponseHelper::$actor_name . '_controller.php');
		RequestResponseHelper::setBaseResponse();

		/* ********************************************************
		 * *** Lets require files by request... *******************
		 * ********************************************************/
		require(RequestResponseHelper::$root . '/controllers/' . RequestResponseHelper::$actor_name . '_controller.php');
	}
?>
