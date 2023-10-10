import { InMemoryTasklistRepository } from "../config/repository/in-memory-tasklist-repository"
import { TaskListRepository } from "../config/repository/tasklist-repository-interface"
import { TaskData } from "../entities/takslist"
import { AddTaskUsecase } from "../usecases/addTaks-usecase"
import { DeleteTaskUsecase } from "../usecases/deleteTaks-usecase"
import { FinishTaskUsecase } from "../usecases/finish-task-usecase"
import { ListTasksUsecase } from "../usecases/listTaks-usecase"

export class TasklistController{
	repository: TaskListRepository
	
	constructor(){
		this.repository = new InMemoryTasklistRepository([])
	}

	listTasks(){

		const listTasksUseCase = new ListTasksUsecase(this.repository)
		return listTasksUseCase.performe()
	}

	addTask(body: any){

		const addTaskUsecase = new AddTaskUsecase(this.repository)
		const newTask = {
			dateToFinish: body.dueDate, 
			description: body.task, 
			done: false
		} as TaskData
		
		return addTaskUsecase.performe(newTask)
	}

	finishTask(id: string){
		const finishTaskUseCase = new FinishTaskUsecase(this.repository)

		return finishTaskUseCase.performe(id)
	}

	deleteTask(id: string){
		const deleteTaskUseCase = new DeleteTaskUsecase(this.repository)

		return deleteTaskUseCase.performe(id)
	}
}