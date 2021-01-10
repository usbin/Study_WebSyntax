var f = function(){
    console.log(1+1);
    console.log(1+2);
}
function f1(){
    console.log(1+1);
    console.log(1+2);
}

var a = [];
var o = {func : f};
a.push(o);
a[0].func();