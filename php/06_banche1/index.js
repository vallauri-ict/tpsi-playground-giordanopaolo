"use strict";

$(function () {// forma abbreviata del document ready
	let _wFiliali=$("#wrapFiliali");
	let _wCorrentisti= $("#wrapCorrentisti");
    let _lstBanche = $("#lstBanche");
	let _lstFiliali = $("#lstFiliali");
	let _tbody = $("#tabCorrentisti").children("tbody");

    //_wFiliali.css("display", "none");
	_wCorrentisti.css("display", "none");
    _lstBanche.prop("selectedIndex",-1);
	_lstBanche.on("change", function(){
		_lstFiliali.empty();
		_wCorrentisti.css("display", "none");
		console.log(_lstBanche.val())
		let request = inviaRichiesta("get", "servizi/elencoFiliali.php",
		{
			"cBanca":_lstBanche.val()
		});
		request.fail(errore);
		request.done(function(filiali){
			console.log(filiali);
			for (const filiale of filiali) {
				let op = $("<option>");
				op.appendTo(_lstFiliali);
				op.val(filiale["cFiliale"]);
				op.text(filiale.Nome);
			}
			_lstFiliali.prop("selectedIndex",-1)
		})
	})
	_lstFiliali.on("change",function(){
		let request = inviaRichiesta("get", "servizi/elencoCorrentisti.php",
		{
			"cFiliale":_lstFiliali.val()
		});
		request.fail(errore);
		request.done(function(correntisti){
			_tbody.empty();
			console.log(correntisti);
			for (const correntista of correntisti) {
				let tr = $("<tr>");
				tr.appendTo(_tbody);
				
				let td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cCorrentista);
				
				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Nome);

				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cComune);

				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Telefono);

				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.cConto);

				td = $("<td>");
				td.appendTo(tr);
				td.text(correntista.Saldo);
				
				
			}
			_wCorrentisti.css("display", "block");
		})
	})
});