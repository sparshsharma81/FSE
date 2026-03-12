import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
let users = [
    {
        name : "Nitesh",
        email : "ni@gmail.com",
        password: "1234",
        phone : 8888
    },
    {
        name :"ritik",
        email : "ritik@gmail.com",
        password :"1331",
        phone : 4241
    }
]

const typeDefs = `
        type User{
        name :String,
        email : String ,
        password: String ,
        phone : Int
        }

        type Query {
        getUsers: [User],
        getUser: User
        }
`

//resolver --> functions run to find 

const resolvers = {
    Query: {
        getUsers:()=>{
            return users
        },
        getUser:()=>{
            return users[0];
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
})


await startStandaloneServer(server, {
    listen : {port :4000},
})

//without await -> server runs before it is ready 
// to accept requests


console.log("Server started");


//difference between query and mutation 
//mutation is for updation 