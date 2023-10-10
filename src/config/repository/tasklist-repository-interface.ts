import { TaskData } from "../../entities/takslist";

export interface TaskListRepository{
	insert(task: TaskData):Promise<void>
	delete(id: string):Promise<void>
	update(task: TaskData): Promise<void>
	findByDate(date: Date): Promise<TaskData[]|undefined>
	findById(id: string): Promise<TaskData|undefined>
	listAll():Promise<TaskData[]|undefined>
}