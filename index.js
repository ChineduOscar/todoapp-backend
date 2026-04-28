import express from 'express'
import dotenv from 'dotenv'
import todoRoutes from './routes/todo.routes.js'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3000


// Todo route
app.use('/todos', todoRoutes)

async function start(){
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log('Your database is running')

        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}`)
        })

    }
    catch(error){
        console.log(error.message)
    }
}

start()