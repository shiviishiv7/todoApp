import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../Entity/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  BASEURL: string = "http://localhost:8080/todo"
  constructor(private http: HttpClient) { }
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.BASEURL + "/")
  }
  getTOdoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.BASEURL + "/" + id)
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.BASEURL + '/', todo);
  }
  updateTodo(todo: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(this.BASEURL + "/" + id, todo);
  }
  deleteTodo(id: number): Observable<string> {
    return this.http.delete(this.BASEURL + "/" + id, { responseType: 'text' });
  }

}
