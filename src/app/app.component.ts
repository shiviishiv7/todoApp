import {Component, OnInit} from '@angular/core';
import {TodoService} from "./Service/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TodoApp';

  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAllTodos()
      .subscribe(data=>{
        console.log(data)
      })
  }
}
