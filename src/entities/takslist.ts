
export class TaskListData{
	id: string
	dateToFinish: Date
	task: string
	done: boolean

	constructor(dateToFinish: Date, task: string, done: boolean){
		this.dateToFinish = dateToFinish
		this.task = task
		this.done = done
		this.id = this.createId()
	}
	
	private createId(): string{
		return (Math.random()*36).toString().substring(3, 7)
	}
}