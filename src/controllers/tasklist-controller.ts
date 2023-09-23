import { InMemoryTasklistRepository } from "../config/repository/in-memory-tasklist-repository"
import { TaskListRepository } from "../config/repository/tasklist-repository-interface"
import { TaskListData } from "../entities/takslist"
import { AddTasklistUsecase } from "../usecases/addTaks-usecase"
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

		const addTasklistUsecase = new AddTasklistUsecase(this.repository)
		const newTask = {
			dateToFinish: body.dueDate, 
			task: body.task, 
			done: false
		} as TaskListData
		
		return addTasklistUsecase.performe(newTask)
	}

	finishTask(id: string){
		const finishTaskUseCase = new FinishTaskUsecase(this.repository)

		return finishTaskUseCase.performe(id)
	}
}