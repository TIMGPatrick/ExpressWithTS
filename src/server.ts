import Express from "express"
import dotenv from "dotenv"
import home from './routes/home';
import spacex from "./routes/spacex";

dotenv.config()
const PORT = process.env.PORT

const app : Express.Application = Express()

app.get("/", (req: Express.Request, res: Express.Response) => {
    res.send("Hello world")
})

app.use('/home', home)
app.use('/spacex', spacex)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
