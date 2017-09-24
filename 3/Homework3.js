window.onload = function(){
var Homa3 = {};
    Homa3.start = function(){
    var vreate = document.getElementById("creator");
    vreate.onclick = function(){
    var p= document.createElement("p");
    p.innerHTML = "qqqqq";
    document.body.appendChild(p);
    var counter = document.querySelectorAll("p");
    console.log(counter);
    if(counter.length>9){

       
        for (var i = 0; i < counter.length; i++) {
            document.body.removeChild(counter[i]);       
        }
    }
 }
 
    }
    Homa3.start();
}
