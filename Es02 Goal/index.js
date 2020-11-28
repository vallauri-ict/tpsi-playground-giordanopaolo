"use strict"
$(document).ready(function()
{	
	let _calciatore = $("#calciatore");
	let _palla = $("#palla");
	let _btnEntra = $("#btnEntra")
	let _btnEsci = $("#btnEsci")
	let _btnVisualizzaPalla = $("#btnVisualizzaPalla")
	let _btnNascondiPalla = $("#btnNascondiPalla")
	let _btnTira = $("#btnTira")
	_btnNascondiPalla.css({"visibility":"hidden"});
	_calciatore.hide();
	_palla.hide();
	_palla.prop("goal",false);
	_btnTira.css({"visibility":"hidden"});
	_btnTira.on("click",function(){
		$(this).css("visibility","hidden");
		let pos = {
			"left":"1024px",
			"top":"300px",
			"width":"50px",
			"height":"50px",
		}
		_palla.animate(pos,1500, function(){
			$(this).prop("goal",true);
		});

	});
	_btnEntra.on("click",function(){
		_calciatore.show(500,function(){
			_btnEsci.css({"visibility":"visible"});
			checktira();
		});
		$(this).css("visibility","hidden");
	})
	_btnEsci.on("click",function(){
		_calciatore.hide(500,function(){
			_btnEntra.css({"visibility":"visible"});//funzione di call back
			checktira();
		});
		$(this).css("visibility","hidden");//this è un puntatore js e non jquery quindi non posso fare .css quindi o uso la sintassi js oppure trasformo this in jquery tramite un selettore $(this);		
	})
	_btnEsci.css("visibility","hidden");
	_btnVisualizzaPalla.on("click",function(){
		$(this).css({"visualizza":"visible"});
		_palla.fadeIn(500,function(){
			_btnNascondiPalla.css({"visibility":"visible"});
			checktira();
		})
		_btnVisualizzaPalla.css({"visibility":"hidden"});
	})
	_btnNascondiPalla.on("click",function(){
		$(this).css({"visualizza":"visible"});
		_palla.fadeOut(500,function(){
			_btnVisualizzaPalla.css({"visibility":"visible"});
			checktira();
			if(_palla.prop("goal")){
				let pos = {
					"left":"",
					"top":"",
					"width":"",
					"height":"",
				}
				_palla.css(pos);
				_palla.prop("goal",false);
			}
		})
		_btnNascondiPalla.css({"visibility":"hidden"});
	})
	function checktira(){
		if((_calciatore.is(":visible"))&&(_palla.is(":visible")))
		{
			_btnTira.css("visibility","visible");
		}
		else _btnTira.css("visibility","hidden");
	}
	$("#btnRosso").on("click",function(){
		_palla.prop("src","img/PalloneRosso.jpg");
	})
	$("#btnBianco").on("click",function(){
		_palla.prop("src","img/palla.jpg");
	})

});