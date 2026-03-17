var a = 10;
function fun(){
    log(a);
    var a = 20;
    function foo(){
        a++;
        log(a);
        var a = 30;
    }
    foo();
}


/*

There is a concept of hoisting 

javascript code runs 2 times from top to bottom 
in javascript all declaration goes to memory  

when javascript run ....it creates global execution context 

javascript run code in 2 phase...in which the first is memory creation 
/// which runs at the top of code 


first is memory execution phase ...where it runs which create memory 

GLOBAL EXECUTION CONTEXT 
---Memory execution    |     code Execution 

    undefined          |    log(a) --->undefined 
    a                  |                    
    fun: function(){   |    fun()   
    __________         | 
    }                  | 



    local

    Memory              |       Code
    
    undefined           |       log(a)   -> undefined

*/