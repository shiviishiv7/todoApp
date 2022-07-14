import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../Entity/Todo';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  todo: Todo = new Todo()
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.todoService.addTodo(this.todo)
      .subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("todos")
      })
  }

}
