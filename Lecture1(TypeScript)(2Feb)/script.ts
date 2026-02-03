//primite data types --> number, string , boolean , undefined, null 

let a: number;
console.log(a); // undefined

//in the typescript, we do not see these types of error..as javascript
//does not have types ..if we declare a variable..we can store anything in this

a=10; // valid
console.log(a);

function isAllowedToVote(age: number, city:string): boolean {
    if(age>18 && city==="NY"){
        return true;
    }else{
        return false;
    }
)}


//so the basic structure...we write function (then paramentes) and then return type in it
