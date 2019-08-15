function changetxt() {
    var blt=document.getElementById("smthg");
        if(blt.style.fontWeight=="bold"){
             blt.style.fontWeight="normal";
        }
        else{blt.style.fontWeight="bold";
        }
}
function m3awej() {
    var blt=document.getElementById("smthg");
        if(blt.style.fontStyle=="italic"){
             blt.style.fontStyle="normal";
        }
        else{blt.style.fontStyle="italic";
        }
}
function msater() {
    var blt=document.getElementById("smthg");
        if(blt.style.textDecoration=="underline"){
             blt.style.textDecoration="none";
        }
        else{blt.style.textDecoration="underline";
        }
}
function kaber(){
    document.getElementById("smthg").style.fontSize=document.getElementById("kbirwsghir").value
}
function la9ta(){
    var blt=document.getElementById("smthg");
    var jj=document.getElementById("avg").value;
    blt.style.fontFamily=jj;
}
$(document).ready(function(){
    $(".tsawr .a").hover(function(){
        $(this).find(".imggg").fadeto(200,0.6);
        $(this).find("button").fadeto(50,1);
    },function(){
        $(this).find(".imggg").fadeto(200,1);
        $(this).find("button").fadeto(50,0);

    })
});