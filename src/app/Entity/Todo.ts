export class Todo {


  id: number
  name: string
  description: string
  create_on: string = new Date().toISOString()
  update_on: string = new Date().toISOString()
  status: string = "CREATED"
}
