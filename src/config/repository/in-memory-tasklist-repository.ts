import { TaskListData } from "../../entities/takslist";
import { TaskListRepository } from "./tasklist-repository-interface";

export class InMemoryTasklistRepository implements TaskListRepository{

	private tasklist: TaskListData[]

	constructor(tasklistRepo: Array<TaskListData>){
		this.tasklist = tasklistRepo
	}

	async listAll(): Promise<TaskListData[] | undefined> {
		return this.tasklist
	}
	
	async insert(task: TaskListData): Promise<void> {
		if (!await this.findById(task.id)){
			this.tasklist.push(task)
		}
	}
	
	async delete(id: string): Promise<void> {
		this.tasklist = this.tasklist.filter(task => task.id !== id)
	}

	async update(task: TaskListData): Promise<void> {
		
		this.tasklist = this.tasklist.map((item)=>{
			if (item.id === task.id){
				return {
					id: task.id,
					dateToFinish: task.dateToFinish,
					task: task.task,
					done: task.done
				} as TaskListData
			} else {
				return item
			}
		})
	}

	async findByDate(date: Date): Promise<TaskListData[]|undefined> {
		throw new Error("Method not implemented.");
	}
	
	async findById(id: string): Promise<TaskListData|undefined> {
		return this.tasklist.find(item => item.id === id)
	}

	

}