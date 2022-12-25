const mongoose = require('mongoose')

const Todo = require('../models/todo_model');

const RetrieveTodosById = async (id) => {
    if (!mongoose.isObjectIdOrHexString(id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    return {
        id: todo.id,
        title: todo.title,
        datetime: todo.datetime,
        description: todo.description,
        completed: todo.completed
    };
}

const RetrieveTodoAll = async () => {
    const todos = await Todo.find();
    let todo_arr = [];
    todos.forEach((todo) => {
        todo_arr.push({
            id: todo.id,
            title: todo.title,
            datetime: todo.datetime,
            description: todo.description,
            completed: todo.completed
        });
    });
    return todo_arr;
}

const RemoveAll = async () => {
    return await Todo.remove();
}

const RemoveById = async (id) => {
    return await Todo.remove(id);
}

const ModifyById = async (obj) => {
    if (!mongoose.isObjectIdOrHexString(obj.id)) {
        throw "Invalid ID";
    }
    const todo = await Todo.findById(obj.id);
    if (!todo) {
        throw "Todo with specified ID not found";
    }
    todo.title = obj.title;
    todo.datetime = obj.datetime;
    todo.description = obj.description;
    todo.completed = obj.completed;
    todo.save();
}

const Add = async (obj) => {
    const todo = new Todo({
        title: obj.title,
        datetime: obj.datetime,
        description: obj.description,
        completed: obj.completed
    });
    todo.save();
    return {
        id: todo.id,
        title: todo.title,
        datetime: todo.datetime,
        description: todo.description,
        completed: todo.completed
    };
}

module.exports = {
    RetrieveTodosById,
    RetrieveTodoAll,
    RemoveAll,
    RemoveById,
    ModifyById,
    Add
}
