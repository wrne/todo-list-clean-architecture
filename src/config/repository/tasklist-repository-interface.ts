import { TaskListData } from "../../entities/takslist";

export interface TaskListRepository{
	insert(task: TaskListData):Promise<void>
	delete(id: string):Promise<void>
	update(task: TaskListData): Promise<void>
	findByDate(date: Date): Promise<TaskListData[]|undefined>
	findById(id: string): Promise<TaskListData|undefined>
	listAll():Promise<TaskListData[]|undefined>
}