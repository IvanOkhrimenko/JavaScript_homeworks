var Module = {};
Module.findClass = function(string){
    if(typeof string != "string"){
        return console.error("this method can be only string")
    }
    return document.querySelectorAll(string);
}
window.onload = function(){
    var array = Module.findClass(".redbutton");

    var array1 = Module.findClass(4543);
    console.error(array);
    console.log(array);
    console.info(array);
}
