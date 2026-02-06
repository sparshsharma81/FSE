//Union type  --> combination of multiple types 

// type; *cannot do this using interface; *cannot do this using int 
type numOrStr = number | string | boolean;

//let a : umber ;
//a =10;
let a : numOrStr;
a = 10;
a = "hello";

type role = "user" | "admin" | "superadmin";

let r:role;
r = "user";
r = "admin";
// r = "manager"; // error: Type '"manager"' is not assignable to type 'role'.

interface TeamLead{
    name : string,
    empId: string,
    salary: number,
    projectId: string 

}

type EmpOrTeamLead = Emp | TeamLead;

let e : EmpOrTeamLead={
    name : "Nitish",
    empId: "E123",
    salary: 50000,
    projectId: "P456"
}


//intersection type --> combination of multiple types but all the types should be satisfied

type empAndTeamLead = Emp & TeamLead;

let f : empAndTeamLead = {
    name : "Nitish",
    empId: "E123",
    salary: 50000,
    projectId: "P456"
}

interface Emp{
    name: string,
    empId: string,
    salary: number,
    phone: number 
}

interface TeamLead{
    name : string,
    empId: string,
    salary: number,
    projectId: string
}


interface User{
    name: string,
}
interface User{
    age: number 
}
//we declare two variables with same name then it will merge both the variables
//there is no error in these cases
//interface is expanded

let u: User = {
    name: "Nitish",
    age: 25
};

//difference between type and interface
//type is not expandable but interface is expandable        