console.log("running");

const express= require("express");

const app=express();

app.use("/test",(req,res)=>{
    res.send("Hello from the server-test");
})

app.use("/",(req,res)=>{
    res.send("Hello from the server seervere");
})

app.use("/hello",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(3000,()=>{
    console.log("server is listeing at port 3000");
});