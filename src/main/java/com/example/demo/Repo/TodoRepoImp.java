package com.example.demo.Repo;

import com.example.demo.Entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TodoRepoImp implements TodoRepo{

    @Autowired
    JdbcTemplate template;
    @Override
    public Todo getTodoById(int id) {
        if(!isExists(id))return null;


        String q = "select * from todos where id=?";

        Todo todo = template.queryForObject(q, new RowMapper<Todo>() {
            @Override
            public Todo mapRow(ResultSet rs, int rowNum) throws SQLException {

                Todo todo = new Todo();
                todo.setId(rs.getInt("id"));
                todo.setName(rs.getString("name"));
                todo.setStatus(rs.getString("status").toString());
                todo.setCreate_on(rs.getString("create_on").toString());
                todo.setUpdate_on(rs.getString("update_on").toString());
                todo.setDescription(rs.getString("description"));
               
                return todo;
            }
        }, new Object[]{id});

        return todo;
    }

    private boolean isExists(int id) {
        String q = "select count(id) from todos where id =?";
        Integer integer = this.template.queryForObject(q, Integer.class, new Object[]{id});
        if(integer>0)return true;
        else return false;

    }

    @Override
    public List<Todo> getAllTodo() {
        String q = "select * from todos";
        List<Todo>list = new ArrayList<>();
        List<Map<String, Object>> rows = template.queryForList(q);
        for (Map<String,Object>row:rows) {
            Todo todo = new Todo();
            todo.setId(Integer.parseInt(row.get("id").toString()));
            todo.setName(row.get("name").toString());
            todo.setCreate_on(row.get("create_on").toString());
            todo.setUpdate_on(row.get("update_on").toString());
            todo.setDescription(row.get("description").toString());
            todo.setStatus(row.get("status").toString());
            list.add(todo);

        }
        return list;
    }

    @Override
    public Todo addTodo(Todo todo) {
        String q = "insert into todos (name,description,create_on,update_on,status) value (?,?,?,?,?)";
        int update = template.update(q, todo.getName(), todo.getDescription(), todo.getCreate_on(), todo.getUpdate_on(),
                todo.getStatus());
        if(update==1)return todo;
        return null;
    }

    @Override
    public String deleteTodo(int id) {
        if(!isExists(id))return "NOT DELETED";
        String q = "delete from todos where id =?";
        int update = template.update(q, new Object[]{id});
        return "DELETED";
    }

    @Override
    public Todo updateTodo(Todo todo,int id) {
        if(!isExists(id))return null;
        System.out.println(todo);
        String q = "UPDATE todos SET name=?,description=?,create_on=?,update_on=?,status=? WHERE id=?";
        int update = template.update(q,new Object[]{ todo.getName(), todo.getDescription(), todo.getCreate_on(), todo.getUpdate_on(),
                todo.getStatus(),id});
        return todo;



    }
}
