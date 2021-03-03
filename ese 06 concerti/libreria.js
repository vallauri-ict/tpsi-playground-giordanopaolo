"use strict";
const URL = "http://localhost:3000";
function inviaRichiesta(method, url, parameters={}) {
	let contentType;
	if(method.toUpperCase() == "GET")
		contentType="application/x-www-form-urlencoded;charset=utf-8";
	else{
		contentType = "application/json; charset=utf-8"
        parameters = JSON.stringify(parameters);
	}
    // $.ajax restituisce una promise che si mette in acolto delle risposta di $.ajax
    // quando $.ajax risponde, la promise generea l' evento fail o l'evento done a seconda dei casi  
    return $.ajax({
        "url" : URL + url,
		"data" : parameters,
		"type" : method,   
		"contentType" : contentType, 
        "dataType" : "json",   // default      
        "timeout" : 5000,      // default 
    });	
}


function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato dei dati non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

function generaNumero(a, b){
	return Math.floor((b-a+1)*Math.random()) + a;
}