const { Todo } = require("../model/Todo")

exports.addTodo = async (req,res)=>{
    const todo = new Todo(req.body)
    try{
        const response = await todo.save()
        res.status(201).json(response)
    }catch(err){
        res.status(400).json(err)
    }
    
    }

    exports.fetchTodo = async (req,res)=>{
        let query = Todo.find({})
        try{
            const docs  = await query.exec()
            res.status(201).json(docs)
        }catch(err){
            res.status(400).json(err)
        }
        
        }

        exports.deleteTodo= async (req,res)=>{
            const {id} = req.params
            try{
                const todo = await Todo.findByIdAndDelete(id)
                res.status(200).json(todo)
            }catch(err){
                res.status(400).json(err)
            }
        } 

        exports.updateTodo= async (req,res)=>{
            const {id} = req.params
            try{
                const todo = await Todo.findByIdAndUpdate(id,req.body,{
                    new:true
                })
                res.status(200).json(todo)
            }catch(err){
                res.status(400).json(err)
            }
        } 