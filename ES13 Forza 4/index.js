"use strict";
const RIGHE = 6;
const COLONNE = 7;
const GIALLO = "rgb(255, 255, 0)";
const ROSSO = "rgb(255, 0, 0)";
const GRIGIO = "#BBB";

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
        let pedina = $("<div>");
        //restituisce l'indice di $(this) all'interno del contenitore
        let colonna = hd.children("div").index($(this));
        let riga = RIGHE - 1; ///posizione della prima cella libera
        for(let i = 0 ; i < RIGHE ;i++)
        {
            let p = $(`#btn-${i}-${colonna}`);
            if(p.css("backgroundColor") != GRIGIO)
            {
                riga = i - 1;
                break;
            }
        }
    }













    function GeneraNumero(min, max)
    {
        return Math.floor((max - min + 1 ) * Math.random() + min);
    }
})