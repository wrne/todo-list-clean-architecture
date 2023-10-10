import { TaskData } from "../entities/takslist";
import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class ListTasksUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}
	public async performe():Promise<TaskData[]|undefined>{

		return await this.repository.listAll()

	}

}