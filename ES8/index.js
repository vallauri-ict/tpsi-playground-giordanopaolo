"use strict";
let ul = [];

$(document).ready( function(){
    let contenitore=$("#wrapper");
    ul.push(contenitore.children("ul").first());
    ul.push(contenitore.children("ul").last());

})
let p;
let form1;
function aggiungi(i){
    i--;
    //let li=$("<li> menu 1 voce 4 </li>");
    let li=$("<li>");
    let n=ul[i].children("li").length+1;
    li.html("menù"+(i+1)+"voce"+n)
    ul[i].append(li);
}
function sposta(i){
    i--;
    let li = ul[i].children("li").last();
    if(i==0)
        li.appendTo(ul[1])
    else li.appendTo(ul[0])
}
function aggiungiprima(i){
    i--;
    let li=$("<li>");
    li.html("testo per primo")
    ul[i].children("li").first().before(li);
}
function aggiugiDopo(i){
    i--;
    let li=$("<li>");
    li.html("testo per primo")
    ul[i].children("li").first().after(li);
}
function replica(i){
    i--;
    let li=$("<li>");
    li.html("testo praaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaima")
    ul[0].each(function(i,ref){
        ul[0].children().before(li);
    })
}
function replica2(i){
    i--;
    let li=$("<li>");
    li.html("testo prima")
    ul[1].each(function(i,ref){
        ul[1].children().after(li);
    })
}

function creazioneconcostruttore(){
    $("<div>", {
        "css": { // metodo jQuery
        "background-color": "#ddd",
        "color": "blue"
        },
        "text": "# Salve mondo", // metodo jQuery
        "appendTo": ul,
        "append":[
            $("<label>", { "text": "hobbies" } ),
            $("<input>", {
            "type": "radio",
            "name": "sports"
            }),
            $("<span>", { "text": "hobbies" } ),
            $("<input>", {
                "type": "radio",
                "name": "sports"
                })
            ]
    })
}