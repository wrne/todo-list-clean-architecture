import { TaskListData } from "../entities/takslist";
import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class AddTasklistUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}
	public async performe(tasklist: TaskListData):Promise<string>{

		const newTask = new TaskListData(tasklist.dateToFinish,tasklist.task, tasklist.done)
		await this.repository.insert(newTask)
		
		return newTask.id

	}

}