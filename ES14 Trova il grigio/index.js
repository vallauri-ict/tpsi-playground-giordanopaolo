"use strict"
const DIM=9;
let divs = [];
$(document).ready(function() {
    let wr=$("#wrapper");
    wr.css({"backgroundColor":"#FF9",
            "flaot":"left"});
    let pos=$("#txtPosizione");
    for(let i=0; i < DIM ;i++)
    {
        let div=$("<div>");
        div.addClass("box");
        let n=GeneraNumero(0,255)
        div.css("backgroundColor",`rgb(${n}, ${n}, ${n})`);
        div.appendTo(wr);
        divs[i]=div;
        
        console.log(divs);
        div.hover(function(){
            div.attr("placeholder","Ciao");
        }).mouseout(function(){
            div.removeAttr("placeholder");
        })
        

    }
    let butt=$("#btnOk")
    
    let bho=$("#txtColore");
        butt.on("click",function(){
            let i = pos.val()
            let h = divs[i].css("backgroundColor").substr(4, 3);
            if(parseInt(h)==bho.val())
                alert("bravo");
            else if(parseInt(h)>bho.val())
            {
                alert("troppo piccolo");
                /*setto i colori*/

            }
            else alert("troppo grande");
        })

});
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}