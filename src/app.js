console.log("running");

const express= require("express");

const app=express();

//this will handle get call to /user
// /*app.get("/user",(req,res)=>{
//     res.send("hello frm the user");
// })*/


app.get("/user/:userid",(req,res)=>{
    console.log(req.params);    
    res.send("hello frm the user");
     })

app.use("/profil?es",(req,res)=>{
    res.send("profile founded");
})

app.use("/ab+c",(req,res)=>{
    res.send("abc done ");
})

app.use("/ab*cd",(req,res)=>{
    res.send("abcd  multiplied done ");
})


// "/asfaffly?name=amit&id=43"
app.use(/.*fly$/,(req,res)=>{
    console.log(req.query);
    res.send("anything ends with fly works here   ");
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