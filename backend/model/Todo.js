const mongoose = require("mongoose")
const {Schema} = mongoose;

const todoSchema = new Schema({
    text:{type:String,required:true},
})

const virtual = todoSchema.virtual("id")
virtual.get(function(){
    return this._id
})
todoSchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform:function(doc,res){delete res._id}
})

exports.Todo = mongoose.model("Todo", todoSchema)