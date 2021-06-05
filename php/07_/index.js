"use strict";

$(function () {
	let _wrapper=$("#wrapper");
	let _divTitolo = $("#divTitolo");
    let _divFiliali = $("#divFiliali");
	let _divMovimenti = $("#divMovimenti")
	let tbody = $("#divMovimenti").find("tbody");
	let _btnLogOut = $("#btnLogout");
	
	
	_btnLogOut.on("click", function(){
		let request = inviaRichiesta("post", "server/logOut.php");
		request.fail(errore);
		request.done(function(){
			alert("Sei stato disconnesso correttamente");
			window.location.href = "login.html";
		})
	})

	let _richiestaFiliali = inviaRichiesta("get", "server/elencoFiliali.php");
	
	_richiestaFiliali.fail(errore)
	
	_richiestaFiliali.done(function (data) {
		_divTitolo.append($("<p>").text(data["Nome"]).css("text-align","right"))
		console.log(data["filiali"]);
		_wrapper.show();
		_divMovimenti.hide();
		_divFiliali.css("text-align", "center");
		for (const filiale of data["filiali"]) 
		{
			let opt = $("<input type='radio' name='optFiliali'>");
			opt.appendTo(_divFiliali);
			opt.val(filiale.cFiliale);
			let span = $("<span>");
			span.text(filiale.Nome);
			span.appendTo(_divFiliali);
			let br = $("<br>");
			br.appendTo(_divFiliali);
		}

		let btn = $("<button class='btn btn-primary'>");
		btn.appendTo(_divFiliali);
		btn.css({"margin":"15px"});
		btn.text("Visualizza movimenti");
		btn.on("click", function(){
			_divMovimenti.show();
			let cFiliale= $("input[type=radio]:checked").val();
			let request= inviaRichiesta("get", "server/elencoMovimenti.php",{"cFiliale":cFiliale})
			request.fail(errore);
			request.done(function(data){
				console.log(data);
				for (const mov of data) {
					let tr =$("<tr>");
					tr.appendTo(tbody);

					let td =$("<td>");
					td.text(mov.cMov)
					td.appendTo(tr);

					td =$("<td>");
					td.text(mov.descriz)
					td.appendTo(tr);

					td =$("<td>");
					td.text(mov.data)
					td.appendTo(tr);

					td =$("<td>");
					td.text(mov.importo)
					td.appendTo(tr);


				}
			})
		})
		
    });
	
		
	
});
