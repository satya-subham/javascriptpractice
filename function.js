function fun(){
    let a = 10;
    let b = 20;
     return c = a+b;    
}
 let ans = fun()
 console.log(c)




//  **************************************
//  Arrow Function =============>>>>>>>>
// ****************************************

let multiple=()=>{
    let a = 10;
    let b = 20;
    return d = a*b;
}
 let mul = multiple()
console.log(d);


//  ****************************************************************************
//  IIFE Function (Immediately Invoked Function Expression) =============>>>>>>>>
// *****************************************************************************

(function div(){
    let a = 10;
    let b = 20;
     return e = b/a;    
})();
console.log(e);



//  ********************************************************
//  Functions Are FirstClass Citizen =============>>>>>>>>
// ******************************************************

function a(x,y){
    return x+y;
}

let b = a;
console.log(b(6,7));