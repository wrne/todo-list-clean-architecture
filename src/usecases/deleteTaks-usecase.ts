import {TaskListRepository} from '../config/repository/tasklist-repository-interface'

export class AddTasklistUsecase{

	repository: TaskListRepository

	constructor( repository: TaskListRepository){

		this.repository = repository		

	}
	public async performe(id: string):Promise<boolean>{

		await this.repository.delete(id)
		return true

	}

}