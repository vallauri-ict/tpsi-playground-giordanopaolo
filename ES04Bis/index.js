"use strict";
$(document).ready(function() {

	let _p = $("p");//_p è una collezione (vett enumerativo di puntatori);
	console.log(_p.length);
	_p.css("backgroundColor","Blue");
	$(".primo").css("backgroundColor","Red");//in scrittura scrive su tutti, 
	console.log(_p.css("backgroundColor"))//in lettura solo il primo;
	_p.hide(12222)
	_p[2].innerHTML="ciao"//uso innerHTML perchè sto agendo su degli oggetti js poichè 
					      //_p è un vettore enumerativo contenente puntatori js
						  //quindi sto accedendo a dei puntatori js;
	for(let i of _p){//si può utilizzare for of;
		i.style.backgroundColor = "green";
	}

});
