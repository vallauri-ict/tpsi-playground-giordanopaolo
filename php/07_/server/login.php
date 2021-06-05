<?php

    header("content-type:application/json; charset=utf-8");
    require("php-mysqli.php");

    //step 1
    if(isset($_REQUEST["username"]))
    {
        $username=$_REQUEST["username"];
    }
    else {
        http_response_code(400);
        die("parametro mancante: user");
    }

    if(isset($_REQUEST["password"]))
    {
        $password=$_REQUEST["password"];
    }
    else {
        http_response_code(400);
        die("parametro mancante: password");
    }

    //step 2
    $con = _openConnection();

    //step 3
    $sql = "SELECT * FROM correntisti where Nome='$username'";
    $rs = _eseguiQuery($con, $sql);

    //step 4
    if(count($rs) == 0)
    {
        http_response_code(401);// 401 credenziali non valide
        $con->close();
        die("credenziali non valide");
    }
    else
    {
        if($rs[0]["Pwd"] != $password)
        {
            http_response_code(401);// 401 credenziali non valide
            $con->close();
            die("credenziali non valide");
        }
        else 
        {
            // creaiamo una sessione relativa all'utente corrente
            session_start(); // accedo all'oggetto di sistema session

            // dentro la sessione relativa all'utente corrente
            // creo un campo cCorrentista dove mi salvo l'id
            $_SESSION["cCorrentista"] = $rs[0]["cCorrentista"];
            $_SESSION["scadenza"] =  time() + SCADENZA;
            
            setcookie(session_name(), session_id(), time() + SCADENZA, "/");
            
            
            // Se voglio restituire un json diretto DEVO scriverlo sotto forma di stringa 
            // già serializzata
            
            http_response_code(200);// default
            echo('{"ris":"ok"}');
        }

    }

    //step 5
    $con->close();














?>