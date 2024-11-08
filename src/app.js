console.log("running");

const express= require("express");

const app=express();

//this will handle get call to /user
app.get("/user",(req,res)=>{
    res.send("hello frm the user");
})

app.post("/user",(req,res)=>{
    res.send("successfully send to the database");
})

app.delete("/user",(req,res)=>{
    res.send("deleted successfully");
})


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