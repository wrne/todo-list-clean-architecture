import { TaskData } from "../../../entities/takslist";
import { TaskListRepository } from "../tasklist-repository-interface";
import sql, { ConnectionPool } from "mssql"
import "dotenv/config"

export class MSSQLTasklistRepository implements TaskListRepository{

	private tasklist: TaskData[]
	private sqlConfig: any

	constructor(){

		this.tasklist = []
		this.sqlConfig = {
			user: process.env.DB_USER,
			password: process.env.DB_PWD,
			database: process.env.DB_NAME,
			server: 'localhost',
			pool: {
			  max: 10,
			  min: 0,
			  idleTimeoutMillis: 1000
			},
			options: {
			  trustServerCertificate: true // change to true for local dev / self-signed certs
			}
		  }
	}

	async listAll(): Promise<TaskData[] | undefined> {
		const pool = await sql.connect(this.sqlConfig)
		let tasklist: TaskData[] = []
		const result = await pool.request().query(`select * from tasklist`/*,(err, rs)=>{
			console.log("rs")
			console.log(rs)
			return rs?.recordset//.forEach(task => task);
			
		}*/)
		
		console.log(`Resultset output`)
		console.log(result)

		if (!result.recordset){
			tasklist = []
		} else {
			for (let index = 0; index < result.recordset.length; index++) {
				const element = result.recordset[index];
				
				const newTask = new TaskData(element.finish,element.description,element.done)
				newTask.id = element.id
	
				tasklist.push(newTask)
			}
			
		}

		// // Tratar formato do resultset para a lista de tarefas
		return tasklist
	}
	
	async insert(task: TaskData): Promise<void> {
		const pool = await sql.connect(this.sqlConfig)

		console.log(`Inserting task at list`)
		// console.log(`Metodo mssql insert, ${task.id},${task.description}, ${task.dateToFinish},${task.done}`)

		const sttInsert: string = `insert into tasklist(id, description, finish) values(${task.id},'${task.description}',Cast('${task.dateToFinish}' as Date))`

		console.log(sttInsert)
		await pool.request().query(sttInsert,(err, rs)=>{

			if (!!err){
				console.log(err)
			}

			console.log(`Successful. Rows affected: ${rs?.rowsAffected}`)

		})
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