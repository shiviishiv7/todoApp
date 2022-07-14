package com.example.demo.Services;

import com.example.demo.Entity.Todo;
import com.example.demo.Repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImp implements TodoService{

    @Autowired
    private TodoRepo todoRepo;

    @Override
    public Todo getTodoById(int id) {
        return todoRepo.getTodoById(id);
    }

    @Override
    public List<Todo> getAllTodo() {
        return todoRepo.getAllTodo();
    }

    @Override
    public Todo addTodo(Todo todo) {
        return todoRepo.addTodo(todo);
    }

    @Override
    public String deleteTodo(int id) {
        return todoRepo.deleteTodo(id);
    }

    @Override
    public Todo updateTodo(Todo todo, int id) {
        return todoRepo.updateTodo(todo,id);
    }
}
