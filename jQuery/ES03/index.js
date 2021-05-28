"use strict";
$(document).ready(function(){
    let _indietro = $("#btnIndietro");
	let _avanti = $("#btnAvanti");
    let _img =$("#img");
    _indietro.css("width","140px");
    _indietro.css("height","40px");
    _avanti.css("width","140px");
    _avanti.css("height","40px");
    _indietro.css("font-weight","bolder");
    _indietro.css("backgroundColor","orange");
    _indietro.css("border-radius","50%");
    _avanti.css("font-weight","bolder");
    _avanti.css("backgroundColor","orange");
    _avanti.css("border-radius","50%");
    //_indietro.css("lineHeight","400px")
    _img.css("height","400px");
    document.getElementById("btnIndietro").disabled = true;
    //_img.prop("disabled","true")
    _img.prop("src","img/img1.jpg");
    let i = 1;
    _avanti.on("click",function(){
        let str = "img/img" + (++i) + ".jpg";
        if(i == 7)
            document.getElementById("btnAvanti").disabled = true;
        else if(i != 1)
            document.getElementById("btnIndietro").disabled = false;
        _img.prop("src",str);

    })
    _indietro.on("click",function(){
        let str = "img/img" + (--i) + ".jpg";
        if(i == 1)
            document.getElementById("btnIndietro").disabled = true;
        else if(i != 7)
            document.getElementById("btnAvanti").disabled = false;
        _img.prop("src",str);

    })
});