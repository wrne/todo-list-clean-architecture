import { TaskData } from "../entities/takslist";
import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class AddTaskUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}
	public async performe(task: TaskData):Promise<string>{

		const newTask = new TaskData(task.dateToFinish,task.description, task.done)
		await this.repository.insert(newTask)
		
		return newTask.id

	}

}