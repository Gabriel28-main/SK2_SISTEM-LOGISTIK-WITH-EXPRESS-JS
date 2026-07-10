import express from 'express'
import router from './routes/router.js'

const app = express()
const port = 5000


app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`to the http://localhost:${port}`)
})