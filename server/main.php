<?php

function resultError($error) {
    http_response_code(400);
    print json_encode(array(
        "success" => false,
        "error" => $error,
    ));
    exit(0);
}

function resultSuccess($data) {
    print json_encode(array(
        "success" => true,
        "data" => $data,
    ));
    exit(0);
}

$dataDir = "";

function startBuilder($dir) {
    global $dataDir;

   $dataDir = $dir . "/__data";
    
    if (!file_exists($dataDir)) {
        mkdir($dataDir);
    }

    if (!array_key_exists("method", $_REQUEST)) {
        resultError("No method parameter");
    }

    $method = $_REQUEST['method'];

    if ($method === "getSettings") {
        getSettings();
    }
}

function getSettings() {
    global $dataDir;

    $dir = opendir($dataDir);
    $allSettings = array();

    while ($item = readdir($dir)) {
        if ($item[0] === ".") {
            continue;
        }
        error_log($item);
    }
    resultSuccess($allSettings);
}

?>