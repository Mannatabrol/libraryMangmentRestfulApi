const express =require("express");
const app =express();
const bookRoute =require("./routes/booksRoutes")

require("./connection/conn")
app.use(express.json())

app.use("/api/v1" ,bookRoute); 
{
    res.send("hello");
};

app.get("/services" ,(req,res)=>
{
    res.send("Services page");
});

app.get("/services" ,(req,res)=>
{
    res.send("About  page");
});

app.listen(1000, ()=> {
    console.log("Server Started Sucessfully")
});



