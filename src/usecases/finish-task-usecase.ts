import { TaskData } from "../entities/takslist";
import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class FinishTaskUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}

	async performe(id: string):Promise<void>{
		const task: TaskData|undefined = await this.repository.findById(id)

		if (!!task){
			this.repository.update({
				...task,
				done: true }as TaskData)
		}

	}

}