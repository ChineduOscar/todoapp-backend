import { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js"
import { Router } from "express"

const router = Router()

// GET ALL TODOS 
router.get('/', getAllTodos)

// GET A SINGLE TODO
router.get('/:id', getTodo)


// CREATE A TODO
router.post('/', createTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export default router