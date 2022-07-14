import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Entity/Todo';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  todo: Todo = new Todo()
  constructor(private todoService: TodoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id: number = this.route.snapshot.params['id']
    this.getTodoById(id);
  }
  getTodoById(id: number) {
    this.todoService.getTOdoById(id)
      .subscribe(data => {
        this.todo = data
        console.log(data)
      })
  }
  OnSubmit() {
    console.log(this.todo)
    this.todoService.updateTodo(this.todo, this.todo.id)
      .subscribe(data => {
        console.log(data)
        this.todo = data
        this.router.navigateByUrl("todos")
      })
  }

}
