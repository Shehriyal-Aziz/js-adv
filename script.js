// private counter
function count(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    };
}
// ek daba bana jis ka khudka count= 0 h jo inc hoga
let fun = count();
fun();//1
fun();//2
fun();//3
fun();//4
// ek new daba bana jis ka ek new var of count bane ga jis value 0 ho gi 
let fun2 = count();
fun2();//1
fun2();//2
fun2();//3