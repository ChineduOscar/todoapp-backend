import Todo from "../models/todo.model.js"

const getAllTodos = async(req, res)=>{
    try{

        const todos = await Todo.find() 

        res.status(200).json(todos)

    }catch(error){
        res.status(500).json(error.message)
    }
}


const getTodo = async(req, res)=>{
    try{

        const id = req.params.id
        const todo = await Todo.findById(id) 

        if(!todo){
            res.status(404).json(`Todo with ID ${id} was not found`)
        }

        res.status(200).json(todo)

    }catch(error){
        res.status(500).json(error.message)
    }
}

const createTodo = async(req, res)=>{
    try{

        const body = req.body

        if(!body.title){
            return res.status(400).json('Title cannot be omitted')
        }
        const todo = await Todo.create(body)

        res.status(201).json(todo)


    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const updateTodo = async(req, res)=>{
    try{
        const id = req.params.id
        const body = req.body

        const todo = await Todo.findByIdAndUpdate(id, body, {
            new: true,
           runValidators: true,
        })

        if(!todo){
            res.status(404).json(`Todo with ID ${id} was not found`)
        }

        res.status(200).json(todo)

    }catch(error){
        res.status(500).json(error.message)
    }
}

const deleteTodo =async(req, res)=>{
    try{
        const id = req.params.id

        const todo = await Todo.findByIdAndDelete(id)

        if(!todo){
            res.status(404).json(`Todo with ID ${id} was not found`)
        }

        res.status(200).json(todo)
    }catch(error){
        res.status(500).json(error.message)
    }
}

export {getAllTodos, getTodo, createTodo, updateTodo, deleteTodo}