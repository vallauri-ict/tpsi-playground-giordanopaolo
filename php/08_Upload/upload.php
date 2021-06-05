<!doctype  html>
<html lang="it">
    <head>
        <meta charset="UTF-8"/> 
	    <title> upload </title>
	</head>

	
	<body>
        <?php
            // step

if(isset($_REQUEST["txtUser"]))
                $txtUser = $_REQUEST["txtUser"];
            else {
                die("Parametro mancante: txtUser");
            }
            if(isset($_FILES["txtFiles"]))
                $txtFiles = $_FILES["txtFiles"];
            else {
                die("Parametro mancante: txtFiles");
            }
        
            $overWrite=false;
            if(isset($_REQUEST["chkOverwrite"]))
                $overWrite=true;

            for ($i = 0; $i<count($txtFiles["name"]); $i++)
            {
                $filename=basename($txtFiles["name"][$i]);
                $size=$txtFiles["size"][$i];
                if($size > 1000000)
                {
                    echo("Il file $filename eccede le dimensioni massima di un MB e non può essere salvato sul server");
                    continue;
                }
                $mimeType=$txtFiles["type"][$i];
                $ext = pathinfo($filename,PATHINFO_EXTENSION);
                $target_file = "uploads/$filename";
                if(file_exists($target_file))
                {
                    if(!$overWrite)
                    {
                        echo("Il file $filename esiste già e non può essere sovrascritto");
                        continue;
                    }
                    
                }
                if(move_uploaded_file($txtFiles["tmp_name"][$i], $target_file))
                {
                    echo("Il file è stato caricato correttamente</br>");
                    echo("name: $filename</br>");
                    echo("size: $size</br>");
                    echo("mimeType: $mimeType</br>");
                    echo("extention: $ext</br>");
                    echo("User: $txtUser</br></br>");
                }
                else echo("Erroe nel caricamneto del file $filename");
            }
                
        
        
        ?>
    
	</body>
	
</html>