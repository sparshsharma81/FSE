// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// let users=[
//     {
//         id:"1",
//         name:"sparsh",
//         email:"sparsh123@gmail.com",
//         password:"sparsh123",
//         phone:1234567890
//     },
//     {
//         id:"2",
//         name:"Sk",
//         email:"sk123@gmail.com",
//         password:"sk123",
//         phone:1234567890
//     }
// ]

// const typeDefs=`
// type User{
// id:ID!,  # ID is a special type which serializes to a string
// # ! means not null
// name:String,
// email:String,
// password:String,
// phone:Int
// }

// type Query{
// getUsers:[User],
// getUser(id:ID!):User
// }
// type Mutation{
// addUser(name:String,email:String, password:String,phone:Int):User
// deleteUserById(id:ID!):User
// #updateUserById(id:ID!,name:String,email:String, password:String,phone:Int):User
// }
// `
// const resolvers={
//     Query:{
//         getUsers:()=>{
//             return users;
//         },
//         // resolver function has 4 parameter (optional)
//         // 1. parent, 2. args, 3.context , 4:info
//         // args: input arguments {}
//         getUser:(_,args)=>{
//             // return users[0];
//             let id=args.id;
//             let user=users.find((u)=>u.id==id)
//             return user;
//         }
//     },
//     Mutation:{
//         addUser:(_,args)=>{
// // name,email,password,phone
// let {name,email,password,phone}=args;
// let newUser={
//     id:String(Math.floor(Math.random()*1000000)),
//     name:name,
//     email:email,
//     password:password,
//     phone:phone
// }
// users.push(newUser);
// return newUser;
//         },
//         deleteUserById: (_,args)=>{
//             let id=args.id;
//             let user=users.find((u)=>u.id==id)
//             users=users.filter((u)=>u.id!=id)
//             return user;
//         },
//         // updateUserById: (_,args)=>{
//         //     let id=args.id;
//         //     let {name,email,password,phone}=args;
//         //     let user=users.find((u)=>u.id==id)
//         //     user.name=name;
//         //     user.email=email;
//         //     user.password=password;
//         //     user.phone=phone;
//         //     return user;
//         // }
//     }
// }
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });
// await startStandaloneServer(server, {
//     listen: { port: 4001 },
// });
// console.log("Server started");
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import jwt, { decode } from 'jsonwebtoken';
let secret = "sparsh";
let users=[
        {
            id:"1",
               name:"sparsh",
               email:"sparsh123@gmail.com",
            password:"sparsh123",
            phone:1234567890
        },
        {
           id:"2",
            name:"Sk",
            email:"sk123@gmail.com",
            password:"sk123",
            phone:1234567890
        }
    ]
let blogs=[
    {
        id:1,
        title:"Blog1",
        desc:"This is my first blog",
        date:"01-03-2026"
    },
    {
        id:2,
        title:"Blog2",
        desc:"This is my second blog",
        date:"02-03-2026"
    }
]
const typeDefs=`

type addPostResponse{
message:String
}
type loginResponse{
message: String, 
token: String
}
type User{
id:ID!, #ID is a special type in GraphQL which serialize to string
name:String,
email:String,
password:String,
phone:Int
}
type Blog{
id:ID!,
title:String,
desc:String,
date:String
}
type Query{
getUsers:[User],
getUser(id:ID!):User,
getBlogs:[Blog],
getBlogById(id:ID!):Blog
}
type Mutation{
addUser(name:String,email:String,password:String,phone:Int):User
deleteUserById(id:ID!):User
addBlog(title:String,desc:String,date:String):Blog
deleteBlogById(id:ID!):Blog
updateBlog(id:ID!,title:String,desc:String,date:String):Blog
}
`
const resolvers={
    Query:{
        getUsers:()=>{
            return users;
        },
        //Resolver function has 4 parameters(optional):parent,args,context,info    args means input argument(object)
        getUser:(parent,args,context,info)=>{
            let id=args.id;
            let user=users.find((u)=>u.id==id);
            return user;
            //return users[0];
        },
        getBlogs:()=>{
            return blogs;
        },
        getBlogById:(parent,args,context,info)=>{
            let id=args.id;
            let blog=blogs.find((b)=>b.id==id);
            return blog;
        }
    },
    Mutation:{
        login:(_args)=>{

            /**
             *  1. email and password ==> args
             * if user with email exist in database then check password 
             * if not ==> invalid emial --> invalid credentials(user)
             * 
             * if yes 
             * --> checking the password is correct or not
             * ==> yes ==> login successful ==> token 
             * ==> no ==> password incorrect --> invalid credentials(user)
             * 
             */
            let {email, password}=args;

            let user = users.find(u => u.email === email);
            if(!user){
                return {
                    message:"Invalid email...",
                    token : null
                }

            }
            if(user.password !== password){
                return {
                    message:"Invalid password...",
                    token:null
                }
                

            }

            //now we will generate the token 
            const token = jwt.sign({id:user.id,email:user.email},secret);
            return {
                message:" Login successful",
                token:token
            }

        },
        addUser:(_,args)=>{
            let {name,email,password,phone}=args;
            let newUser={
                id:String(Math.floor(Math.random()*1000000)),
                name:name,
                email:email,
                password:password,
                phone:phone
            }
            users.push(newUser);
            return newUser;
        },
        deleteUserById:(_,args)=>{
            let id=args.id;
            let deletedUser=users.find((u)=>u.id==id);
            users=users.filter((u)=>u.id!=id);
            return deletedUser;
        },
        addPost:(_,args)=>{
            let {userId} = context;
            if(!userId) return {message: context.message};
            let{postId,likes,content} = args;
            posts.push({postId: postId, likes:likes, content:content,userId:userId});
            return {message:"Post added successfully"};
        },
        addBlog:(_,args)=>{
            let {title,desc,date}=args;
            let newBlog={
                id:String(Math.floor(Math.random()*1000000)),
                title:title,
                desc:desc,
                date:date
            }
            blogs.push(newBlog);
            return newBlog;
        },
        deleteBlogById:(_,args)=>{
            let id=args.id;
            let deletedBlog=blogs.find((b)=>b.id==id);
            blogs=blogs.filter((b)=>b.id!=id);
            return deletedBlog;
        },
        updateBlog:(_,args)=>{
            let {id,title,desc,date}=args;
            let blog=blogs.find((b)=>b.id==id);
            if(blog){
                blog.title=title;
                blog.desc=desc;
                blog.date=date;
            }
            return blog;
        }
        
    }

}
const server = new ApolloServer({
    typeDefs,
    resolvers
});
await startStandaloneServer(server, {
    listen: { port: 4000 },
    context:({req})=>{
        let token = req.headers.authorization;
        if(!token)return {message: "No token present", userId:null};
        try{
            let decoded = jwt.verify(token,secret);

            if(!decode){
                return {message:"Invalid token", userId: null};

            }
            return {message:"Token verified", userId: decoded.id};
            
        }
    }
});
console.log("Server started");

// Create new entity:Blog{
// Id,title,desc,date
// }
// Query: 
// getBlogs:[Blog]
// getBlogByID:Blog
// Mutation:
// addBlog
// deleteBlogById
// updateBlog