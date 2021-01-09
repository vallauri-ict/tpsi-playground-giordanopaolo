"use strict";
 
$(document).ready(function () {
	let wrapper = $('#elencoArticoli');
	let details =$(".details")

    $.ajax({
	   "url": "http://localhost:3000/fotocamere",  
       "timeout": 1000,    
	   "success": visualizza,
	   "error": errore
	})
});


function visualizza (data) {
	let articoli=data;
	let child;
	let table;
	let i;
	let wrapper = $('#elencoArticoli');
	let details = $(".details").hide();
	let btncarrello = $("#btnCarrello");
	let carrello = $("#carrello");
	table=carrello.children("table");
	btncarrello.on("click",apricarrello)
	function apricarrello(){
		btncarrello.html("&#708 Chiudi carrello");
		carrello.slideDown(1000);
		btncarrello.off("click");
		btncarrello.on("click",chiudicarrello)
	}
	function chiudicarrello(){
		carrello.slideUp(1000);
		btncarrello.html("&#708 Apri carrello");
		btncarrello.off("click");
		btncarrello.on("click",apricarrello)
	}
	let cont = 0;
	for (const i in articoli) {
		let div=$("<div>");
		div.appendTo(wrapper);
		div.prop("id","Article-"+cont++);
		div.addClass("article");
		div.on("click",mostra)
		let img =$("<img>");
		img.appendTo(div);
		img.prop("src","img/"+articoli[i].src+".jpg");
		img.prop("title","Aggiungi al carrello");
		img.addClass("image");
		img.css("color","yellow");
		img.hover(function(){
			child=div.children("div");
			child.css("visibility","visible");
		}).mouseout(function(){
			child.css("visibility","hidden");
		})
		let divs=$("<div>");
		divs.appendTo(div);
		divs.addClass("name");
		divs.html(articoli[i].nome+"");
		divs.css("visibility","hidden");
	}
	
	details.on("click","span",function(){
		details.slideUp(1000);
	})
	function mostra(){
		details.slideDown(1000);
		details.html("");
		details.css("display","block");
		let close=$("<div>");
		close.addClass("detail-close");
		close.appendTo(details);
		let span1=$("<span>");
		span1.appendTo(close);
		span1.html("X");
		let divimmagine=$("<div>");
		divimmagine.addClass("detail-img");
		divimmagine.appendTo(details);
		let immagine = $("<img>");
		i = ($(this).prop("id").substr(8,2));
		immagine.prop("src","img/"+articoli[i].src+".jpg");
		immagine.appendTo(divimmagine);
		let divinfo = $("<div>");
		divinfo.addClass("detail-info");
		divinfo.appendTo(details);
		let h4 = $("<h4>");
		h4.addClass("item-title");
		h4.appendTo(divinfo);
		h4.html(articoli[i].nome)
		let p = $("<p>");
		p.appendTo(divinfo);
		p.html(articoli[i].descrizione);
		p = $("<p>");
		p.appendTo(divinfo);
		p.html("$ "+articoli[i].prezzo);
		let Button=$("<button>");
		Button.appendTo(divinfo);
		Button.addClass("item-add");
		Button.prop("id","btnaggiungialcarrello")
		Button.html("aggiungi al carrello");
	}
	details.on("click","#btnaggiungialcarrello",function(){
		let tdnome=$("td");
		let b=false;
		for (let j=0;j<tdnome.length;j++) {
			if(tdnome.eq(j).text()==articoli[i].nome)
			{
				b=true;
				tdnome.eq(j+2).text(parseInt(tdnome.eq(j+2).text())+1)
			}
		}
		if(!b){
			let tr=$("<tr>");
			tr.appendTo(table);
			let td=$("<td>");
			td.appendTo(tr);
			td.html(articoli[i].nome);
			td=$("<td>");
			td.appendTo(tr);
			td.html("$ "+articoli[i].prezzo);
			td=$("<td>");
			td.appendTo(tr);
			td.html("1");
			td=$("<td>");
			td.appendTo(tr);
			let a=$("<img>");
			a.prop("src","img/_cestino.png");
			a.appendTo(td);
			a.prop("id","img")
		}
	});
	table.on("click","#img",function(){
		console.log($(this).parent());
		$(this).parent().parent().remove();

	})
}



/* **************************************************** */

function errore(jqXHR, textStatus, str_error){
	if(jqXHR.status==0)
	   alert("connection refused or server timeout");
	else if (jqXHR.status == 200)
	   alert("Errore Formattazione dati\n" + jqXHR.responseText);
	else
	   alert("Server Error: "+jqXHR.status+ " - " +jqXHR.responseText);
}

