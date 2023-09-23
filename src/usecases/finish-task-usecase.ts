import { TaskListData } from "../entities/takslist";
import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class FinishTaskUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}

	async performe(id: string):Promise<void>{
		const task: TaskListData|undefined = await this.repository.findById(id)

		if (!!task){
			this.repository.update({
				...task,
				done: true }as TaskListData)
		}

	}

}