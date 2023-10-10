import { Router, Request, Response, Application } from 'express';
import { TasklistController } from '../../controllers/tasklist-controller';


const route = Router()
const tasklistController = new TasklistController()

route.get('/hello', (req: Request, res: Response) => {
	res.json({ message: 'hello world with Typescript' })
  })

route.get('/list', async (req: Request, res: Response)=>{
	
	console.log('route list')
	res.json(await tasklistController.listTasks())	
})

route.post('/addtask', async (req: Request, res: Response)=>{
	
	console.log(`route addtask ${req}`)
	res.json(await tasklistController.addTask(req.body))	
})

route.post('/finish', async (req: Request, res: Response)=>{
	
	console.log(`route finishTask ${req.body.id}`)
	res.json(await tasklistController.finishTask(req.body.id))	
})

route.post('/delete', async (req: Request, res: Response)=>{
	
	console.log(`route deleteTask ${req.body.id}`)
	res.json(await tasklistController.deleteTask(req.body.id))	

})

export default route