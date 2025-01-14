const express=require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const TodoModel=require("./models/Todos")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/mass")

app.post("/add",(req,res)=>{
  const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>
        res.json(result)
    ).catch
        (err=>res.json(err))
    
})
app.get("/get",(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.listen(8000,()=>{
console.log("server is running")
})
