
export class TaskData{
	id: string
	dateToFinish: Date
	description: string
	done: boolean

	constructor(dateToFinish: Date, description: string, done: boolean){
		this.dateToFinish = dateToFinish
		this.description = description
		this.done = done
		this.id = this.createId()
	}
	
	private createId(): string{
		return (Math.random()*36).toString().substring(3, 7)
	}
}