import express, { json, Router } from "express";
import cors from 'cors'
import router from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(json())

app.use(router)

app.listen(process.env.PORT, () => {
    console.log('server barulhando na porta' + process.env.PORT)
})