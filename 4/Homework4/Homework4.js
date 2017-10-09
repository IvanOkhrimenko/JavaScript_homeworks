window.onload = function(){
     var w;
     var flagFirst  = false;
     var flagSecond = false;
     var flagThird  = false;
     var first  = document.getElementById("les1");
     var second = document.getElementById("les2");
     var third  = document.getElementById("les3");
    

    first.onclick = function(){
   w = window.open("Homework4/JS_Lesson_1.html", "Lesson 1","width=400,height=400" );
   first.innerHTML = "JS lesson 1 (opened)";
   flagFirst = !flagFirst;
                // Если значение флага false, то окно будет закрыто и значение в ссылке изменится
                if(!flagFirst){
                    first.innerHTML = "JS lesson 1";
                    w.close();}
    }
    second.onclick = function(){
        w = window.open("Homework4/JS_Lesson_2.html", "Lesson 2","width=400,height=400" );
        second.innerHTML = "JS lesson 2 (opened)";
        flagSecond = !flagSecond;
            
            }
    third.onclick = function() {
        w = window.open ("Homework4/JS_Lesson_3.html", "Lesson 3","width=400,height=400" );
        third.innerHTML = "JS lesson 3 (opened)";
        flagThird = !flagThird;
            if (!flagThird){
                third.innerHTML = "JS lesson 3"
                w.close();}
            }
           
            
    }
