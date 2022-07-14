import { Routes } from "@angular/router";
import { ListAllTodoComponent } from "../list-all-todo/list-all-todo.component";
import { CreateTodoComponent } from "../create-todo/create-todo.component";
import { UpdateTodoComponent } from "../update-todo/update-todo.component";
import { DetailTodoComponent } from "../detail-todo/detail-todo.component";
export const routes: Routes = [
  { path: '', component: ListAllTodoComponent, pathMatch: 'full' },
  { path: 'todos', component: ListAllTodoComponent },
  { path: 'create-todo', component: CreateTodoComponent },
  { path: 'update-todo/:id', component: UpdateTodoComponent },
  { path: 'detail-todo/:id', component: DetailTodoComponent }
]; // sets up routes constant where you define your routes
