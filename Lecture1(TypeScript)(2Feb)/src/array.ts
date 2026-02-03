let numArr: number[] = [1,2,3,4,5];
console.log("Number Array: ", numArr);

type User = {
    name : string,
    age: number
}

let users: User[] = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

function printUserName(user: User[]):void{
    user.forEach((user:User):void =>{
        console.log(user.name);
    })
}
printUserName(users);