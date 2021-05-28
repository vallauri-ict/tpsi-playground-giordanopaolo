"use strict";
const DIM = 4;
$(document).ready( function(){
    let wr  = $("#wrapper");
    creaElementi();
    assegnaVal();
    ///PEGGIORE funge solo se gli elementi sono già stati creati e solo su quelli
    ///wr.children("div").on("click",move);
    //DELEGATE EVETS soluzione migliore e più funzionale
    wr.on("click", "div", move);





    

    function creaElementi(){
        let first = true;
        let larghezza;
        for(let i = 0 ; i < DIM ; i++)
        {
            for(let j = 0 ; j < DIM ; j++)
            {
                let div = $("<div>").appendTo(wr);
                div.addClass("pedina");
                if(first)
                {
                    larghezza = parseInt(div.css("width"))+
                                parseInt(div.css("margin-left"))*2+
                                parseInt(div.css("border-left-width"))*2+
                                parseInt(div.css("padding-left"))*2;
                    first = false;
                }       
                div.css({"top":larghezza*i,
                        "left":larghezza*j});
                div.prop("id","btn-"+i+"-"+j);
            }
        }
    }


    function assegnaVal(){
        let numeri=[];
        //let numeri=new Array(16)//corretto
        //let numeri=[16];//crea un vettore lungo 1 che contine solo 16;
        for(let i = 0; i < 15 ; i++)
            numeri[i]=(i+1);
        numeri[15]="";
        let divs=wr.children("div");
        divs.each(function(i,ref){
            
            let pos = GeneraNumero(0,numeri.length-1);
            $(ref).text(numeri[pos]);
            if(numeri[pos]!=""){
                $(ref).addClass("grigio")
            }
            //$(ref).on("click",move); //corretto
            numeri.splice(pos,1);

        })
    }

    function move(){
        let id = this.id;//js
        let id2 = $(this).prop("id");//jQuery
        let aus= id.split('-');
        let i = parseInt(aus[1]);
        let j = parseInt(aus[2]);
        if(j > 0 && $(`#btn-${i}-${j-1}`).text()=="")
            scambio($(this),$(`#btn-${i}-${j-1}`));
        else if(i > 0 && $(`#btn-${i-1}-${j}`).text()=="")
            scambio($(this),$(`#btn-${i-1}-${j}`));
        else if(i < 3 && $(`#btn-${i+1}-${j}`).text()=="")
            scambio($(this),$(`#btn-${i+1}-${j}`));
        else if(j < 3 && $(`#btn-${i}-${j+1}`).text()=="")
            scambio($(this),$(`#btn-${i}-${j+1}`));

    }
    function scambio(cella1, cella2){
        wr.off("click", "div");
        cella1.animate({
            "top":cella2.css("top"),
            "left":cella2.css("left")
        },100);
        cella2.animate({
            "top":cella1.css("top"),
            "left":cella1.css("left")
        },100,function() {
            let id=cella1.prop("id");
            cella1.prop("id",cella2.prop("id"));
            cella2.prop("id",id);
            if(controllaVincita())
                alert("bravissimo, hai vinto");
            else wr.on("click", "div", move);

            
        });
        ///wr.off("click", "div"); sbagliato perchè lo fa subito
    }
    function controllaVincita(){
        let cnt=0;
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let n = parseInt($(`#btn-${i}-${j}`).text());
                cnt++;
                if(n!=cnt && cnt!=16)
                    return false;
                
                
            }
            
        }
        return true;
    }






    function GeneraNumero(min, max)
    {
        return Math.floor((max - min + 1 ) * Math.random() + min);
    }
})