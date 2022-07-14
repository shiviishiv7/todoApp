import { Component, OnInit } from '@angular/core';
import { TodoService } from "../Service/todo.service";
import { Observable } from "rxjs";
import { Todo } from "../Entity/Todo";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-all-todo',
  templateUrl: './list-all-todo.component.html',
  styleUrls: ['./list-all-todo.component.css']
})
export class ListAllTodoComponent implements OnInit {

  todos: Todo[]
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTodos()
  }

  private getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe(data => {
        this.todos = data
      })
  }
  detail(id: number) {
    this.router.navigate(["detail-todo", id])
  }
  delete(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe(data => {
        console.log(data)
        this.getAllTodos()
      })
  }
  update(id: number) {
    this.router.navigate(["update-todo", id])
  }
  createTodo() {
    this.router.navigateByUrl("create-todo")
  }
}
