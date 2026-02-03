function isAllowedToVote(age: number):boolean {
    if(age < 18){
        return false;

    }
    return true;
}

let result;

//type infer -- it is the auto detection ...like the typescript automatically
//give the type to typescript
 
result = isAllowedToVote(20);
console.log("Is allowed to vote: "+ result);
