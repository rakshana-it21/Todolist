const mongoose=require("mongoose")
const TodoSchema=new mongoose.Schema({
    task:String
})
const TodoModel=mongoose.model("mass",TodoSchema)
module.exports=TodoModel