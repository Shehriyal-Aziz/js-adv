// scope
// global scope => every where in code
// func scope => just in func can be use
// block scope => in {} only

// execution context - memory phase and execution phase
// js jab bhi aapka func dekhta h to wo execution context banata h. 
// execution  context ek process h jo 2 phase mn run hota h 
// memory phase => memory allot hoti h codee like to var and others
// execution phase => is mn execute hota h 
// in simple words 
// execution context ek hypothetical senario h
// jab bhi func code mn aai ga ek imaginary daba ban jaai ga aur us mn cheezain stored hn. is dabe ko dekhte hi js isko chalane k liye do phases banati h jinkpo combine mn execution context kehte hn  


// lexical scope and dynamic scope

// lexical scoping =>aapke var ki physical location k wo kahabn pr h (eg func k andar) to wo usi area mn acees kiya ja sakta h 
// aap kya aur kahan tk access kr paao ge it completely depends on its physical location

// dynamic scoping => is k zariye kahin aur banne wala variable kahin aur use kiya ja sakta h but its not available in js


// clouser

// clouser hote hn functions jo parent func ke andar ho aur andar wala func return ho rha ho, and ruturning func use any var of parent func
// eg
function abc(){
    let a = 23;
    return function def(){
        console.log(a);
    }
}
// clouser koi physical code ya keyword nhi just ek concept hn ho specific format mn lihe huye code ko clouser ka nam de diya h bs
// adv 
// private var,reduce global polution and etc
// what clouser do
// 1. jo parent func hota h ruturn krne pr wo destroy ho jata h including its var but still we can use it inside child func how
// how => jab bhi clouser banta h to uska ek backlink banaya jata h jo var and other things of parent ko is mn [[enviroment]] store krta h
// use cases 
// private counter
function count(){
    let c = 0;
    return function(){
        console.log(c);
    };
}
// ek daba bana jis ka khudka count= 0 h jo inc hoga
let fun = count();
fun();//1
fun();//2
fun();//3
fun();//4
// ek new daba bana jis ka ek new var of count bane ga jis calue 0 ho gi 
let fun2 = count();
fun2();//1
fun2();//2
fun2();//3

// enscapculation
// => inner logic hide kr dena aur wo cheez show krna jin ki need h
// eg private counter
    function clickme() {
      let click = 0;
      return function () {
        if (click < 5) {
          click++;
          console.log(`clicked ${click} times`);
        } else {
          console.error("Limited Exceeded");
        }
      };
    }
    let fuc = clickme();

    