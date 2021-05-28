<?php
    header("content-type:application/json; charset=utf-8");
    require("php-mysqli.php");

    //step 1
    if(isset($_REQUEST["cFiliale"]))
    {
        $cFiliale=$_REQUEST["cFiliale"];
    }
    else {
        http_response_code(400);
        die("parametro mancante: idFiliale");
    }
    //step 2
    $con = _openConnection();
    //step 3
    $sql = "SELECT * from conti,correntisti where correntisti.cCorrentista = conti.cCorrentista and conti.cFiliale = $cFiliale";
    $rs = _eseguiQuery($con, $sql);
    //step 4
    if($rs)
    {
        echo(json_encode($rs));
    }
    else
    {
        http_response_code(500);
        die("errore esecuzione query");
    }
    //step 5
    $con->close();
    ?>