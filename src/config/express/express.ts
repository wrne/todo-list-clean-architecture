import express,{ Request, Response, Application } from "express";
import bodyParser from "body-parser"
import setupRoutes from './routes'
import 'dotenv/config'

const app = express()

app.use(bodyParser.json())
app.use(setupRoutes)
// app.get('/hello', (req: Request, res: Response) => {
// 	res.json({ message: 'hello world with Typescript' })
//   })
  

const port = 3000
app.listen(port,() => {
	console.log(`Example app listening on port ${port}`)
  })

