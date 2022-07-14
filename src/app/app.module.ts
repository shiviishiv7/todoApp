import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { Auth } from "./Security/Auth";
import { ListAllTodoComponent } from './list-all-todo/list-all-todo.component';
import { RouterModule } from "@angular/router";

import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { routes } from "./route/routes";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    ListAllTodoComponent,
    UpdateTodoComponent,
    DetailTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Auth, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
