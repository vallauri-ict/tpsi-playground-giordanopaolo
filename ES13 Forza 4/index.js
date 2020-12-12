"use strict";
const RIGHE = 6;
const COLONNE = 7;
const GIALLO = "rgb(255, 255, 0)";
const ROSSO = "rgb(255, 0, 0)";
const GRIGIO = "rgb(187, 187, 187)";

let turno = GIALLO;
$(document).ready( function(){
    let wr  = $("#wrapper");
    let hd =$("#header");
    //creazione pedine intestazione:
    for(let i = 0;i < COLONNE;i++)
    {
        let pedina = $("<div>");
        pedina.addClass("pedina");
        pedina.appendTo(hd);
        //pedina.prop("id",`btn-${i}`);
        /*pedina.hover(
            ///CORRETTO
            function()
            {
                $(this).css("backgroundColor",turno);//una sola prop
                $(this).css({"backgroundColor":turno});//con tante prop
            },
            function()
            {
                $(this).css("backgroundColor",GRIGIO);
            });*/
    }
    ///creazione pedine wrapper
    for(let i = 0;i < RIGHE ;i++)
        for(let j = 0;j < COLONNE ;j++)
        {
            let pedina = $("<div>");
            pedina.addClass("pedina");
            pedina.appendTo(wr);
            pedina.prop("id",`btn-${i}-${j}`);

        }
    ///utilizza dei delegate events se nella creazione dinamica passo più volte
    hd.on("mouseenter","div",function(){$(this).css("backgroundColor",turno);});
    hd.on("mouseleave","div",function(){$(this).css("backgroundColor",GRIGIO);});
    hd.on("click", "div", down);












    function down(){
        //restituisce l'indice di $(this) all'interno del contenitore
        let colonna = hd.children("div").index($(this));
        let riga = RIGHE - 1; ///posizione della prima cella libera
        for(let i = 0 ; i < RIGHE ;i++)
        {
            
            let p = $(`#btn-${i}-${colonna}`);
            console.log(p.css("backgroundColor"));
            if(p.css("backgroundColor") != GRIGIO)
            {
                riga = i - 1;
                break;
            }
        }
        ///se c'è una cella libera entra nella if
        if(riga!=-1)
        {
            let pedina = $("<div>");
            pedina.appendTo(wr);
            pedina.addClass("pedina");
            pedina.css({"backgroundColor":turno,
                        "position":"absolute",
                        ///-60 per solo dei numeri, "-60px" per mettere px
                        "top":-60,
                        "left":colonna*60+5
                    });
            hd.off("click");
            let _turno = turno;
            
            if(turno == GIALLO)
                turno = ROSSO;
            else turno = GIALLO;
            $(this).trigger("mouseenter");
            pedina.animate({"top":riga*60 + 5},200*(riga+1),function(){
                
                $(`#btn-${riga}-${colonna}`).css({"backgroundColor":_turno});
               
                //non posso fare hd.on("click", down); perchè non posso fare un misto
                hd.on("click", "div", down);
               
            });
            



            
            
        }
        else alert("Mossa non valida");

        
        


        
    }













    function GeneraNumero(min, max)
    {
        return Math.floor((max - min + 1 ) * Math.random() + min);
    }
})