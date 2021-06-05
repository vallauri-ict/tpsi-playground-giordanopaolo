<?php

    header("content-type:application/json; charset=utf-8");
    
    session_start();

    session_unset();// rimuove variabili di sessione

    session_destroy();// rimuove la sessione

    echo('{"ris":"ok"}');

?>