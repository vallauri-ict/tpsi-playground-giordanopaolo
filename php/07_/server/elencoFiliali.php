<?php

    header("content-type:application/json; charset=utf-8");
    require("php-mysqli.php");

    // step 0 controllo session
    _checkSession("cCorrentista");

    //step 1
    $cCorrentista=$_SESSION["cCorrentista"];

    //step 2
    $con = _openConnection();

    //step 3
    $sql = "SELECT filiali.Nome, filiali.cFiliale FROM filiali, conti where conti.cFiliale=filiali.cFiliale and conti.cCorrentista=$cCorrentista";
    $rs = _eseguiQuery($con, $sql);

    $sql2 = "SELECT Nome From Correntisti where cCorrentista=$cCorrentista";
    $rs2 = _eseguiQuery($con, $sql2);

    //step 4
    if($rs && $rs2)
    {
        /*let ris= {}
        ris.nome=$rs2[0]["Nome"]
        ris.filiali=$rs;
        echo(json_encode(ris))*/

        // echo(json_encode($rs2[0]["Nome"]).",".json_encode($rs));
        $ris = [];
        //$ris = array();
        $ris["Nome"]=$rs2[0]["Nome"];
        $ris["filiali"]=$rs;
        echo(json_encode($ris));
    }
    else 
    {
        http_response_code(500);
        $con->close();
        die("errore esecuzione query");
    }
    //step 5
    $con->close();

?>