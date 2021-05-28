
let utenti = [ {"user":"pippo",  "pwd":"pwdPippo"},
               {"user":"pluto",  "pwd":"pwdPluto"},
			   {"user":"minnie", "pwd":"pwdMinnie"} ];

			   
$(document).ready(function() {
    let user = $("#txtUser");
    let msg1 = $("#msgUser");
    let msg2 = $("#msgPwd");
    let psw = $("#txtPwd");
    let vediamo
    console.log(user);
    user.hover(function(){
        user.css({"border":"1px solid blue"});
    }).mouseleave(function(){
        user.css({"border":"none"})
    })
    user.on("change",function(){
        for (const i of utenti) {
            vediamo = false;
            if(i["user"] == user.val())
            {
                vediamo = true;
            }
        }
        if(!vediamo)
        {
            msg1.text("devi compiare i campi in modo corretto");
            alert("devi compiare i campi");
            user.css({"border":"1px solid red"});
        }
        else  {
            alert("OK");
            msg1.text("OK");
            user.css({"border":"1px solid black"});
        }
            
    })
    psw.on("change",function(){
        if(psw.val().legth < 8)
            alert("psw troppo piccola");















        for (const i of utenti) {
            vediamo = false;
            if(i["psw"] == psw.val())
            {
                vediamo = true;
            }
        }
        if(!vediamo)
        {
            msg2.text("devi compiare i campi in modo corretto");
            alert("devi compiare i campi");
            psw.css({"border":"1px solid red"});
        }
        else  {
            alert("OK");
            msg2.text("OK");
            psw.css({"border":"1px solid black"});
        }
            
    })
	
});