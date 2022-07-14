package com.example.demo.Repo;

import com.example.demo.Entity.Todo;

import java.util.List;

public interface TodoRepo {
    Todo getTodoById(int id);

    List<Todo> getAllTodo();

    Todo addTodo(Todo todo);

    String deleteTodo(int  id);

    Todo updateTodo(Todo todo,int id);
}
