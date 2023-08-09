const { addTodo, fetchTodo, deleteTodo, updateTodo } = require('../controler/Todo');

const router = require('express').Router(); 

router
.post("/", addTodo)
.get("/", fetchTodo)
.delete("/:id", deleteTodo)
.patch("/:id", updateTodo)


module.exports = router