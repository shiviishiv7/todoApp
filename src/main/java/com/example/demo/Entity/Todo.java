package com.example.demo.Entity;

import java.util.Date;

public class Todo {
    private int id;
    private String name;
    private String description;
    private String create_on;
    private String update_on;
    private String status;

    public Todo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name+"\t"+description+"\t"+create_on+"\t"+update_on+"\t"+status+id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreate_on() {
        return create_on;
    }

    public void setCreate_on(String create_on) {
        this.create_on = create_on;
    }

    public String getUpdate_on() {
        return update_on;
    }

    public void setUpdate_on(String update_on) {
        this.update_on = update_on;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Todo(String name, String description, String create_on, String update_on, String status) {
        this.name = name;
        this.description = description;
        this.create_on = create_on;
        this.update_on = update_on;
        this.status = status;
    }
}