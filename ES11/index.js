"use strict";
$(document).ready( function(){
    let wr  = $("#wrapper");
    for(let i = 0 ; i < 36 ; i++)
    {
        let box = $("<div>");
        box.appendTo(wr);
        box.addClass("box");
    }
    setInterval(Aggiorna,32)
    function Aggiorna(){
        wr.children().eq(GeneraNumero(0,35))
        .animate({"opacity":"0.3"})
        .animate({"opacity":"0.6"})
        .animate({"opacity":"0.1"})
        

    }
    function GeneraNumero(min, max)
    {
        return Math.floor((max - min + 1 ) * Math.random() + min);
    }
})