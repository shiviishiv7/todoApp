package com.example.demo.Controller;


import com.example.demo.Entity.Todo;
import com.example.demo.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todo")
@CrossOrigin(origins = "*")
public class TodoController {
    @Autowired
    TodoService todoService;

    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable("id")String id){
        Todo todoById = todoService.getTodoById(Integer.parseInt(id));
        return todoById;
    }
    @GetMapping("/")
    public List<Todo> getAllTodos(){
        return todoService.getAllTodo();
    }
    @PostMapping("/")
    public Todo addTodo(@RequestBody Todo todo){
        return todoService.addTodo(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable("id")String id,@RequestBody Todo todo){
        return todoService.updateTodo(todo,Integer.parseInt(id));
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable("id") String id){
        return todoService.deleteTodo(Integer.parseInt(id));
    }

}
