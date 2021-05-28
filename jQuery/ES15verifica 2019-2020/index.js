"use strict"
let button;
let t = 0;
let tim
let m = 0;
let sec
let min
 $(document).ready(function(){
     let header = $("#header");
     let cont = 0;
     
     let main = $("#mainSection");
     header.animate({
     "width":"900px",
     "height":"90px",
     "font-size":"30pt"},1500,function(){
          for (let i = 0; i < 3 ; i++) {
               let fiel = $("<fieldset>");
               fiel.appendTo(main);
               let legend = $("<legend>");
               legend.html(elencoDomande[i].argomento);
               legend.appendTo(fiel);
               for (const j of elencoDomande[i].domande) {
                    let label = $("<label>");
                    label.html(j.domanda);
                    label.appendTo(fiel);
                    let input = $("<input>");
                    input.prop("type","radio");
                    input.prop("name",cont);
                    input.appendTo(fiel)
                    input.val("T");
                    label = $("<label>");
                    label.html("T");
                    label.appendTo(fiel);
                    input = $("<input>");
                    input.prop("type","radio");
                    input.prop("name",cont++);
                    input.appendTo(fiel)
                    input.val("F");
                    label = $("<label>");
                    label.html("F");
                    label.appendTo(fiel);
                    let br=$("<br/>");
                    br.appendTo(fiel);
               }
          }
          button = $("<button>");
          button.addClass("invia");
          button.appendTo(main);
          button.html("Invia");
          button.on("click",caio);
          let timer = $("#timer");
          min = $("<span>");
          sec=$("<span>")
          min.appendTo(timer);
          sec.appendTo(timer);
          tim = setInterval(cambiatimer, 1000);
     
     });
     function cambiatimer(){
          if(t++==59)
          {
               t=0;
               m++;
          }
          min.html(pad(m)+":");
          sec.html(pad(t));
     }
     function caio(){
          if (tim) clearInterval(tim);
          t=0;
          m=0;
          let punti=0;
          button.prop("disabled",true);
          let h=0;
          for (let i = 0; i < 3 ; i++) {
               for (const j of elencoDomande[i].domande) {
                    let elenco=document.getElementsByName(h++);
                    if(elenco[0].checked==true)
                    {
                         if(j.risposta=="T") punti++;
                         else punti = punti-0.25;
                    }else if(elenco[1].checked==true)
                    {
                         if(j.risposta=="F") punti++;
                         else punti = punti-0.25;
                    }
               }
          }























          console.log(punti);

          button.prop("disabled",false);
          tim = setInterval(cambiatimer, 1000);

     }
	
 });
// Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
function pad(number) {
     return (number < 10 ? '0' : '') + number;
}
