"use strict";
let ul;
function evidenzia(selector){
    ul.children().css({"backgroundColor":"#FFF"});
    ul.children(selector).css({"backgroundColor":"#FF0"});
}
$(document).ready( function(){
    ul = $("#wrapper");
    $("#btn1").on("click",function(){
        alert( ul.children().length)
    })
    $("#btn2").on("click",function(){
        let l=ul.children();
        let s = "";
        for(let i = 0; i < l.length; i++)
        {
            //s += l[i].innerHTML;
            //s += $(l[i]).html(); lo trasformo perchè l[i] è js e se non lo trasformo 
            //non posso usare un metodo jquery su un oggetto js
            //s += l.eq(i).html();
        }
        for(let item of l)
        {
            //s += $(item).html();//item è js quindi trasformo
        }
        
        l.each(function(i, ref){//sia i che ref sono js
            //s += $(ref).html();
            //s += l.eq(i).html();
            s += $(this).html();
        })
        alert(s)
    })
    $("#btn3").on("click",function(){
        //$("#wrapper li:nth-of-type(even)").css({"backgroundColor":"#FF0"});
        $(ul).children(":nth-of-type(even)").css({"backgroundColor":"#FF0"});
    })
    $("#btn4").on("click",function(){
        let color = 50;
        let aus = $(ul).children(":nth-of-type(odd)")
        aus.each(function(i,ref){
            $(ref).css({"backgroundColor":"rgb(0,"+color+",0)"});
            color+=50;
        })
    })
    
})
