import { TaskData } from "../../entities/takslist";
import { TaskListRepository } from "./tasklist-repository-interface";

export class InMemoryTasklistRepository implements TaskListRepository{

	private tasklist: TaskData[]

	constructor(tasklistRepo: Array<TaskData>){
		this.tasklist = tasklistRepo
	}

	async listAll(): Promise<TaskData[] | undefined> {
		return this.tasklist
	}
	
	async insert(task: TaskData): Promise<void> {
		if (!await this.findById(task.id)){
			this.tasklist.push(task)
		}
	}
	
	async delete(id: string): Promise<void> {
		this.tasklist = this.tasklist.filter(task => task.id !== id)
	}

	async update(task: TaskData): Promise<void> {
		
		this.tasklist = this.tasklist.map((item)=>{
			if (item.id === task.id){
				return {
					id: task.id,
					dateToFinish: task.dateToFinish,
					description: task.description,
					done: task.done
				} as TaskData
			} else {
				return item
			}
		})
	}

	async findByDate(date: Date): Promise<TaskData[]|undefined> {
		throw new Error("Method not implemented.");
	}
	
	async findById(id: string): Promise<TaskData|undefined> {
		return this.tasklist.find(item => item.id === id)
	}

	

}