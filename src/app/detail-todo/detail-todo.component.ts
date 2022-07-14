import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../Entity/Todo';
import { TodoService } from '../Service/todo.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  todo: Todo
  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.getTodoById(id);
  }
  getTodoById(id: number) {
    this.todoService.getTOdoById(id)
      .subscribe(data => {
        this.todo = data
      })
  }
  updateTodo() {
    this.router.navigate(["update-todo", this.todo.id])
  }
  completedTodo() {
    this.todo.status = "COMPLETED"
    this.todoService.updateTodo(this.todo, this.todo.id)
      .subscribe(data => {
        console.log(data)
        this.router.navigateByUrl('todos')
      })
  }
}
