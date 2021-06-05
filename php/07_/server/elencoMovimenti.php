<?php

    header("content-type:application/json; charset=utf-8");
    require("php-mysqli.php");

    // step 0 controllo session
    _checkSession("cCorrentista");

    //step 1
    $cCorrentista=$_SESSION["cCorrentista"];
    if(isset($_REQUEST["cFiliale"]))
    {
        $cFiliale = $_REQUEST["cFiliale"];
    }
    else
    {
        http_response_code(400);
        die("parametri mancanti:cFiliale");
    }

    //step 2
    $con = _openConnection();

    //step 3
    $sql = "SELECT movimenti.cMov, operazioni.descrizione as descriz,movimenti.data,movimenti.importo FROM operazioni, conti, movimenti ".
    "where movimenti.cConto=conti.cConto and movimenti.cOperazione=operazioni.cOperazione ".
    "and conti.cCorrentista=$cCorrentista and conti.cFiliale=$cFiliale";
    $rs = _eseguiQuery($con, $sql);


    //step 4
    if(!$rs){
        http_response_code(500);
        $con->close();
        die("errore esecuzione query");
    }
    else{
        echo(json_encode($rs));
    }

    //step 5
    $con->close();

?>