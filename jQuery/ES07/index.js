"use strict";
$(document).ready( function(){
    form1=$("#form1");
})
let p;
let form1;
function visualizza(cod){
    let s = "";
    switch (cod) {
        case 1:
            s = form1.find("input[type=text]:first-of-type").val();//attenzione al [type=text]
            break;
        case 2:
            //s = form1.children("label").eq(1).children("select").val();
            s = form1.children("label").filter(":nth-of-type(2)").children("select").val();
            break;
        case 3:
            let ch = form1.children("fieldset").eq(0).find("input[type=checkbox]");
            for(let i = 0 ; i < ch.length ; i++)
                s += ch.eq(i).prop("name")+" - "+ch.eq(i).val()+"\n";
            break;
        case 4:
            let chk = form1.children("fieldset").eq(0).find("input[type=checkbox]:checked");
            for(let i = 0 ; i < chk.length ; i++)
                s += chk.eq(i).prop("name")+" - "+chk.eq(i).val()+"\n";
            break;
        case 5:
            p = form1.children("fieldset").eq(0).find("input[type=checkbox]").not(":checked");
            p.each(function(i,ref){
                s += $(ref).prop("name")+" - "+p.eq(i).val()+"\n";
            }) 
            break;
        case 6:
            p = form1.children("fieldset").eq(1).find("input[type=radio]:checked");
            s += p.val();
            break;
        case 7:
            p = form1.children("fieldset").eq(1).find("input[type=radio]").not(":checked");
            s += p.val();
            break;
        case 8:
            p = form1.children("select");
            let h = p.children("option:selected")
            h.each(function(i,ref){
               s+= $(ref).val()+"\n";
            })
            break;
        default:
            break;
    }
    alert(s);
}
function imposta(cod){
    let s = "";
    switch (cod) {
        case 1:
            form1.find("input[type=text]").first().val("nuovo valore")

            break;
        case 2:
            //form1.find("select").first().prop("selectedIndex",1);
            form1.find("select").first().children("option").eq(2).prop("selected",true)
            break;
        case 3:
            form1.children("fieldset").eq(0).find("input[type=checkbox]").eq(1).prop("checked",true)
            break;
        case 4:
            form1.children("fieldset").eq(1).find("input[type=radio]").eq(1).prop("checked",true)
            break;
        case 5:
            form1.children("select").last().children("option").eq(3).prop("selected",true)
            break;
    }
}
