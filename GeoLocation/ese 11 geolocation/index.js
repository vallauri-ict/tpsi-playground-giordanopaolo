"use strict";

const URL = "https://maps.googleapis.com/maps/api/staticmap?"
const key  = "AIzaSyBZKYgxbiyRE7DknUpnRP2QHCBVjvLgH7g" 

const params = {
	"key" : key,
	"center" : /*"via san michele 68, fossano",*/ "44.5557763, 7.7347183",
	"zoom" : 16,
	"size" : "800x600",	
	// maptype viene aggiunto dopo  manualmente
	/*"markers" : "color:blue|size:big|label:V|via san michele 68, fossano"	*/
}
const mapType = ['roadmap', 'satellite', 'hybrid', 'terrain', 'streetview'];

window.onload = function () {	
    let imgBox = $("#imgBox");
    let btnBox = $("#btnBox");
    for (const item of mapType) {
        let bottone = $("<button>");
        bottone.text(item);
        bottone.appendTo(btnBox);
        bottone.on("click",visualizzaMappa);
    }






    function visualizzaMappa(){
        let url =  URL + setParamiters($(this).text());
        if($(this).text() != "streetview")
        {
            console.log(url);
            imgBox.prop("src", url)
            
        }
    }

    function setParamiters(mapType){
        let qstring = "";
        for (const key in params) {
            qstring += key + "=" + params[key] + "&";
        }
        qstring += "maptype=" + mapType;
        return qstring;
        
    }
}