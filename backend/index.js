const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const server = express()
const todoRouter = require("./routes/Todo")


//middlewares
server.use(cors())
server.use(express.json());
server.use("/todo",todoRouter)

try{
    mongoose.connect("mongodb://0.0.0.0:27017/todoList")
}catch(error){
    console.log(error)
}

server.get("/",(req,res)=>{
    res.json({status:"success"})
})



server.listen(8080,()=>{
    console.log("server started")
})

