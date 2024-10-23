import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

//connect to the database
mongoose.connect(process.env.MONGODB_URI)

const app = express()
const PORT = 3000
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("welcome!")
})



app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
    
})