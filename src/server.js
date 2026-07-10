import express from 'express'
import router from './routes/router.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config
const port = process.env.LOCAL_PORT
const host = process.env.DB_HOST


app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`to the http://${host}:${port}`)
})