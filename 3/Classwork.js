var Classwork1 = {};

Classwork1.startClass = function() {
    var paragraph = document.getElementById("parag");
    var li        = document.getElementById("links");
    var di        = document.getElementById("divs");

    paragraph.onclick= function(){
       var paragrr = document.getElementsByTagName("p");
       for (var i = 0; i < paragrr.length; i++){
        paragrr[i].style.border = "5px inset red";
       }
    }
    
   
    li.onclick = function () {
        var lin = document.getElementsByTagName("a");
        for (var i = 0; i < lin.length; i++) {
            lin[i].style.border = "5px dotted black";
        }
    }
    di.onclick = function(){
        var diiv = document.getElementById("test-id");
        diiv.style.border = "5px ridge purple"
    }

}